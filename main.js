// DOM ELEMENTS
const addInput = document.getElementById("add-input"),
      addButton = document.getElementById("add-button"),
      searchInput = document.getElementById("search-input"),
      searchButton = document.getElementById("search-button"),
      messageBox = document.getElementById("message-box"),
      dictionary = document.getElementById("dictionary");

// EVENT LISTENERS
addButton.addEventListener("click", () => {
    addToDictionary(addInput.value);
    addInput.value = "";
});

searchButton.addEventListener("click", () => {
    searchInDicctionary(searchInput.value);
});

// FUNCTIONS
function addToDictionary(word) {
    const newWord = document.createElement("li");
    newWord.innerText = word;
    dictionary.appendChild(newWord);
}

function searchInDicctionary(input) {
    let isWordInDictionary = false;
    dictionary.childNodes.forEach(child => {
        if (child.innerText === input) {
            isWordInDictionary = true;
            displayMessage("Word Found");
        }
    });
    if(!isWordInDictionary) {
        displayMessage("Word Not Found");
    }
}

function displayMessage(mess) {
    messageBox.innerText = mess;
    setTimeout(() => {
        messageBox.innerText = "";
    }, 3000);
}