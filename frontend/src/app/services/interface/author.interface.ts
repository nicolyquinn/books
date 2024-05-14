export interface Author {
  id?: number;
  title?: string;
  slug?: string;
  biography?: string | TrustedHTML;
  authors?: string;
  publisher?: string;
  synopsis?: string;
}
