"use server";
export async function getAllAuthors() {
  try {
    const res = await fetch(`http://localhost:5000/api/v1/authors`);
    if (!res.ok) {
      throw new Error("Erro ao obter os autores");
    }
    const dados = await res.json();
    return dados;
  } catch (error) {
    console.error("Erro ao obter os autores:", error);
    throw error;
  }
}
