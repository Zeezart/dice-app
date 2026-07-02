// let randomDieNumber2 = Math.ceil(Math.random() * 6)
// document.querySelector("#die-image2").setAttribute("src",`die${randomDieNumber2}.png`)

// if (randomDieNumber > randomDieNumber2){
//     document.querySelector("#result").innerText = "Result: PLAYER 1 is the WINNER"
//     console.log("PLAYER 1 is the WINNER")
// }else if (randomDieNumber2 > randomDieNumber){
//     document.querySelector("#result").innerText = "Result: PLAYER 2 is the WINNER"
//     console.log("PLAYER 2 is the WINNER")
// }else{
//     document.querySelector("#result").innerText = "Result: DRAW"
//     console.log("DRAW")
// }

document.querySelector("#die-image").addEventListener("click",rollDie)

function rollDie(){
    let randomDieNumber = Math.ceil(Math.random() * 6)
    document.querySelector("#die-image").classList.remove("die-spinner")
    void document.querySelector("#die-image").offsetWidth; 
    document.querySelector("#die-image").setAttribute("src",`die${randomDieNumber}.png`)
    document.querySelector("#die-image").classList.add("die-spinner")
}