function unlock() {
  const passwordInput = document.getElementById("unlockPassword").value;
  const correctPassword = "26062003"; // Change to your secret password

  if (passwordInput === correctPassword) {
    // Hide unlock screen and show main content
    document.getElementById("unlockPage").style.display = "none";
    document.getElementById("mainPage").style.display = "block";

    // Unmute and play background music
    const bgMusic = document.getElementById("bgMusic");
    bgMusic.muted = false;
    bgMusic.play().catch(err => {
      console.warn("Autoplay failed, user interaction required.");
    });
  } else {
    alert("Oops! Try again 💌");
  }
}

function showSurprise() {
  document.getElementById("popupSurprise").style.display = "block";
}

function closeSurprise() {
  document.getElementById("popupSurprise").style.display = "none";
}
