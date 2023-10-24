// Functionize Minecraft Fishing Start Code

//HTML variables
// let resultImg = document.getElementById("result-img");
// let numCodSpan = document.getElementById("num-cod");
// let numSalmonSpan = document.getElementById("num-salmon");
// let numTropicalSpan = document.getElementById("num-tropical");
// let numPufferSpan = document.getElementById("num-puffer");

//Fish Count Variables
// let numCod = 0;
// let numSalmon = 0;
// let numTropical = 0;
// let numPuffer = 0;

// Fish Button Event Listener
document.getElementById("fish-btn").addEventListener("click", fishBtnClicked);

function fishBtnClicked() {
  //Determine Selected Character
  let character = document.getElementById("character-select").value;
  console.log(character);

  if (character === "Does a magic 8 ball actually work?") {
    //steve fish simluator
    console.log("Does a magic 8 ball actually work?");
    document.getElementById("output").innerHTML = "How dare you doubt me!";
  } else if (character === "Is JavaScript awesome?") {
    //Alex fish simluator
    console.log("Isjavaawesome");
    document.getElementById("output").innerHTML = "Of Course!";
  } else if (character === "") {
    console.log("null");
    document.getElementById("output").innerHTML = "Please ask a question...";
  } else {
    //You have discovered a new, mysterious element, Skyalnder. Perhaps I can tell you more about it... in time.
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
