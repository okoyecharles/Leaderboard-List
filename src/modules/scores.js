import initGame from "./init";

async function getScores() {
  const ID = await initGame();
  const data = await fetch(
    `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${ID}/scores/`,
    {method: 'GET'}
  )
  const scores = await data.json()

  return scores.result;
}

export default getScores