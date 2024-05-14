import Link from "next/link";
import { Book } from "@/services/interface/book.interface";
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
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";
import { useEffect, useState } from "react";
import { getAllBooks } from "@/services/api/allBooks.get";

const BookTable = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const data = await getAllBooks(currentPage); // Passes the page number and items per page
        setBooks(data); // Updates state with book data
        console.log(books);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks(); // Calls the function to fetch books
  }, [currentPage]); // Updates whenever the current page changes

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1); // Decrements the current page if not already at the first page
      console.log("back page");
    }
  };

  const handleNextPage = () => {
    if (currentPage) {
      setCurrentPage(currentPage + 1); // Increments the current page if not already at the last page
      console.log("next page");
    }
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredBooks = books.filter((book) =>
    (book.title ? book.title.toLowerCase() : "").includes(
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
        <TableCaption>A list of your all books.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Book Title</TableHead>
            <TableHead>Author</TableHead>
            <TableHead className="text-right">More</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredBooks && filteredBooks.length > 0 ? (
            filteredBooks.map((book: Book) => (
              <TableRow key={book.id}>
                <TableCell className="font-medium">{book.id}</TableCell>
                <TableCell>{book.title}</TableCell>
                <TableCell>{book.author}</TableCell>
                <TableCell className="text-right">
                  {book.title_slug && (
                    <Link
                      href={{
                        pathname: "/books/book-slug",
                        search: `?name=${encodeURIComponent(book.title_slug)}`,
                      }}
                      passHref
                    >
                      <Button className="rounded">See more</Button>
                    </Link>
                  )}
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={4} className="text-center">
                No books found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <Pagination>
        <PaginationContent>
          {/* Renders the "Previous" button */}
          {currentPage > 1 && (
            <PaginationItem>
              <PaginationPrevious onClick={handlePreviousPage} />
            </PaginationItem>
          )}

          {/* Renders the "Next" button */}
          {books.length === 10 && (
            <PaginationItem>
              <PaginationNext onClick={handleNextPage} />
            </PaginationItem>
          )}
        </PaginationContent>
      </Pagination>
    </>
  );
};

export default BookTable;
