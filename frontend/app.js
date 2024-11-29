async function fetchEvaluationResults() {
  try {
    const response = await axios.get("http://localhost:8000/api/checklist");

    const results = response.data.results;

    const tableBody = document.querySelector("#evaluation-table tbody");
    tableBody.innerHTML = "";

    results.forEach((result) => {
      const row = document.createElement("tr");

      const conditionCell = document.createElement("td");
      conditionCell.textContent = result.condition;
      row.appendChild(conditionCell);

      const statusCell = document.createElement("td");
      statusCell.textContent = result.message;
      statusCell.classList.add(result.passed ? "passed" : "failed");
      row.appendChild(statusCell);

      const descriptionCell = document.createElement("td");
      descriptionCell.textContent =
        result.description || "No description available";
      descriptionCell.classList.add("description");
      row.appendChild(descriptionCell);

      tableBody.appendChild(row);
    });

    document.getElementById("loading-message").style.display = "none";
  } catch (error) {
    console.error("Error fetching evaluation results:", error);

    document.getElementById("loading-message").textContent =
      "Error loading results. Please try again later.";
  }
}

window.onload = fetchEvaluationResults;
