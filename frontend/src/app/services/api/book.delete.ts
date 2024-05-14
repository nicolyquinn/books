"use server";
export async function deleteBook(bookId: number): Promise<void> {
  try {
    const baseUrl = "http://localhost:5000";
    const endpoint = `/api/v1/books/delete/${bookId}`;

    // Envia a solicitação DELETE para excluir o livro com o ID especificado
    const response = await fetch(baseUrl + endpoint, {
      method: "DELETE",
    });

    // Verifica se a solicitação foi bem-sucedida
    if (response.ok) {
      console.log(`Livro com ID ${bookId} excluído com sucesso.`);
    } else {
      // Caso contrário, lança um erro com a mensagem de erro recebida
      const errorData = await response.json();
      throw new Error(
        errorData.message || "Ocorreu um erro ao excluir o livro."
      );
    }
  } catch (error) {
    console.error("Ocorreu um erro ao excluir o livro:", error);
  }
}
