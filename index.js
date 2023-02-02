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

renderEmotionsRadio(catsData)

function highlightCheckedOption(e) {
    const radios = document.getElementsByClassName("radio")
    for (let radio of radios) {
        radio.classList.remove("highlight")
    }

    document.getElementById(e.target.id).parentElement.classList.add("highlight")
}

function getMatchingCatsArray() {
    const selectedEmotion = document.querySelector("input[type='radio']:checked")
    if (selectedEmotion) {
        const isGif = gifsOnlyOption.checked
        const matchingCatsArray = catsData.filter(cat => {
            if (isGif) {
                return cat.emotionTags.includes(selectedEmotion.value) && cat.isGif
            } else {
                return cat.emotionTags.includes(selectedEmotion.value) 
            }
        })
        return matchingCatsArray
    }
}

emotionsRadio.addEventListener("change", highlightCheckedOption)
getImgBtn.addEventListener("click", renderCat)

function getSingleCatObject() {
    const catsArray = getMatchingCatsArray()
    if (catsArray.length === 1) {
        return catsArray[0]
    } else {
        const randomNumber = Math.floor(Math.random() * catsArray.length)
        return catsArray[randomNumber]
    }
}

function renderCat() {
    getSingleCatObject()
}