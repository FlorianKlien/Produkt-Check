const WerteProdukt1 = [];
const WerteProdukt2 = [];
const WerteProdukt3 = [];

const Kategorien = ["1", "2", "3", "z"];

function Reset(){
	location.reload();
	return;
}

function Speichern(){
    for (var x = 1; x <= 3; x++){
        for (var y = 1; y <= 26; y++){
            const WerteKategorie = document.getElementById(`Kategorie${i}-${j}`).value;
            if (x == 1){
                WerteKategorie.push(WerteProdukt1)
            }
            else if (x ==2){
                WerteKategorie.push(WerteProdukt2)
            }
            else{
                WerteKategorie.push(WerteProdukt3)
            }
        }
    }
}

const LastKategorie1 = document.getElementById("Kategorie26-1")
const LastKategorie2 = document.getElementById("Kategorie26-2")
const LastKategorie3 = document.getElementById("Kategorie26-3")

if (LastKategorie1 != "")

const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: Kategorien,
      datasets: [{
        label: 'Produkt 1',
        data: WerteProdukt1,
        borderWidth: 1
      },{
        label: 'Produkt 2',
        data: WerteProdukt2,
        borderWidth: 1
      },{
        label: 'Produkt 3',
        data: WerteProdukt3,
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });