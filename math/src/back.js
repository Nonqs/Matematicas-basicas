import "./back.css"
import { deleteRender } from "./functions/delteRender"
import { pageLoad } from "./functions/load"

export function back() {

    const div = document.querySelector("#app")

    const divBack = document.createElement("div")
    divBack.classList.add("back")
    div.appendChild(divBack)

    divBack.addEventListener("click", function(){
        deleteRender()
        pageLoad(1)

    })
}