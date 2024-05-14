"use server";
export async function getAuthor(slug: string) {
  try {
    const res = await fetch(
      `http://localhost:5000/api/v1/books/author/${slug}`
    );
    if (!res.ok) {
      throw new Error("Erro ao obter autor");
    }
    const dados = await res.json();
    return dados;
  } catch (error) {
    console.error("Erro ao obter autor:", error);
    throw error;
  }
}
