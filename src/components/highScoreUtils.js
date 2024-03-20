export function saveHighScore(time, gameMode) {
    console.log("Saving high score:", time, gameMode);
    const key = `highScore_${gameMode}`;
    const existingScore = localStorage.getItem(key);
  
    if (!existingScore || time < existingScore) {
      localStorage.setItem(key, time);
    }
  }
  
  
  

// Function to retrieve the high score from localStorage
export function getHighScore(gameMode) {
    console.log("Retrieving high score for:", gameMode);
    const key = `highScore_${gameMode}`;
    return localStorage.getItem(key);
  }
  
