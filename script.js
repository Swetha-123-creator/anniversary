function unlock() {
  const passwordInput = document.getElementById("unlockPassword").value;
  const correctPassword = "26062003";

  if (passwordInput === correctPassword) {
    document.getElementById("unlockPage").style.display = "none";
    document.getElementById("mainPage").style.display = "block";

    const bgMusic = document.getElementById("bgMusic");
    bgMusic.muted = false;
    bgMusic.play().catch(e => console.warn("User interaction needed to play:", e));
  } else {
    alert("Oops! Wrong password 💌");
  }
}

function openSurprise() {
  document.getElementById("surpriseModal").style.display = "block";
}

function closeSurprise() {
  document.getElementById("surpriseModal").style.display = "none";
}
