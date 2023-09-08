export function renderPage(route, container="content", callback= null){
    const content = document.getElementById(container);
    content.innerHTML = ''; // Clear the content

    fetch(window.location.pathname+route+".html")
        .then(response => {if (!response.ok) {
            throw new Error('Page not found');
        }
        return response.text();})
        .then(html => {
            content.innerHTML = html;

            if (typeof callback === "function") {
                const renderedHtmlElement = content.firstElementChild;
                callback(renderedHtmlElement);
            }
        })
        .catch(error => {
            console.error('Error loading page:', error);
        });
}