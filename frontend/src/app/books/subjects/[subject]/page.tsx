"use client";
import { getSubject } from "@/services/api/subject.get";
import { Book } from "@/services/interface/book.interface";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SubjectPage() {
  const [subject, setSubject] = useState([]);
  const searchParams = useSearchParams();
  const search = searchParams.get("name");

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        if (search !== null) {
          const data = await getSubject(search);
          setSubject(data);
        }
      } catch (error) {
        console.error("Erro ao obter os livros:", error);
      }
    };

    fetchBooks();
  }, []);
  return (
    <div>
      Subject: {search}
      <ul>
        {subject.map((book: Book, index) => (
          <li key={index} className="mt-10">
            <h2 className="font-extrabold">{book.title}</h2>
            <p>Author: {book.author}</p>
            <p>{book.publisher}</p>
            <p dangerouslySetInnerHTML={{ __html: book.synopsis || "" }}></p>
          </li>
        ))}
      </ul>
    </div>
  );
}
