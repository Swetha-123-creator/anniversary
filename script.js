function unlock() {
  const password = document.getElementById("unlockPassword").value;
  if (password === "foreverus") { // 🔁 Replace with your real password
    document.getElementById("unlockPage").style.display = "none";
    document.getElementById("mainPage").style.display = "block";

    // ✅ Unmute and play the music after user interaction
    const music = document.getElementById("bgMusic");
    music.muted = false;
    music.play().catch((e) => {
      console.log("Autoplay blocked. Interaction needed.", e);
    });
  } else {
    alert("Oops! Try again 💌");
  }
}

