import { UseConvictions } from "./ConvictionsDataProvider.js";
​
const eventHub = document.querySelector("#mainContainer");
const contentTargetHTML = document.querySelector("#convictionsContainer");
​
const ConvictionSelect = () => {
  const convictions = UseConvictions();
​
  eventHub.addEventListener("change", changeEvent => {
    if (changeEvent.target.classList.contains("dropdown")) {
      const selectConvictions = changeEvent.target.value;
​
      const crime = new CustomEvent("crimeSelected", {
        detail: {
          crime: selectConvictions
        }
      });
      eventHub.dispatchEvent(crime);
    }
  });
​
  const renderData = convictionsCollection => {
    contentTargetHTML.innerHTML += `
   <select class="dropdown" id="crimeSelect">
   <option value="0">Please select a crime...</option>
    ${convictionsCollection.map(
      conviction => `<option class="convictionsDisplay">${conviction}</option>`
    )};
   </select>
    `;
  };
  renderData(convictions.sort());
};
​
export default ConvictionSelect;