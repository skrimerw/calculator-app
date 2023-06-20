const themeToggler = document.querySelector("#range")
const body = document.querySelector("body")
const keys = document.querySelectorAll(".key")
const dataInput = document.querySelector("#data-input")
const equals = document.querySelector("#equals")
const reset = document.querySelector("#reset")
const del = document.querySelector("#del")

let inputValue = ""

range.addEventListener("change", () => {
    const themesList = ["", "light-theme", "purple-theme"]
    body.className = themesList[themeToggler.value]
})

keys.forEach(key => {
    key.addEventListener("click", (e) => {
        const signs = "+-×÷.*/"
        if (key.classList.contains("sign") 
        && signs.includes(inputValue.at(-1))) {
            inputValue = 
            inputValue.substring(0, inputValue.length - 1) + 
            key.dataset.id

            dataInput.textContent =
            dataInput.textContent.substring(0, inputValue.length - 1) +
            key.textContent
        } else if (inputValue === "" && key.classList.contains("sign")) {
            return
        } else {
            if (dataInput.children.length > 0) {
                const errorMsg = document.querySelector(".error-message")
                errorMsg.remove()
            }
            inputValue += key.dataset.id
            dataInput.textContent += key.textContent
        }
    })
})

equals.addEventListener("click", () => {
    try {
        let result = eval(inputValue)
        inputValue = String(result) 
        dataInput.textContent = result
    } catch(err) {
        const errorMsg = document.createElement("p")
        errorMsg.className = "error-message"
        dataInput.appendChild(errorMsg)
        console.log(err.message)
        errorMsg.textContent = err.message
    }
})

reset.addEventListener("click", () => {
    inputValue = ""
    dataInput.textContent = ""
})

del.addEventListener("click", () => {
    if (dataInput.children.length > 0) {
        const errorMsg = document.querySelector(".error-message")
        errorMsg.remove()
    }
    inputValue = inputValue.substring(0, inputValue.length - 1)
    dataInput.textContent = 
    dataInput.textContent.substring(0, dataInput.textContent.length - 1)
})
