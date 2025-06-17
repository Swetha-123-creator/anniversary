function unlock() {
  const passwordInput = document.getElementById("unlockPassword").value;
  const correctPassword = "26062003";

  if (passwordInput === correctPassword) {
    document.getElementById("unlockPage").style.display = "none";
    document.getElementById("mainPage").style.display = "block";

    const bgMusic = document.getElementById("bgMusic");
    bgMusic.muted = false;
    bgMusic.play().catch(error => {
      console.warn("Autoplay blocked until user interacts:", error);
    });
  } else {
    alert("Oops! Try again 💌");
  }
}

function openSurprise() {
  document.getElementById("surpriseModal").style.display = "block";
}

function closeSurprise() {
  document.getElementById("surpriseModal").style.display = "none";
}
