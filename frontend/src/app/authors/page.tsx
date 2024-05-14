"use client";
import { useState, useEffect } from "react";
import { getAllAuthors } from "@/services/api/allAuthors.get";
import AuthorTable from "@/components/AuthorTable";

export default function Authors() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const data = await getAllAuthors(); // Espera a resolução da promessa
        setAuthors(data); // Atualiza o estado com os dados dos livros
      } catch (error) {
        console.error("Erro ao obter os livros:", error);
      }
    };

    fetchAuthors(); // Chama a função para buscar os livros
  }, []); // Executa somente uma vez, quando o componente é montado

  return (
    <div className="m-10">
      <div className="flex justify-between">
        <h1 className="text-xl font-bold">List All Authors</h1>
      </div>
      <AuthorTable />
    </div>
  );
}
