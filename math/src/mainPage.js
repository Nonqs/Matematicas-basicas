
import { deleteRender } from './functions/delteRender'
import { pageLoad } from './functions/load'

export function mainPage(){

    const div = document.querySelector("#app")
    div.classList.remove("total-page")

    
    const title = document.querySelector(".title")
    title.classList.remove("show")
    
  
    const sumAndSub = document.createElement("button")
    sumAndSub.textContent = "+, -"
    div.appendChild(sumAndSub)
  
    const multiAndDiv = document.createElement("button")
    multiAndDiv.textContent = "*, /"
    div.appendChild(multiAndDiv)
  
    sumAndSub.addEventListener("click", function(){
  
      deleteRender()
      pageLoad(2)
      
  
    } )

    multiAndDiv.addEventListener("click", function(){
      deleteRender()
      pageLoad(3)
    })
    
  }