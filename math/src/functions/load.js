
import { AdditionAndSubtraction } from "../Addition-subtraction";
import { multiplicationDivision } from "../Multiplication-division";
import { mainPage } from "../mainPage";
import { deleteRender } from "./delteRender";
import "./load.css"

export function pageLoad(selector) {

    const pageLoad = document.querySelector("#app");
    pageLoad.classList.add("total-page")
    
    const title = document.querySelector(".title")
    title.classList.add("show")


    const spinner = document.createElement("div")
    spinner.classList.add("spinner")
    pageLoad.appendChild(spinner)

    spinner.innerHTML = `
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            
            `;

    if (selector == 1) {

        setTimeout(function () {
            deleteRender()
            mainPage()
        }, 1500)
    } else if(selector == 2){
    
        setTimeout(function () {
            deleteRender()
            AdditionAndSubtraction()
        }, 1500)
    }else if(selector == 3){
        setTimeout(function () {
            deleteRender()
            multiplicationDivision()
        }, 1500)
    }


}

