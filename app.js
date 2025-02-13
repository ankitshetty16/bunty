function unlockScreen() {
    const lockScreen = document.getElementById("lock-screen");
    const valentineScreen = document.getElementById("valentine-screen");

    // Unlock screen and reveal content with smooth transition
    lockScreen.style.opacity = "0";
    setTimeout(() => {
        lockScreen.style.display = "none";  // Completely hide the lock screen after fade out
        valentineScreen.style.opacity = "1";  // Fade in the valentine message screen
    }, 500); // Wait for the fade-out transition before changing display
}

function revealQuestion() {
    const button = document.getElementById("askButton");
    const question = document.getElementById("question");

    button.style.display = "none"; // Hide the "Will you be my Valentine?" button
    question.style.display = "block"; // Show the actual Valentine’s question
}

function showLove() {
    const answer = document.querySelector(".answer");
    answer.innerHTML = "💖💖💖"; // Show hearts when she says "Yes"
    const yesButton = document.getElementById("yesButton");
    yesButton.innerText = "Yay, I’m so happy!"; // Change the button text
    yesButton.disabled = true; // Disable button after clicking
}
