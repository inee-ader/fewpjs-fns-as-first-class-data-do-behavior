/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(string) {
  let time = string.split(":").join("");
  if (time < 1200) {
    return "Good Morning"
  }
  if (time >= 1200 && time < 1700) {
    return "Good Afternoon"
  }
  if (time >= 1700) {
    return "Good Evening"
  }
}

/* Write your implementation of displayMessage() */
function displayMessage(string) {
  let greeting = document.querySelector("#greeting")
  greeting.innerText = string
}