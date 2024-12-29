function submitData(name, email) {
    return fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Explicitly set to application/json
        "Accept": "application/json", // Include the Accept header for consistency
      },
      body: JSON.stringify({ name, email }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        const body = document.querySelector("body");
        const idElement = document.createElement("p");
        idElement.textContent = `New user ID: ${data.id}`;
        body.appendChild(idElement);
      })
      .catch((error) => {
        const body = document.querySelector("body");
        const errorElement = document.createElement("p");
        errorElement.textContent = `Error: ${error.message}`;
        body.appendChild(errorElement);
      });
  }
  