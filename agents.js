// RECUPERER ULTIMATE AGENTS

const url = "https://valorant-api.com/v1/agents";

// JETT

function recupererJett() {
  let requete = new XMLHttpRequest();
  requete.open("GET", url);
  requete.responseType = "json";
  requete.send();
  requete.onload = function () {
    if (requete.readyState === XMLHttpRequest.DONE) {
      if (requete.status === 200) {
        let reponse = requete.response;
        let ultJett = reponse.data[25].abilities[3].description;
        document.querySelector("#jettult").textContent = ultJett;
      } else {
        alert("Un problème est intervenu, merci de revenir plus tard.");
      }
    }
  };
}
let jett = document.querySelector("#jett3");
jett.addEventListener("mouseover", () => {
  recupererJett();
});

// OMEN

function recupererOmen() {
  let requete = new XMLHttpRequest();
  requete.open("GET", url);
  requete.responseType = "json";
  requete.send();
  requete.onload = function () {
    if (requete.readyState === XMLHttpRequest.DONE) {
      if (requete.status === 200) {
        let reponse = requete.response;
        let ultOmen = reponse.data[24].abilities[3].description;
        document.querySelector("#omenult").textContent = ultOmen;
      } else {
        alert("Un problème est intervenu, merci de revenir plus tard.");
      }
    }
  };
}
let omen = document.querySelector("#omen3");
omen.addEventListener("mouseover", () => {
  recupererOmen();
});

// CYPHER

function recupererCypher() {
  let requete = new XMLHttpRequest();
  requete.open("GET", url);
  requete.responseType = "json";
  requete.send();
  requete.onload = function () {
    if (requete.readyState === XMLHttpRequest.DONE) {
      if (requete.status === 200) {
        let reponse = requete.response;
        let ultCypher = reponse.data[8].abilities[3].description;
        document.querySelector("#cypherult").textContent = ultCypher;
      } else {
        alert("Un problème est intervenu, merci de revenir plus tard.");
      }
    }
  };
}
let cypher = document.querySelector("#cypher3");
cypher.addEventListener("mouseover", () => {
  recupererCypher();
});

// BREACH

function recupererBreach() {
  let requete = new XMLHttpRequest();
  requete.open("GET", url);
  requete.responseType = "json";
  requete.send();
  requete.onload = function () {
    if (requete.readyState === XMLHttpRequest.DONE) {
      if (requete.status === 200) {
        let reponse = requete.response;
        let ultBreach = reponse.data[2].abilities[3].description;
        document.querySelector("#breachult").textContent = ultBreach;
      } else {
        alert("Un problème est intervenu, merci de revenir plus tard.");
      }
    }
  };
}
let breach = document.querySelector("#breach3");
breach.addEventListener("mouseover", () => {
  recupererBreach();
});
