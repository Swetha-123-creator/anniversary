// script.js

function unlock() {
  const passwordInput = document.getElementById("unlockPassword").value;
  const correctPassword = "26062003"; // ✅ Set your secret code here

  if (passwordInput === correctPassword) {
    // 🔓 Show main content and hide the unlock screen
    document.getElementById("unlockPage").style.display = "none";
    document.getElementById("mainPage").style.display = "block";

    // 🎵 Unmute and play background music
    const bgMusic = document.getElementById("bgMusic");
    bgMusic.muted = false;
    bgMusic.play().catch(error => {
      console.warn("Autoplay may be blocked until user interacts:", error);
    });
  } else {
    // ❌ Wrong password alert
    alert("Oops! Try again 💌");
  }
}


