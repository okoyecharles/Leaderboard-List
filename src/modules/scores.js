const addScore = async (name, score) => {
  await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/HXSrJumGDlVXhczbMIWa/scores/',
    {
      method: 'POST',
      body: JSON.stringify({
        user: name,
        score,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  );
};

const getScores = async () => {
  const data = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/HXSrJumGDlVXhczbMIWa/scores/');
  const scores = await data.json();

  return scores.result;
};

export { addScore, getScores };