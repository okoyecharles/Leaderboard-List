import { addScore, getScores } from "./scores";

// Format Numbers with commas
const format = (num) => {                   
    return num
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const handleSubmit = async (event) => {
  event.preventDefault()
  const target = event.target
  const name = target.elements.name.value;
  const score = target.elements.score.value;

  addScore(name, score)
  target.reset()
}

const load = async () => {
  const scores = await getScores()
  scores.sort((a, b) => b.score - a.score)

  // Get The Leaderboard List Container
  const listItems = document.querySelector('.lb__displayList')
  listItems.innerHTML = ''

  // Create Each List item
  scores.forEach(score => {
    const listItem = document.createElement('li')
    listItem.className = 'lb__displayItem'
    listItem.innerHTML =`<span>${score.user}</span>: <span>${format(score.score)}</span>`
    listItems.append(listItem)
  })
}

export { handleSubmit, load }