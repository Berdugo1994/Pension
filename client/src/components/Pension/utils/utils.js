import { sendPensionMock } from "../../../__test__/mock/utils";

async function fetchPensionValues(date, salary, empr_sev, empr_gem, empe_gem) {
  try {
    const response = await fetch(
      `/api/since?date=${date}&salary=${salary}&empr_sev=${empr_sev}&empr_gem=${empr_gem}&empe_gem=${empe_gem}`
    );
    const data = await response.json();
    if (response.status === 200) {
      return data;
    } else {
    }
  } catch (err) {
    console.log(err);
  }
  // return await sendPensionMock();
}

export { fetchPensionValues };
