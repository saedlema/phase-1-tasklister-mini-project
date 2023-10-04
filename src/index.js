document.addEventListener("DOMContentLoaded", () => {
  // your code here
const descriptionElement = document.getElementById("create-task-form")
descriptionElement.addEventListener("submit", (e) => {
    e.preventDefault()
    
  const descriptionElement = document.getElementById("new-task-description")
  
  const descriptionElementInput = descriptionElement.value

  const li = document.createElement("li")
  li.textContent = descriptionElementInput

  const taskList = document.getElementById("tasks")
  taskList.appendChild(li)

  const button = document.createElement("button")
  button.textContent = "x"

  li.appendChild(button)

  button.addEventListener("click", () => {
    taskList.removeChild (li)
  })





  





})
}); 