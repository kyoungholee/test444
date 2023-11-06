'use client'

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// interface Iinput {
//     title: string;
//     body: string;
// }

export default  function Update() {

    const [title, setTitles] = useState("");
    const [body, setBodys] = useState("");
    
    const router = useRouter();
    const params = useParams();
    const id = params.id;

   


    useEffect(()=> {
      fetch('http://localhost:9999/topics/'+id)
      .then(resp => resp.json())
      .then(result=> {
        console.log(result);
        setTitles(result.title);
        setBodys(result.body);
      })
    }, []);



   
    
    const handleSubmit = (e : React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();


        const options = {
            method: 'PATCH',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({title, body})
        }
        fetch(`http://localhost:9999/topics/`+id, options)
        .then(res => res.json())
        .then(result=> {
            console.log(result);
            const lastId = result.id;
            router.push(`/read/${lastId}`);
        })

    }



    const handleTitle = (e : React.ChangeEvent<HTMLInputElement>) => {
        setTitles(e.target.value)
    }

    const handleBody = (e : React.ChangeEvent<HTMLTextAreaElement>) => {
        setBodys(e.target.value);
    }



  return (
    <form onSubmit={handleSubmit}>
        <p>
            <input type="text" placeholder="title" value={title} onChange={handleTitle}/>
        </p>
        <p>
            <textarea name="body" placeholder="body" value={body} onChange={handleBody}></textarea>
        </p>
        <p>
            <input type="submit" value="update" />
        </p>
    </form>
  )
}
