"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { getAuthor } from "@/services/api/author.get";
import { Author } from "@/services/interface/author.interface";
import { Book } from "@/services/interface/book.interface";
import { useEffect, useState } from "react";

export default function AuthourPage({ params }: { params: { slug: string } }) {
  const [authorBooks, setAuthorBooks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const data = await getAuthor(params.slug);
        setAuthorBooks(data);
      } catch (error) {
        console.error("Erro ao obter os livros:", error);
      }
    };

    fetchBooks();
  }, []);
  return (
    <div>
      {authorBooks.length > 0 && (
        <div className="m-5">
          <Card className="p-4">
            <CardHeader> {authorBooks[0].author}</CardHeader>
            {authorBooks.map((author: Author) => (
              <div key={author.id} className="mt-10">
                <CardContent>
                  <h2 className="font-extrabold">{author.title}</h2>
                  <p>Publisher: {author.publisher}</p>
                </CardContent>
                <CardDescription>
                  <p
                    dangerouslySetInnerHTML={{ __html: author.synopsis || "" }}
                  ></p>
                </CardDescription>
              </div>
            ))}
          </Card>
        </div>
      )}
    </div>
  );
}
