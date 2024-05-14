"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { deleteBook } from "@/services/api/book.delete";
import { getBook } from "@/services/api/book.get";
import { Book } from "@/services/interface/book.interface";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function BookPage() {
  const [subject, setSubject] = useState([]);
  const searchParams = useSearchParams();
  const search = searchParams.get("name");

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        if (search !== null) {
          const data = await getBook(search);
          setSubject(data);
        }
      } catch (error) {
        console.error("Erro ao obter os livros:", error);
      }
    };

    fetchBooks();
  }, []);
  return (
    <div className="m-5">
      {subject.map((book: Book, index) => (
        <Card key={index} className="p-5">
          <CardHeader>
            <h2 className="font-extrabold">{book.title}</h2>
            <p>Author: {book.author}</p>
          </CardHeader>
          <CardContent>Publisher: {book.publisher}</CardContent>
          <p dangerouslySetInnerHTML={{ __html: book.synopsis || "" }}></p>
          <Button className="rounded mt-3" onClick={() => deleteBook(book.id!)}>
            DELETE
          </Button>
        </Card>
      ))}
    </div>
  );
}
