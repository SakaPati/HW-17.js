// 1
const btn = document.querySelector("#button");
const input = document.querySelector("#InputTXT");

const inputCLG = () => {
    btn.textContent = input.value
}

btn.addEventListener("click", inputCLG)

// 2
const imgForest = document.querySelector("#forest")
imgForest.src = "./images/akyli.jpg"

// 3
const download = (document.querySelector(".download").href = "https://www.fotoprizer.ru/img/131223-010112-ft.jpg")
const clown = (document.querySelector(".clown").alt = "Красочный клоун с безумным смехом среди ярких пузырей")

// 4 
const listItem = (document.querySelector(".list").firstElementChild.textContent = "новий текст")