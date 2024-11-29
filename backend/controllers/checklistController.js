import { fetchApplicationData } from "../utils/dataFetcher.js";
import { evaluateData } from "../utils/evaluator.js";

export async function checkApplication(req, res) {
  try {
    const applicationData = await fetchApplicationData();

    const evaluationResults = await evaluateData(applicationData);

    return res.status(200).json({
      status: "success",
      results: evaluationResults,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message:
        "An error occurred while fetching or evaluating the application.",
      error: error.message,
    });
  }
}
