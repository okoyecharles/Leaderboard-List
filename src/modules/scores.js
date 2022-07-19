async function addScore (gameID) {
  const ID = gameID;
  const data = await fetch(
    `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${ID}/scores/`,
    {
      method: 'POST',
      body: JSON.stringify({
        user: "Charles",
        score: 50
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }
  )
  const response = await data.json() 
  console.log(ID, response.result)
}

async function getScores(gameID) {
  const ID = gameID;
  const data = await fetch(
    `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${ID}/scores/`,
    {method: 'GET'}
  )
  const scores = await data.json()

  console.log(ID, scores.result);
}

export {addScore, getScores}