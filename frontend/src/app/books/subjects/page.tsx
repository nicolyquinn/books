"use client";
import { useState, useEffect } from "react";
import { getAllSubjects } from "@/services/api/allSubjects.get";
import Link from "next/link";

export default function Subjects() {
  const [uniqueSubjects, setUniqueSubjects] = useState<string[]>([]);

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const data = await getAllSubjects();
        const uniqueSubjectsSet = new Set(
          data.map((subject: any) => subject[0])
        ); // any utilizado temporariamente para evitar erro de tipo
        const uniqueSubjectsArray = Array.from(uniqueSubjectsSet).map(
          (subject: any) => String(subject)
        ); // Converte para array de strings
        setUniqueSubjects(uniqueSubjectsArray); // Atualiza o estado com assuntos únicos
      } catch (error) {
        console.error("Erro ao obter os assuntos:", error);
      }
    };

    fetchSubjects();
  }, []);

  return (
    <div>
      <h1>List All Subjects</h1>
      <ul>
        {uniqueSubjects.map((subject, index) => (
          <Link
            href={{
              pathname: "/books/subjects/subject",
              search: `?name=${encodeURIComponent(subject)}`,
            }}
            passHref
          >
            <li key={index} className="mt-10">
              <h2 className="font-extrabold">{subject}</h2>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
