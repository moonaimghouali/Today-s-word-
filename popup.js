let colors = [
"#ED3434", 
"#DD152D", 
"#AB1A68", 
"#70229F", 
"#1B6EBB", 
"#0A8871", 
"#229A44", 
"#71B021", 
"#E78B36",
"#212121"];

let words = ["Indelicate", "Prodigal", "Anomaly", "Indifference", "Forlorn", "Superfluous", "Calumny", "Negligible", "Itinerant", "Inexorable", "Engender", "Ephemeral", "Rudimentary", "Bonafide", "Recondite", "Banal", "Incisive", "Frivolous", "Ingenuous", "Ingratiate", "Innocuous", "Incorrigible", "Forthcoming", "Disinterested", "Dogmatic", "Discrete", "Oblivion", "Opaque", "Abstain", "Mollify", "Venality", "Copious", "Quotidian", "Auspicious", "Implacable", "Exacerbate", "Refractory", "Belie", "Equivocate", "Insidious", "Provincial", "Apathy", "Gossamer", "Fallacious", "Dictatorial", "Precocious", "Amenable", "Frustrate", "Impertinent", "Meticulous", "Mawkish", "Intimate", "Immutable", "Gregarious", "Demur", "Petulant", "Amalgam", "Fortuitous", "Gregarious", "Platitude", "Ambiguous", "Denigrate", "Guileless", "Delineate", "Torpor", "Chortle", "Eclectic", "Refute", "Belligerent", "Incongruous", "Exalt", "Minimalist", "Didactic", "Implausible", "Impudent", "Tortuous", "Circumvent", "Denote	", "Tenacious", "Subsume", "Chastise", "Cacophony", "Staunch", "Burgeon", "Harangue", "Hackneyed", "Volubility", "Deferential", "Panache", "Acerbic", "Eschew", "Narcissist", "Ostentatious", "Abstruse", "Perfidy", "Aesthetic", "Heretic", "Gainsay", "Harbinger", "Espouse", "Derivative", "Haughty", "Rustic", "Bravado", "Epitome", "Derive", "Idiosyncratic", "Eradicate", "Vilify", "Undermine", "Culpability", "Concede", "Elucidate", "Dichotomy", "Ignoble", "Fiasco", "Vehement", "Contrive", "Reconcile", "Avaricious", "Upbraid", "Contingent", "Veracious", "Treacherous", "Culminate", "Commensurate", "Extant", "Entrenched", "Disheveled", "Mitigate", "Myopic", "Largess", "Idiosyncrasy", "Frugal", "Prescience", "Angst", "Iconoclastic", "Underscore", "Confound", "Pedantic", "Aesthete", "Exonerate", "Vociferous", "Decorum", "Parsimonious", "Admonitory", "Eminent", "Insidious", "Iconoclast", "Spurious", "Bumbling.", "Wanting", "Venerate", "Travesty", "Cryptic", "Cloying", "Preclude", "Ameliorate", "Diffident", "Involved", "Profligate", "Apathetic", "Unequivocal", "Conspicuous", "Reticent", "Blatant", "Disaffected", "Glib", "Maintain", "Glut", "Obscure", "Aberrant", "Audacious", "Restive", "Betray", "Temperance", "Censure", "Vindicate", "Decorous", "Jingoism", "Galvanize", "Intransigeant", "Qualify", "Artful", "Mercurial.", "Paradox", "Acrimony.", "Malinger", "Prevaricate", "Anomalous", "Magnanimous", "Parochial", "Adamant", "Lambast", "Juxtapose", "Egregious", "Soporific", "Bucolic", "Predilection", "Amorphous", "Querulous", "Ascetic", "Supplant", "Gall", "Jubilant", "Unscrupulous", "Construe", "Laconic", "Languid", "Laudable", "Germane", "Equivocal", "Pundit", "Apocryphal", "Lurid", "Euphemism", "Machiavellian", "Tantamount", "Castigate", "Equanimity", "Pragmatic", "Ambivalent", "Enervate", "Expound" ]
let wordInfo = {
    word : "",
    partOfSpeech : "",
    definition : "",
    example : ""
}

let index = Math.floor(Math.random() * colors.length);
let root = document.documentElement;

root.style.setProperty("--bg-color",colors[index]);

let btn = document.getElementById("showWords")

btn.addEventListener("click",()=>{
    let words = document.querySelector(".myWords")
    console.log(words)
    words.style.display = "block";
})


// chrome.runtime.sendMessage({name: "message"} , (response) =>{


//     alert("message is "+response.text);
// })



 //fetch random word from the api 
function loadWord (data) {
    wordInfo.word = data[0].word
    wordInfo.partOfSpeech = data[0].meanings[0].partOfSpeech
    wordInfo.definition = data[0].meanings[0].definitions[0].definition
    wordInfo.example = data[0].meanings[0].definitions[0].example
    
    if(wordInfo.partOfSpeech =="adjective"){
        wordInfo.partOfSpeech = "adj";}
    
    if(wordInfo.definition === undefined){
        wordInfo.definition =  "No definition available."
    }

    if(wordInfo.example === undefined){
        wordInfo.example = "No example available." 
    }

    let title = document.getElementById("word")
    let def =  document.getElementById("definition")
    let example = document.getElementById("example")
    
    title.innerHTML = wordInfo.word + "<span> "+wordInfo.partOfSpeech +"</span>"
    def.innerHTML = "<span>def. </span>" + wordInfo.definition
    example.innerHTML = "<span>ex. </span>"+ wordInfo.example

    if(wordInfo.word.length > 10){title.style.fontSize = "36px"}
}


async function getword (word) {
    let apiUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/"
    let fetchUrl = apiUrl+word
    //promise
    fetch(fetchUrl)
   .then((response) => response.json())
   .then((data) => { loadWord(data) });
 }

idx = Math.floor(Math.random() * words.length);
//alert(words[idx])
getword(words[idx])
