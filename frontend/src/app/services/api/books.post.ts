"use server";
export async function createBook(bookData: any): Promise<string | void> {
  try {
    const baseUrl = "http://localhost:5000";
    const endpoint = "/api/v1/books";

    // Envia a solicitação POST para criar um novo livro
    const response = await fetch(baseUrl + endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookData),
    });

    // Verifica se a solicitação foi bem-sucedida
    if (response.ok) {
      // Retorna uma mensagem de sucesso
      return "Livro criado com sucesso.";
    } else {
      // Caso contrário, lança um erro com a mensagem de erro recebida
      const errorData = await response.json();
      throw new Error(errorData.message || "Ocorreu um erro ao criar o livro.");
    }
  } catch (error) {
    // Retorna a mensagem de erro
    return "Ocorreu um erro ao criar o livro: " + error;
  }
}
