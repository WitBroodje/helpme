function check() {
  //Ophalen van IDS//

  let naam = document.getElementById("naam").value;
  let achterNaam = document.getElementById("achternaam").value;
  let eMail = document.getElementById("email").value;
  let nummer = document.getElementById("nummer").value;
  let postCode = document.getElementById("postcode").value;
  let huisNummer = document.getElementById("huisnummer").value;
  let woonPlaats = document.getElementById("woonplaats").value;

  //Het maken van lenghts//

  let naamLength = naam.length;
  let achterNaamLength = achterNaam.length;
  let eMailLength = eMail.length;
  let nummerLength = nummer.length;
  let postCodeLength = postCode.length;
  let huisNummerLength = huisNummer.length;
  let woonPlaatslength = woonPlaats.length;

  if (
    naamLength > 0 &&
    achterNaamLength > 0 &&
    eMailLength > 0 &&
    nummerLength > 0 &&
    postCodeLength > 0 &&
    huisNummerLength > 0 &&
    woonPlaatslength > 0
  ) {
    alert("Bedankt voor uw aankoop!");
  } else {
    alert("Je hebt iets niet ingevult!");
  }
}
