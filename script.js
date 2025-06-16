// script.js

function unlock() {
  const password = document.getElementById("unlockPassword").value;

  if (password === "26062003") { // You can change this password
    document.getElementById("unlockPage").style.display = "none";
    document.getElementById("mainPage").style.display = "block";

    const music = document.getElementById("bgMusic");
    music.muted = false;
    music.play().catch((e) => {
      console.log("Autoplay blocked. Interaction needed.", e);
    });
  } else {
    alert("Oops! Try again 💌");
  }
}


