import { catsData } from "./data.js"

const emotionsRadio = document.getElementById("emotion-radios")
const getImgBtn = document.getElementById("get-image-btn")
const gifsOnlyOption = document.getElementById("gifs-only-option")

function getEmotionsArray(cats){
    const emotionsArray = []

    for (let cat of cats) {
        for (let emotions of cat.emotionTags) {
            if (!emotionsArray.includes(emotions)) {
                emotionsArray.push(emotions)
            }
        } 
    }
    return emotionsArray
}

function renderEmotionsRadio(cats) {
    const emotions = getEmotionsArray(cats)
    let radioItems = ""
    for (let emotion of emotions) {
        radioItems += `<div class="radio">
                            <label for="${emotion}">${emotion}</label>
                            <input 
                            type="radio"
                            id="${emotion}"
                            value="${emotion}"
                            name="choice-radios"
                            >
                        </div>`
    }
    emotionsRadio.innerHTML = radioItems
}

function highlightCheckedOption(e) {
    const radios = document.getElementsByClassName("radio")
    for (let radio of radios) {
        radio.classList.remove("highlight")
    }

    document.getElementById(e.target.id).parentElement.classList.add("highlight")
}

function getMatchingCatsArray() {
    const selectedEmotion = document.querySelector("input[type='radio']:checked")
    const isGif = gifsOnlyOption.checked
    if (selectedEmotion) {
        console.log(selectedEmotion.value)
    }
    console.log(isGif)
}

emotionsRadio.addEventListener("change", highlightCheckedOption)
getImgBtn.addEventListener("click", getMatchingCatsArray)

renderEmotionsRadio(catsData)