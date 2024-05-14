import Link from "next/link";
import { Button } from "../ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { useEffect, useState } from "react";
import { getAllAuthors } from "@/services/api/allAuthors.get";
import { Author } from "@/services/interface/author.interface";

const AuthorTable = () => {
  const [authors, setAuthors] = useState<Author[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

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

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredAuthor = authors.filter((author) =>
    (author.title ? author.title.toLowerCase() : "").includes(
      searchTerm.toLowerCase()
    )
  );

  return (
    <>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by title"
          value={searchTerm}
          onChange={handleSearch}
          className="border border-gray-300 rounded-md px-3 py-1"
        />
      </div>
      <Table>
        <TableCaption>A list of your all authors.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Author</TableHead>
            <TableHead>Biography</TableHead>
            <TableHead className="text-right">More</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredAuthor && filteredAuthor.length > 0 ? (
            filteredAuthor.map((author: Author) => (
              <TableRow key={author.id}>
                <TableCell className="font-medium">{author.id}</TableCell>
                <TableCell>{author.title}</TableCell>
                <TableCell>
                  {author.biography && (
                    <p
                      dangerouslySetInnerHTML={{ __html: author.biography }}
                    ></p>
                  )}
                </TableCell>
                <TableCell className="text-right">
                  {author.slug && (
                    <Link
                      href={{
                        pathname: `/books/author/${author.slug}`,
                        search: `?name=${author.slug}`,
                      }}
                      passHref
                    >
                      <Button className="rounded">See books</Button>
                    </Link>
                  )}
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={4} className="text-center">
                No authors found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
};

export default AuthorTable;
