"use server";
export async function getBook(slug: string) {
  try {
    const res = await fetch(`http://localhost:5000/api/v1/books/${slug}`);
    if (!res.ok) {
      throw new Error("Erro ao obter livro");
    }
    const dados = await res.json();
    return dados;
  } catch (error) {
    console.error("Erro ao obter livro:", error);
    throw error;
  }
}
