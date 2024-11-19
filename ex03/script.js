// Write your Task 1 code inside this function!
function task1() {
  console.log("Running task 1");
  // Don't change the variable name
  let listItems = document.querySelectorAll ("li") ;

  // This is called a conditional. If it finds matches
  // for your variable, it will tell each of them to 
  // respond to a hover ("mouseover") event.
  if (listItems.length > 1) {
    listItems.forEach((item) =>
      item.addEventListener("mouseover", handleHover),
    );
  }
}

// Write your task 2 code inside this function!
function task2() {
  console.log("Running task 2");
  let element = document.querySelector("#circle")
  element.remove()
}

// Write your task 3 code inside this function!
function task3() {
  console.log("Running task 3");
  let parent = document.querySelector(".box")
  let firstE1 = document.querySelector("#item1")
  let newNode = document.createElement("p")
  newNode.textContent = "This is a new element"
  parent.insertBefore(newNode, firstE1)
}

function task4() {
  console.log("Running task 4");
  let parent = document.querySelector(".box")
  let newNode = document.createElement("p")
  newNode.textContent = "This is a new element"
  parent.insertAdjacentElement("beforeend", newNode)
}

// Don't change this function
function handleHover(event) {
  // Change the text of the target
  event.target.textContent = "OFF";
}
