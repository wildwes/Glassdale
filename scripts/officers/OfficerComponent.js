import { useOfficers } from "./ConvictionsDataProvider.js";
import Officer from "./officer.js";
​
const eventHub = document.querySelector("#mainContainer");
const contentTargetHTML = document.querySelector(".officersContainer");
​
const ConvictionSelect = () => {
  const convictions = useOfficers();
​
  eventHub.addEventListener("change", changeEvent => {
    if (changeEvent.target.classList.contains("dropdown")) {
      const selectConvictions = changeEvent.target.value;
​
      const crime = new CustomEvent("crimeSelected", {
        detail: {
          crime: selectOfficers
        }
      });
      eventHub.dispatchEvent(Officer);
    }
  });
​
  const renderData = officerCollection => {
    contentTargetHTML.innerHTML += `
   <select class="dropdown" id="OfficerSelect">
   <option value="0">Please select a crime...</option>
    ${OfficerCollection.map(
      conviction => `<option class="OfficeerDisplay">${Officer}</option>`
    )};
   </select>
    `;
  };
  renderData(Officer.sort());
};
​
export default OfficerSelect;