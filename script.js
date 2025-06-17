function unlock() {
  const password = document.getElementById("unlockPassword").value;
  const correctPassword = "26062003"; // Change this to her DOB

  if (password === correctPassword) {
    document.getElementById("unlockPage").style.display = "none";
    document.getElementById("mainPage").style.display = "block";

    // Start music
    const music = document.getElementById("bgMusic");
    music.muted = false;

    // Show sweet popup
    setTimeout(() => {
      alert("Happy 3rd Anniversary My Love 💖\nThis is for all our shared memories and endless love!");
    }, 1000);
  } else {
    alert("Oops! Try again with the correct magic word.");
  }
}
