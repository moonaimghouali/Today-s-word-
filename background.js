chrome.runtime.onMessage.addListener(async (msg, sender, response) =>{

    //fetch random word from the api 
    let apiUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/"
    let word = "hello"
    let fetchUrl = apiUrl+word

    let response = await fetch(fetchUrl)
    //alert(fetchUrl)
    response = response.json()


    if(msg = "message"){
        response({text: JSON.stringify(response) })
    }
})