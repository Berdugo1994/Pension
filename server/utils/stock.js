const axios = require("axios");
var fs = require("fs");
const { monthToName } = require("../resources/consts");
let dowJones;
readDowJonesFile();
function readDowJonesFile() {
  //Runs when initialize the server, reads the json into an object.
  fs.readFile(
    "server/resources/dow_jones_since_1970.json",
    "utf8",
    function (err, data) {
      if (err) console.log(err);
      dowJones = JSON.parse(data);
      console.log("dow jones file readed");
    }
  );
}

function dowJonesSince(date, salary, empr_sev, empr_gem, empe_gem) {
  let monthInvestmentEmployer = parseInt(
    (salary * (empr_sev + empr_gem)) / 100
  );
  let monthInvestmentEmployee = parseInt((salary * empe_gem) / 100);
  const monthYear = date.split("-");
  let month = monthYear[0];
  month = monthToName[month];
  const year = monthYear[1].substring(2);
  const data = getReturnsFromDowByDate(month + " " + year);
  console.log("start", data);
  let totalReturns = 0;
  let employerInvestment = 0;
  let employeeInvestment = 0;
  data.map((elem) => {
    employerInvestment += monthInvestmentEmployer;
    employeeInvestment += monthInvestmentEmployee;
    elem["employerInvestment"] = employerInvestment;
    elem["employeeInvestment"] = employeeInvestment;
    elem["totalInvestment"] = employerInvestment + employeeInvestment;
    totalReturns = parseInt(
      (totalReturns + monthInvestmentEmployer + monthInvestmentEmployee) *
        elem["returns"]
    );
    elem["returns"] = totalReturns;
    console.log(elem);
  });
  console.log("finish", data);
  return data;
}

function getReturnsFromDowByDate(date) {
  let returnAndDate = [];
  let index = 0;
  let curr = dowJones[index];
  while (date != undefined && date != curr["Date"]) {
    returnAndDate.push({
      returns: (100 + parseFloat(curr["Change %"].slice(0, -1))) / 100,
      date: curr["Date"],
    });
    curr = dowJones[++index];
  }
  returnAndDate.reverse();
  return returnAndDate;
}

module.exports.dowJonesSince = dowJonesSince;
