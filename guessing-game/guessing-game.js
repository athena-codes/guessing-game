
document.bgColor = "purple"
let secretNumber = Math.floor(Math.random() * 100)

const checkGuess = () => {
    let num = parseInt(document.getElementById("input").value)
    if (Number(num) > secretNumber) {
        document.getElementById("clue").innerHTML = "Too high!๐ง Guess Again."
    } else if (Number(num) < secretNumber) {
        document.getElementById("clue").innerHTML = "Too low!๐คจ Guess Again."
    } else if (Number(num) === secretNumber) {
        document.getElementById("clue").innerHTML = "Correct!โ You win!๐"
        let names = ["guess", "title", "input", "btn"]
        names.forEach(name => {
        let ele = document.getElementById(name)
        ele.parentNode.removeChild(ele)
        document.getElementById("reload").style.visibility = "visible"
      })
   }
}
