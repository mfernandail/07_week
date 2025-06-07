const btnSubmit = document.getElementById("btnSubmit")
console.log(btnSubmit.textContent)

btnSubmit.addEventListener("click", (e) => {
  e.preventDefault()
  console.log("Hola")
})
