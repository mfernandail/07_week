const form = document.querySelector(".form")
const entrys = JSON.parse(localStorage.getItem("entrysData")) || []

const container = document.getElementById("cards-container")

const btnClearLocalstorage = document.getElementById("clearStorageBtn")

btnClearLocalstorage.style.display = entrys.length > 0 ? "block" : "none"

document.addEventListener("DOMContentLoaded", renderCards)

btnClearLocalstorage.addEventListener("click", clearLocalstorage)

form.addEventListener("submit", function (e) {
  e.preventDefault()

  const formData = new FormData(form)

  const data = {
    name: formData.get("name"),
    description: formData.get("description").slice(0, 80),
    ranking: formData.get("ranking"),
    price: formData.get("price"),
  }

  entrys.push(data)

  localStorage.setItem("entrysData", JSON.stringify(entrys))

  btnClearLocalstorage.style.display = "block"

  renderCards()
  form.reset()
})

function renderCards() {
  clearHTML()
  container.getHTML = ""

  const savedEntries = JSON.parse(localStorage.getItem("entrysData")) || []

  savedEntries.forEach((entry) => {
    const card = document.createElement("div")
    card.classList.add("card")

    card.innerHTML = `
      <h3>${entry.name}</h3>
      <p class="card_descrition">${entry.description}</p>
      <p><strong>Ranking:</strong> ${entry.ranking}</p>
      <p><strong>Price:</strong> $${entry.price}</p>
    `

    container.appendChild(card)
  })
}

function clearHTML() {
  container.innerHTML = ""
}

function clearLocalstorage() {
  const confirmMessage = confirm("Remove All Entries?")
  if (confirmMessage) {
    localStorage.clear()
    renderCards()

    btnClearLocalstorage.style.display = "none"
  }
}
