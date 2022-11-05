import {changeColor, loadWord, getword} from "./util.js"



let colors = ["#ED3434", "#DD152D", "#AB1A68", "#70229F", "#1B6EBB", "#0A8871", "#229A44", "#71B021", "#E78B36","#212121"];
let words = ["Indelicate", "Prodigal", "Anomaly", "Indifference", "Forlorn", "Superfluous", "Calumny", "Negligible", "Itinerant", "Inexorable", "Engender", "Ephemeral", "Rudimentary", "Bonafide", "Recondite", "Banal", "Incisive", "Frivolous", "Ingenuous", "Ingratiate", "Innocuous", "Incorrigible", "Forthcoming", "Disinterested", "Dogmatic", "Discrete", "Oblivion", "Opaque", "Abstain", "Mollify", "Venality", "Copious", "Quotidian", "Auspicious", "Implacable", "Exacerbate", "Refractory", "Belie", "Equivocate", "Insidious", "Provincial", "Apathy", "Gossamer", "Fallacious", "Dictatorial", "Precocious", "Amenable", "Frustrate", "Impertinent", "Meticulous", "Mawkish", "Intimate", "Immutable", "Gregarious", "Demur", "Petulant", "Amalgam", "Fortuitous", "Gregarious", "Platitude", "Ambiguous", "Denigrate", "Guileless", "Delineate", "Torpor", "Chortle", "Eclectic", "Refute", "Belligerent", "Incongruous", "Exalt", "Minimalist", "Didactic", "Implausible", "Impudent", "Tortuous", "Circumvent", "Denote	", "Tenacious", "Subsume", "Chastise", "Cacophony", "Staunch", "Burgeon", "Harangue", "Hackneyed", "Volubility", "Deferential", "Panache", "Acerbic", "Eschew", "Narcissist", "Ostentatious", "Abstruse", "Perfidy", "Aesthetic", "Heretic", "Gainsay", "Harbinger", "Espouse", "Derivative", "Haughty", "Rustic", "Bravado", "Epitome", "Derive", "Idiosyncratic", "Eradicate", "Vilify", "Undermine", "Culpability", "Concede", "Elucidate", "Dichotomy", "Ignoble", "Fiasco", "Vehement", "Contrive", "Reconcile", "Avaricious", "Upbraid", "Contingent", "Veracious", "Treacherous", "Culminate", "Commensurate", "Extant", "Entrenched", "Disheveled", "Mitigate", "Myopic", "Largess", "Idiosyncrasy", "Frugal", "Prescience", "Angst", "Iconoclastic", "Underscore", "Confound", "Pedantic", "Aesthete", "Exonerate", "Vociferous", "Decorum", "Parsimonious", "Admonitory", "Eminent", "Insidious", "Iconoclast", "Spurious", "Bumbling.", "Wanting", "Venerate", "Travesty", "Cryptic", "Cloying", "Preclude", "Ameliorate", "Diffident", "Involved", "Profligate", "Apathetic", "Unequivocal", "Conspicuous", "Reticent", "Blatant", "Disaffected", "Glib", "Maintain", "Glut", "Obscure", "Aberrant", "Audacious", "Restive", "Betray", "Temperance", "Censure", "Vindicate", "Decorous", "Jingoism", "Galvanize", "Intransigeant", "Qualify", "Artful", "Mercurial.", "Paradox", "Acrimony.", "Malinger", "Prevaricate", "Anomalous", "Magnanimous", "Parochial", "Adamant", "Lambast", "Juxtapose", "Egregious", "Soporific", "Bucolic", "Predilection", "Amorphous", "Querulous", "Ascetic", "Supplant", "Gall", "Jubilant", "Unscrupulous", "Construe", "Laconic", "Languid", "Laudable", "Germane", "Equivocal", "Pundit", "Apocryphal", "Lurid", "Euphemism", "Machiavellian", "Tantamount", "Castigate", "Equanimity", "Pragmatic", "Ambivalent", "Enervate", "Expound" ]
let wordInfo = {
    word : "",
    partOfSpeech : "",
    definition : "",
    example : ""
}

changeColor(colors)

let idx = Math.floor(Math.random() * words.length);
let word = words[idx]
getword(word, wordInfo)

// show the list of saved words
let btn = document.getElementById("showWords")
btn.addEventListener("click",()=>{
    let words = document.querySelector(".myWords")
    console.log(words)
    words.style.display = "block";
})

// load another word when clicked
let ctnr = document.getElementsByClassName("container")
ctnr[0].addEventListener("click", ()=>{
    changeColor(colors)
    let idx = Math.floor(Math.random() * words.length);
    getword(words[idx], wordInfo)
})




