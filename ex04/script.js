function task1() {
  let myArray = ["hi", "hitwo", "hithree"];
  let target = document.querySelector("#task-1-target")
  // This will run when you click the button.
  myArray.forEach((item) => {
    let el = document.createElement("p");
    el.innerText = item;
    target.appendChild(el);
  });
}

function task2A() {
  // Write your code in here
  let color = document.querySelectorAll("#color-list > li")
  color.forEach(color => {
    console.log(color)
  })
}

function task2B() {
  // Write your code in here
  let names = document.querySelectorAll("#name-list > li")
  let target = document.querySelector("#name-list")
  
  console.log(names)

  names.forEach(item => {
    let newEl = document.createElement("li")
    newEl.innerText = "Hi " + item.innerText;
    newEl.style.fontWeight = 800;
    target.appendChild(newEl)
  })
}

function task3() {
  let txt = document.querySelectorAll(".item > p");
  
  txt.forEach(item => {
    item.style.backgroundColor = "#" + item.innerText;
});
}
