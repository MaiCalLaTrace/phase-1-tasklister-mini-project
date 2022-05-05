document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const task = document.getElementById("new-task-descrpition")
  const form = document.querySelector("form")
  const sort = document.querySelector("#sort")
  const thing = document.createElement("div")


  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputValue = e.target.task.value
  }
});

sort.addEventListener("click", function(){
  taskItems = Array.from(task.children)
  taskItems.sort()
  let newlist = taskItems.sort()
  taskItems.forEach(item=>remove())
})


function addElement(element){
  let p =document.createElement("li")
  p.textContent = ` ${element} `
  let button = document.createElement("button")
  button.textContent = "x"
  button.addEventListener("click",e=>deleteButton(e))
  p.appendChild(button)
  task.appendChild(p)
}

function deleteButton(event){
  event.target.parentNode.remove()
}