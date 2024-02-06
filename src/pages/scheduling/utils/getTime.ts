import axios from "axios";

export async function getTime() {
  try {
    const time = await axios
      .get("http://localhost:3000/api/scheduling/time")
      .then((res) => res.data);

    return time;
  } catch (e) {
    console.error(`error fetching time ${e}`);
  }
}
