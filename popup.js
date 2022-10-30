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

let index = Math.floor(Math.random() * colors.length);
let root = document.documentElement;

root.style.setProperty("--bg-color",colors[index]);

let btn = document.getElementById("showWords")

btn.addEventListener("click",()=>{
    let words = document.querySelector(".myWords")
    console.log(words)
    words.style.display = "block";
})
