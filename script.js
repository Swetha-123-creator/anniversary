function unlock() {
  const passwordInput = document.getElementById("unlockPassword").value;
  const correctPassword = "26062003";

  if (passwordInput === correctPassword) {
    document.getElementById("unlockPage").style.display = "none";
    document.getElementById("mainPage").style.display = "block";

    const bgMusic = document.getElementById("bgMusic");
    bgMusic.muted = false;
    bgMusic.play().catch(err => {
      console.warn("Autoplay may be blocked until interaction", err);
    });

    // Remember user unlocked
    localStorage.setItem("unlocked", "true");
  } else {
    alert("Oops! Try again 💌");
  }
}

// Auto-unlock if already unlocked
window.onload = () => {
  if (localStorage.getItem("unlocked") === "true") {
    document.getElementById("unlockPage").style.display = "none";
    document.getElementById("mainPage").style.display = "block";
    const bgMusic = document.getElementById("bgMusic");
    bgMusic.muted = false;
    bgMusic.play().catch(err => console.warn("Autoplay blocked:", err));
  }
};
