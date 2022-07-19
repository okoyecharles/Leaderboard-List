// Initialize Game
async function initGame() {
  const data = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', 
    {
      method: 'POST',
      body: JSON.stringify({
        name: "Minecraft"
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }
  )
  const response = await data.json()
  return response.result.split(' ')[3] // Get Game ID
}

export default initGame