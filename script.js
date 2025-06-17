function unlock() {
  const passwordInput = document.getElementById("unlockPassword").value;
  const correctPassword = "26062003"; // your password

  if (passwordInput === correctPassword) {
    document.getElementById("unlockPage").style.display = "none";
    document.getElementById("mainPage").style.display = "block";

    // Play background music
    const bgMusic = document.getElementById("bgMusic");
    bgMusic.muted = false;
    bgMusic.play().catch(error => {
      console.warn("Autoplay blocked. Try interacting with the page.", error);
    });

    // Store music play state
    sessionStorage.setItem("musicPlaying", "true");
  } else {
    alert("Oops! Try again 💌");
  }
}

// Play music if returning from surprise.html
window.addEventListener("load", () => {
  const bgMusic = document.getElementById("bgMusic");
  const musicPlaying = sessionStorage.getItem("musicPlaying");

  if (bgMusic && musicPlaying === "true") {
    bgMusic.muted = false;
    bgMusic.play().catch(() => {});
  }
});
