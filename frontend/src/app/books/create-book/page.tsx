"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { createBook } from "@/services/api/books.post";
import React, { ChangeEvent, useState } from "react";

export default function CreateBook() {
  const [bookData, setBookData] = useState({
    title: "",
    author: "",
    author_slug: "",
    author_bio: "",
    authors: "",
    publisher: "",
    synopsis: "",
  });

  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setBookData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Envia os dados do livro para a função que faz a solicitação POST
      const message = await createBook(bookData);
      // Exibe o toast com a mensagem recebida se for uma string válida
      if (typeof message === "string") {
        toast({
          title: "Success",
          description: message,
          variant: "success",
          duration: 5000, // Define a duração do toast em milissegundos (opcional)
        });
      }
    } catch (error) {
      // Exibe o toast de erro se ocorrer um erro ao criar o livro
      toast({
        title: "Error",
        description: "Ocorreu um erro ao criar o livro.",
        variant: "destructive", // Define o status do toast como erro
        duration: 5000, // Define a duração do toast em milissegundos (opcional)
      });
    }
  };

  function handleAuthorChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    // Verifique se o campo alterado é o autor
    if (name === "author") {
      // Converta o valor do autor para slug
      const authorSlug = value
        .toLowerCase() // Converta para minúsculas
        .replace(/\s+/g, "-") // Substitua espaços por hífens
        .replace(/[^a-z0-9-]/g, ""); // Remova caracteres especiais
      // Atualize o estado com o valor do autor e o slug do autor
      setBookData({
        ...bookData,
        [name]: value,
        author_slug: authorSlug,
      });
    } else {
      // Se o campo alterado não for o autor, atualize apenas o estado com o novo valor
      setBookData({
        ...bookData,
        [name]: value,
      });
    }
  }

  return (
    <div className="m-10">
      <h1 className="text-xl font-bold mb-5">Add a new book</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <div className="flex gap-2">
          <div className="w-full">
            <label htmlFor="title">Title:</label>
            <Input
              className="rounded"
              type="text"
              id="title"
              name="title"
              value={bookData.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="w-full">
            <label htmlFor="author">Author:</label>
            <Input
              className="rounded"
              type="text"
              id="author"
              name="author"
              value={bookData.author}
              onChange={handleAuthorChange}
              required
            />
          </div>
        </div>

        <label htmlFor="author_slug">Author Slug:</label>
        <Input
          className="rounded"
          disabled
          type="text"
          id="author_slug"
          name="author_slug"
          value={bookData.author_slug}
          onChange={handleAuthorChange}
          required
        />

        <label htmlFor="author_bio">Author Bio:</label>
        <Textarea
          className="rounded"
          id="author_bio"
          name="author_bio"
          value={bookData.author_bio}
          onChange={handleChange}
          required
        />

        <label htmlFor="authors">Authors:</label>
        <Input
          className="rounded"
          type="text"
          id="authors"
          name="authors"
          value={bookData.authors}
          onChange={handleChange}
          required
        />

        <label htmlFor="publisher">Publisher:</label>
        <Input
          className="rounded"
          type="text"
          id="publisher"
          name="publisher"
          value={bookData.publisher}
          onChange={handleChange}
          required
        />

        <label htmlFor="synopsis">Synopsis:</label>
        <Textarea
          className="rounded"
          id="synopsis"
          name="synopsis"
          value={bookData.synopsis}
          onChange={handleChange}
          required
        />

        <Button type="submit" className="rounded h-14">
          Create Book
        </Button>
      </form>
    </div>
  );
}
