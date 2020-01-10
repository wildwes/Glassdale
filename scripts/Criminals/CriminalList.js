import { useCriminals, getCriminalsByOfficer } from "./CriminalProvider.js"

import Criminal from "./Criminal.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".criminalsContainer")

const CriminalList = () => {
    // Load the application state to be used by this component
    const appStateCriminals = useCriminals()

    eventHub.addEventListener("showNoteButtonClicked", event => {
        render([])
    })

    // What should happen when detective selects a crime?
    eventHub.addEventListener("crimeSelected", event => {
        const crimeName = event.detail.crime
        console.log(crimeName)

        const filteredCriminals = appStateCriminals.filter(
            (individualCriminal) => {
                if (individualCriminal.conviction === crimeName) {
                    return individualCriminal
                }
            }
        )

        render(filteredCriminals)
    })

    // What should happen when detective clicks on a crime in the <select> element?
    eventHub.addEventListener('officerSelected', event => {
        if ("officerName" in event.detail) {
            if (event.detail.officerName === "0") {
                render(appStateCriminals)
            } else {
                const filteredCriminals = getCriminalsByOfficer(event.detail.officerName)
                render(filteredCriminals)
            }
        }
    })

    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id.startsWith("associates--")) {

            const [prefix, id] = clickEvent.target.id.split("--")

            const message = new CustomEvent("associateButtonClicked", {
                detail: {
                    criminalId: id
                }
            })
            eventHub.dispatchEvent(message)
        }
    })

    // Function that handles rendering of the HTML representation of the application state
    const render = criminals => {
        contentTarget.innerHTML = `
            <article class="criminalComponent">
                <div class="criminals">
                    ${
                        criminals.map(currentCriminalObject => {
                            const criminalHTML = Criminal(currentCriminalObject)
                            return criminalHTML
                        }).join("")
                    }
                </div>
            </article>
        `
    }

    render(appStateCriminals)
}

export default CriminalList