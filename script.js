function unlock() {
  const passwordInput = document.getElementById("unlockPassword").value;
  const correctPassword = "26062003"; // Set your magic code

  if (passwordInput === correctPassword) {
    document.getElementById("unlockPage").style.display = "none";
    document.getElementById("mainPage").style.display = "block";

    const bgMusic = document.getElementById("bgMusic");
    bgMusic.muted = false;
    bgMusic.play().catch((err) =>
      console.warn("Autoplay issue:", err)
    );
  } else {
    alert("Oops! Try again 💌");
  }
}

function showSurprise() {
  alert("🎉 Surprise is loading... 💖\n\nHere's to many more memories together!");
}
