import { useCriminals } from "./CriminalProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".filters__Criminals")

const CriminalSelect = () => {
    const criminals = useCriminals()

    eventHub.addEventListener(
        "change",
        changeEvent => {
            if (changeEvent.target.id === "CriminalSelect") {
                eventHub.dispatchEvent(new CustomEvent("CriminalSelected", {
                    detail: {
                        officerName: changeEvent.target.value
                    }
                }))
            }
        }
    )

    const render = CriminalSelect => {
        contentTarget.innerHTML = `
            <select class="dropdown" id="CriminalSelect">
                <option value="0">Please select an officer...</option>
                ${CriminalSelect.map(currentcriminal => {
                return `<option value="${currentcriminal}">${currentcriminal}</option>`
            })}
            </select>
        `
    }

    render(criminals)
}

export default CriminalSelect