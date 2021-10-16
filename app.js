var btntranslate = document.querySelector("#btn-translate"); 

var txtinput = document.querySelector("#txt-input");
var outputdiv = document.querySelector("#txt-output");



btntranslate.addEventListener("click" , clickeventhandler);


var serverURL = "https://api.funtranslations.com/translate/morse.json?text=";
// Url creator
function urlcreator(input){
    return serverURL + input ;
}

function errorHandler(error){
    alert("error occured", error);
}
// Event handler 
function clickeventhandler(){
    console.log("Button clicked");
    var txt = txtinput.value;
    console.log(txt);
    console.log(urlcreator(txt));
    var finalURL = urlcreator(txt);
    fetch(finalURL)
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputdiv.innerText = translatedText; 
            
    })
        .catch(errorHandler)}
