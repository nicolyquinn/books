export interface Book {
  id?: number;
  title?: string;
  author?: string;
  author_id?: number;
  biography?: string;
  authors?: string;
  title_slug?: string;
  author_slug?: string;
  isbn13?: number;
  isbn10?: string;
  price?: string;
  format?: string;
  publisher?: string;
  pubdate?: string;
  edition?: string;
  subjects?: string;
  lexile?: string;
  pages?: number;
  dimensions?: string;
  overview?: string;
  excerpt?: string;
  synopsis?: string;
  toc?: string;
  editorial_reviews?: string;
}
