import correct from "../img/7efs.gif"
import { deleteRender } from "./functions/delteRender"
import { back } from "./back"

export function multiplicationDivision(){

    back()

    const div = document.querySelector("#app")

    const container = document.createElement("div")
    container.classList.add("container")
    div.appendChild(container)


    function getRandomInt(max) {
        return Math.floor(Math.random() * max) + 1;
    }

    function render() {

        const numOne = getRandomInt(10)
        const numTwo = getRandomInt(100)
        const prob = getRandomInt(2)

        console.log(prob)

        if (prob == 1) {

            const total = numOne * numTwo


            mult(numOne, numTwo, total)

        } else if (prob == 2) {

            const totalNumber = numOne / numTwo
            
            const total = parseFloat(totalNumber.toFixed(2))

            division(numOne, numTwo, total)

        }
    }

    function mult(numOne, numTwo, total) {

        const mathContainer = document.createElement("div")
        mathContainer.classList.add("math")
        container.appendChild(mathContainer)

        const gifContainer = document.createElement("div")
        gifContainer.classList.add("gif-container")
        container.appendChild(gifContainer)

        const renderDiv = document.createElement("div")
        renderDiv.classList.add("render")
        renderDiv.innerText = `${numOne} * ${numTwo} = `
        mathContainer.appendChild(renderDiv)

        const input = document.createElement("input")
        mathContainer.appendChild(input)


        input.addEventListener("keydown", function (event) {

            if (event.key === "Enter") {
                
                if (parseInt(input.value) === total) {


                    const correctR = document.createElement("img")
                    correctR.classList.add("gifs")
                    correctR.src = correct
                    gifContainer.appendChild(correctR)

                    setTimeout(function () {
                        console.log("h")
                        container.innerHTML = ""
                        render()
                    }, 2000);

                } else {

                    mathContainer.classList.add("incorrect")

                }
            }
        })


    }

    function division(numOne, numTwo, total) {


        const mathContainer = document.createElement("div")
        mathContainer.classList.add("math")
        container.appendChild(mathContainer)

        const gifContainer = document.createElement("div")
        gifContainer.classList.add("gif-container")
        container.appendChild(gifContainer)

        const renderDiv = document.createElement("div")
        renderDiv.classList.add("render")
        renderDiv.innerText = `${numOne} / ${numTwo} = `
        mathContainer.appendChild(renderDiv)

        const input = document.createElement("input")
        mathContainer.appendChild(input)

        input.addEventListener("keydown", function (event) {

            if (event.key === "Enter") {
                if (parseFloat(input.value) === total) {

                    const correctR = document.createElement("img")
                    correctR.classList.add("gifs")
                    correctR.src = correct
                    gifContainer.appendChild(correctR)

                    setTimeout(function () {
                        console.log("h")
                        container.innerHTML = ""
                        correctR.innerHTML = ""
                        render()
                    }, 2000);

                } else {

                    mathContainer.classList.add("incorrect")

                }
            }
        })


    }

    render()


}