
document.bgColor = "tomato"
let secretNumber = Math.floor(Math.random() * 100)

const checkGuess = () => {
    let num = parseInt(document.getElementById("input").value)
    if (num > secretNumber) {
        document.getElementById("clue").innerHTML = "Too high!🧐 Guess Again."
    } else if (num < secretNumber) {
        document.getElementById("clue").innerHTML = "Too low!🤨 Guess Again."
    } else if (Number(num) === secretNumber) {
        document.getElementById("clue").innerHTML = "Correct!✅ You win!🎉"
        let names = ["guess", "title", "input", "btn"]
        names.forEach(name => {
        let ele = document.getElementById(name)
        ele.parentNode.removeChild(ele)
      })
      document.getElementById("reload").style.visibility = "visible"
   }
}
