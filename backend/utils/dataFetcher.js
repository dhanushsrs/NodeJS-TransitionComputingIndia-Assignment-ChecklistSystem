import axios from "axios";

export async function fetchApplicationData() {
  const url =
    "http://qa-gb.api.dynamatix.com:3100/api/applications/getApplicationById/67339ae56d5231c1a2c63639";

  try {
    const response = await axios.get(url);
    // console.log("Fetched Data:", response.data);

    return response.data;
  } catch (error) {
    console.error("Error fetching application data:", error.message);
    throw new Error("Unable to fetch application data");
  }
}
