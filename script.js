// 🔓 Unlock Function
function unlock() {
  const passwordInput = document.getElementById("unlockPassword").value;
  const correctPassword = "26062003"; // Set your password here

  if (passwordInput === correctPassword) {
    // Mark that user has unlocked
    localStorage.setItem("unlocked", "true");

    // Show main content
    document.getElementById("unlockPage").style.display = "none";
    document.getElementById("mainPage").style.display = "block";

    // Play background music
    const bgMusic = document.getElementById("bgMusic");
    bgMusic.muted = false;
    bgMusic.play().catch(err => {
      console.warn("Autoplay may be blocked:", err);
    });

    // Mark that music should be playing on next page
    localStorage.setItem("musicPlaying", "true");
  } else {
    alert("Oops! Try again 💌");
  }
}

// 🎵 Auto-play music on page load if unlocked
window.addEventListener("DOMContentLoaded", () => {
  const unlocked = localStorage.getItem("unlocked") === "true";
  const bgMusic = document.getElementById("bgMusic");

  if (unlocked) {
    // Show main content directly if already unlocked
    if (document.getElementById("unlockPage")) {
      document.getElementById("unlockPage").style.display = "none";
    }
    if (document.getElementById("mainPage")) {
      document.getElementById("mainPage").style.display = "block";
    }

    // Play background music if user previously interacted
    if (localStorage.getItem("musicPlaying") === "true") {
      bgMusic.muted = false;
      bgMusic.play().catch(err => {
        console.warn("Autoplay blocked again:", err);
      });
    }
  }
});
