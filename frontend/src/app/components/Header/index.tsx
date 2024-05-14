import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full flex justify-between py-5 px-10 border-b shadow-md">
      <Link href="/">Book Library</Link>
      <div className="flex gap-4">
        <Link href="/books" className="hover:text-slate-500">
          Books
        </Link>
        <Link href="/authors" className="hover:text-slate-500">
          Authors
        </Link>
        <Link href="/books/subjects" className="hover:text-slate-500">
          Subjects
        </Link>
      </div>
    </div>
  );
};

export default Header;
