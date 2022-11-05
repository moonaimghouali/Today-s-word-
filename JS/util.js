
// this fn changes the color of the page
export function changeColor (colors) {

    let index = Math.floor(Math.random() * colors.length);
    let root = document.documentElement;
    if(root.style.backgroundColor !== colors[index]) {
        root.style.setProperty("--bg-color",colors[index]);
    }else{
        changeColor(colors)
    }
    
}

// this function load the word into the popup page
export function loadWord (data , wordInfo) {
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

    if(wordInfo.word.length > 10){title.style.fontSize = "36px"}
    title.innerHTML = wordInfo.word + "<span> "+wordInfo.partOfSpeech +"</span>"
    def.innerHTML = "<span>def. </span>" + wordInfo.definition
    example.innerHTML = "<span>e.g. </span>"+ wordInfo.example
}

// this function fetches the data from the wordsAPI
export async function getword (word, wordInfo) {
    let apiUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/"
    let fetchUrl = apiUrl+word
    //promise
    fetch(fetchUrl)
   .then((response) => response.json())
   .then((data) => { loadWord(data, wordInfo) });
 }