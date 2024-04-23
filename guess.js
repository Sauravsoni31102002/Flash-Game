// Generate a random number between min and max
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Initialize variables
  const randomNumber = (25,95,5,8,45,36,78,23,85,34,56,77,22,10,46,38);
  let attempts = 0;
  
  // Function to check the user's guess
  function checkGuess() {
    const userGuess = parseInt(document.getElementById('guessField').value);
    const message = document.querySelector('.message');
  
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
      message.textContent = 'Please enter a valid number between 1 and 100.';
    } else {
      attempts++;
  
      if (userGuess === randomNumber) {
        message.textContent = `Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts.`;
      } else if (userGuess < randomNumber) {
        message.textContent = 'Too low! Try again.';
      } else {
        message.textContent = 'Too high! Try again.';
      }
    }
  }
  