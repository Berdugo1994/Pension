async function sendPensionMock() {
  console.log("MOCK sendPensionMock");
  return {
    returns: [752, 1568, 2232, 2937],
    deposits: [780, 1560, 2340, 3120],
  };
}
export { sendPensionMock };
