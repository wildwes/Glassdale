import { getCriminals } from "./Criminals/CriminalProvider.js"
import { getConvictions } from "./convictions/ConvictionsProvider.js"
import { getOfficers } from "./officers/OfficerProvider.js"
import { getNotes } from "./notes/NoteProvider.js"
import CriminalList from "./Criminals/CriminalList.js"
import ConvictionSelect from "./convictions/ConvictionSelect.js"
import OfficerSelect from "./officers/OfficerSelect.js"
import NoteFormComponent from "./notes/NoteForm.js"
import NoteListComponent from "./notes/NotesList.js"
import DialogComponent from "./dialog/Dialog.js"

const loadData = () => {
    return getConvictions()
        .then(getNotes)
        .then(getCriminals)
        .then(getOfficers)
}

const renderInitialComponents = () => {
    ConvictionSelect()
    OfficerSelect()
    NoteFormComponent()
    NoteListComponent()
    CriminalList()
    DialogComponent()
}


loadData().then(renderInitialComponents)
