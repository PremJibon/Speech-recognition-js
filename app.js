window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition()
recognition.lang = "en-"

let p = document.createElement("p")
const words = document.querySelector(".words")
words.appendChild(p)

recognition.addEventListener("result",e=>{
    const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)

    p.textContent =- transcript    
})

recognition.start()