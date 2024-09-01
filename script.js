function searchArticle() {
    const searchQuery = document.getElementById("searchInput").value.toLowerCase();
    // Seleccionar los artículos, por medio de busqueda
    const articles = document.querySelectorAll("section[id^='articulo']");
    let found = false;
    console.log("Prueba - Recorre la busqueda");
    // Iterar sobre cada artículo
    articles.forEach(article => {
        const textContent = article.getAttribute('data-title').toLowerCase();
        console.log("Prueba - Ingresa a forEach");
        if (textContent.includes(searchQuery)) {
            found = true;
            // Desplazar al usuario al artículo encontrado
            article.scrollIntoView({ behavior: "smooth" });
        }
    });
    if (!found) {
        alert("No se encontraron artículos con esa palabra clave.");
        console.log("Prueba - Mensaje de Palabra clave no encontrada");
    }
}
