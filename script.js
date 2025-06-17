function unlock() {
  const passwordInput = document.getElementById("unlockPassword").value;
  const correctPassword = "26062003";

  if (passwordInput === correctPassword) {
    // Hide unlock screen and show main page
    document.getElementById("unlockPage").style.display = "none";
    document.getElementById("mainPage").style.display = "block";

    // Unmute and play music
    const bgMusic = document.getElementById("bgMusic");
    bgMusic.muted = false;
    bgMusic.play().catch(err =>
      console.warn("Autoplay blocked until user interacts:", err)
    );
  } else {
    alert("Oops! Try again 💌");
  }
}

function showSurprise() {
  alert("🎉 Here's your surprise, my love! 💖\n\nThis is just the beginning... 💑");
}
