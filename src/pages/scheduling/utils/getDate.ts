import axios from "axios";

export async function getDate() {
  try {
    const date = await axios
      .get("http://localhost:3000/api/scheduling/date")
      .then((res) => res.data);

    return date;
  } catch (e) {
    console.error(`error fetching date ${e}`);
  }
}
