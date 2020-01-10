import { useOfficer } from "./OfficerProvider.js";
import Officer from "./Officer.js";

console.log("****  Officer List module code  ****");

const contentTarget = document.querySelector(".OfficerContainer");

export const OfficerList = () => {
  // Load the application state to be used by this component

  const appStateOfficer = useOfficer();

  console.log("**** I am the list component  ****");

  contentTarget.innerHTML = `

    <div class="Officer">
            ${appStateOfficer
              .map(currentOfficerObject => {
                const OfficerHTML = Officer(currentOfficerObject);
                return OfficerHTML;
              })
              .join("")}
        </div>
    `;
  console.groupEnd();
};
