"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";

export function Control() {
  const params = useParams();
  const id = params.id;

  const router = useRouter();
  return (
    <ul>
      <li>
        <Link href="/create">Creasfsfte</Link>
      </li>
      {id ? (
        <>
          <li>
            <Link href={"/update/" + id}>Update</Link>
          </li>
          <li>
            <input
              type="button"
              value="delete"
              onClick={() => {
                const options = { method: "DELETE" };
                fetch("http://localhost:9999/topics/" + id, options)
                  .then((res) => res.json())
                  .then((result) => {
                    router.push("/");
                  });
              }}
            />
          </li>
        </>
      ) : null}
    </ul>
  );
}
