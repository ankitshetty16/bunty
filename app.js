function unlockScreen() {
    const lockScreen = document.getElementById("lock-screen");
    const valentineScreen = document.getElementById("valentine-screen");

    // Unlock screen and reveal content with smooth transition
    lockScreen.style.opacity = "0";
    setTimeout(() => {
        lockScreen.style.display = "none";  // Completely hide the lock screen after fade out
        valentineScreen.style.opacity = "1";  // Fade in the valentine message screen
    }, 700); // Wait for the fade-out transition before changing display
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

function showSadResponse() {
    // Hide the question and yes/no buttons
    const question = document.getElementById("question");
    question.style.display = "none";
    
    // Show the sad response with a witty message
    const sadResponse = document.getElementById("sadResponse");
    sadResponse.style.display = "block";
}

function resetScreen() {
    // Reset everything back to the initial state
    const sadResponse = document.getElementById("sadResponse");
    const question = document.getElementById("question");

    sadResponse.style.display = "none";
    question.style.display = "block";
    document.getElementById("noButton").style.display = "inline-block";
    document.getElementById("yesButton").style.display = "inline-block";
}
