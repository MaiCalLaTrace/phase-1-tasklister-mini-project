document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const userName = document.getElementById("username")
  const submit = document.getElementById("submit")

  submit.addEventListener("click",(e) => {
    e.preventDefault()
    const inputs = document.getElementsByClassName("text-inputs")[0]

  })
});

const form = document.getElementsByTagName("form")[0]
form.addEventListener("submit",(e) => {
  e.preventDefault()
  const userName = e.target.querySelector("userName")
  e.target.querySelector("username")
  if(userName.value === ""){
    const li = document.createElement("li")
    li.textContent = "you cannot leave that blank"
    document.getElementsByClassName("validations")[0].append(li)
  }

})
