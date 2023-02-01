import { catsData } from "./data.js"

let emotionsRadio = document.getElementById("emotion-radios")

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