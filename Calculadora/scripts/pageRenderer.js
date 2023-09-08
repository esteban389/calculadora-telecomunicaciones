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
            const errorContainer = document.createElement("div");
            console.error('Error loading page:', error);
            const errorMessageDiv = document.createElement("div");
            const stackTraceDiv = document.createElement("div");

            errorContainer.classList.add("error-message"); // Apply CSS class for styling
            errorMessageDiv.textContent = "An error occurred: " + error.message;
            stackTraceDiv.textContent = "Stack: " + error.stack;

            // Append the error message and stack trace divs to the error container
            errorContainer.appendChild(errorMessageDiv);
            errorContainer.appendChild(stackTraceDiv);

            // Append the error container to the content element
            content.appendChild(errorContainer);

        });
}