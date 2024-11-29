import { fetchApplicationData } from "./dataFetcher.js";
import { readFileSync } from "fs";
import path from "path";

const rules = JSON.parse(
  readFileSync(path.resolve("config", "checklistRules.json"))
);

export async function evaluateData() {
  try {
    const data = await fetchApplicationData();

    const results = rules.map((rule) => {
      let passed = false;

      if (rule.operator === "equals") {
        passed = evaluateEquals(data, rule);
      } else if (rule.operator === "ltvBelow") {
        passed = evaluateLTV(data, rule);
      }

      return {
        condition: rule.name,
        passed: passed,
        message: passed ? "Passed" : "Failed",
        description: rule.description || "",
      };
    });

    return results;
  } catch (error) {
    console.error("Error during evaluation:", error);
    throw new Error("Error evaluating data");
  }
}

function evaluateEquals(data, rule) {
  const fieldValue = data[rule.field];
  return fieldValue === rule.expectedValue;
}

function evaluateLTV(data, rule) {
  const loanRequired = data[rule.fields[0]];
  const purchasePrice = data[rule.fields[1]];

  if (!loanRequired || !purchasePrice) {
    return false;
  }

  const ltv = (loanRequired / purchasePrice) * 100;
  return ltv < rule.expectedValue;
}
