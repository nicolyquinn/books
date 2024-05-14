"use server";
export async function getAllBooks(page = 1, pageSize = 10) {
  try {
    const res = await fetch(
      `http://localhost:5000/api/v1/books?page=${page}&page_size=${pageSize}`
    );
    if (!res.ok) {
      throw new Error("Erro ao obter os livros");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Erro ao obter os livros:", error);
    throw error;
  }
}
