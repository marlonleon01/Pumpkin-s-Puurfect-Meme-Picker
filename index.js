import { catsData } from "./data.js"

let emotionsRadio = document.getElementById("emotion-radios")

function getEmotionsArray(cats){
    const emotionsArray = []

    for (let cat of cats) {
        for (let emotions of cat.emotionTags) {
            emotionsArray.push(emotions)
        } 
    }
    return emotionsArray
}

function renderEmotionsRadio(cats) {
    const emotions = getEmotionsArray(cats)
    let radioItems = ""
    for (let emotion of emotions) {
        radioItems += `<p>${emotion}</p>`
    }
    emotionsRadio.innerHTML = radioItems
}

renderEmotionsRadio(catsData)