### Checklist System
A simple checklist system built using Node.js for the backend and HTML/CSS/JS for the frontend. The system fetches checklist rules from the backend, evaluates them based on provided data, and displays the evaluation results.

### Project Overview
This project allows you to evaluate a list of conditions (checklist rules) based on a given task or set of data. The rules are fetched from the backend and evaluated on the frontend, with results displayed in a table.

### Tech Stack
Backend: Node.js, Express.js
Frontend: HTML, CSS, JavaScript
API Request Handling: Axios (for making HTTP requests from frontend to backend)

### Setup Instructions
## Backend Setup
1. Clone the repository:
git clone https://github.com/dhanushsrs/NodeJS-TransitionComputingIndia-Assignment-ChecklistSystem.git
cd NodeJS-TransitionComputingIndia-Assignment-ChecklistSystem

2. Install dependencies:
In the backend folder, install the required npm packages (Express, etc.):
npm install

3. Start the server:
Run the following command to start the Node.js server:
node server.js

### Frontend Setup
1. Open the frontend folder.
2. Open index.html in your browser. You should see a table that is populated with checklist results once the page loads.

### API Endpoint
/api/checklist
Method: GET
Description: Fetches the checklist results by evaluating the predefined rules.

### Logic Overview
The backend evaluates a set of predefined rules (conditions) to determine if they pass or fail. Each rule has:
  1. name: The name of the condition (e.g., "Valuation Fee Paid").
  2. field(s): The field(s) to be checked (single field or an array of fields).
  3. expectedValue: The value the field is expected to match.
  4. operator: The operator used to evaluate the condition (e.g., equals, ltvBelow).
  5. description: A short description of what the condition checks for.
     
The backend evaluates these conditions based on the fields provided, compares the field values with the expectedValue, and then returns a set of evaluation results (whether the condition passed or failed) to the frontend.

### Adding/Modifying Checklist Rules

## Adding a New Rule: Simply add a new object to the checklistRules array in server.js.
Example of adding a new rule to check for "UK Resident":
{
  name: "UK Resident",
  field: "isUkResident",
  expectedValue: true,
  operator: "equals",
  description: "Applicant must be UK resident."
}

## Modifying an Existing Rule: If you need to change an existing rule, locate the rule in the checklistRules array and modify the name, field, expectedValue, operator, or description as needed.
Example: Changing the expectedValue for "Risk Rating Medium":
{
  name: "Risk Rating Medium",
  field: "riskRating",
  expectedValue: "Low",  // Updated expected value
  operator: "equals",
  description: "Applicant's risk rating must be 'Low'."
}



