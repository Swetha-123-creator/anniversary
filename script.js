function unlock() {
  const input = document.getElementById("unlockPassword").value;
  const correct = "foreverus"; // Change as needed
  if (input.toLowerCase() === correct) {
    document.getElementById("unlockPage").style.display = "none";
    document.getElementById("mainPage").style.display = "block";
  } else {
    alert("That's not the magic word, my love 💫");
  }
}
