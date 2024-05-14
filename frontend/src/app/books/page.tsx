"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import BookTable from "@/components/BookTable";

export default function Books() {
  return (
    <div className="m-10">
      <div className="flex justify-between">
        <h1 className="text-xl font-bold">List All Books</h1>
        <Link href="/books/create-book">
          <Button className="rounded">Add a new book</Button>
        </Link>
      </div>
      <BookTable />
    </div>
  );
}
