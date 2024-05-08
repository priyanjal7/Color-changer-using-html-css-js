let box = document.querySelector("main .box")
let input = document.querySelector("main input")
input.addEventListener("input",function(){
    let color = input.value
    box.style.backgroundColor = color
})