// 'use client'

import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Control } from "./Control";

export const metadata: Metadata = {
  title: "게시판으로 발전 하는 사이트",
  description: "Generated by create next app",
};

interface Itopic {
  id : number;
  title: string;
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  // const [topics, setTopics] = useState<Itopic[]>([]);

  // useEffect(()=> {
    // fetch('http://localhost:9999/topics')
    // .then(res=> res.json())
    // .then(res => {
    //   setTopics(res);
        // })
  // },[]);

  const resp = await fetch('http://localhost:9999/topics' , { next: { revalidate: 0} });
  const topics = await resp.json();
  
  return (
    <html>
      <body>
        <h1>
          <Link href="/">이곳에 공통적인 부분을 넣어주는게 좋다</Link>
        </h1>
        {/* <ol>
        {
          topics.map((topic :Itopic)=> { 
            return(
              <li key={topic.id}>
                <Link href={`/read/${topic.id}`}>{topic.title}</Link>
              </li>
            )
        })}
        </ol> */}
        {children}
        <Control />
      </body>
    </html>
  );
}
