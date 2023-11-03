// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  //Determine Input
  let input = document.getElementById("character-select").value;
  console.log(input);

  if (input === "Does a magic 8 ball actually work?") {
    //Is the question preset 1?
    console.log("Does a magic 8 ball actually work?");
    document.getElementById("output").innerHTML = "How dare you doubt me!";
  } else if (input === "Is JavaScript awesome?") {
    //Is the question preset 2
    console.log("Isjavaawesome");
    document.getElementById("output").innerHTML = "Of Course!";
  } else if (input === "") {
    console.log("null");
    document.getElementById("output").innerHTML = "Please ask a question...";
  } else {
    //You have discovered a new, mysterious element, Skylander. Perhaps I can tell you more about it... in time.
    let randNum = Math.random();
    console.log(randNum);
    if (randNum < 0.2) {
      console.log("1");
      document.getElementById("output").innerHTML = "Without a Doubt.";
    } else if (randNum < 0.4) {
      console.log("2");
      document.getElementById("output").innerHTML = "As I see it, yes.";
    } else if (randNum < 0.6) {
      console.log("3");
      document.getElementById("output").innerHTML =
        "Concentrate and ask again.";
    } else if (randNum < 0.8) {
      console.log("4");
      document.getElementById("output").innerHTML = "Don't count on it.";
    } else {
      console.log("5");
      document.getElementById("output").innerHTML = "Outlook not so good.";
    }
  }
}
