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

let words = []
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

    let title = document.getElementById("word")
    let partOfSpeech = document.getElementById("partOfSpeech")
    let def =  document.getElementById("definition")
    let example = document.getElementById("example")
    console.log(wordInfo)
        
    title.innerHTML = wordInfo.word + "<span> "+wordInfo.partOfSpeech +"</span>"
    def.innerHTML = "<span>def. </span>" + wordInfo.definition
    example.innerHTML = "<span>ex. </span>"+ wordInfo.example
}


async function getword (word) {
    
    let apiUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/"
    let fetchUrl = apiUrl+word
    //promise
    fetch(fetchUrl)
   .then((response) => response.json())
   .then((data) => { loadWord(data) });
 }

getword("witchcraft")
