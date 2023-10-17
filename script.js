const WerteProdukt1 = [];
const WerteProdukt2 = [];
const WerteProdukt3 = [];

const Kategorien = ["1", "2", "3", "z"];

function Reset(){
	location.reload();
	return;
}


const radioButton = document.querySelector('input[type="radio"]:checked');

window.addEventListener('change', function() {
  //Speichern();
  //Graph();
  console.log('Radio-Button wurde ausgewählt.');
});


function Speichern(){
    for (var x = 1; x <= 3; x++){
        for (var y = 1; y <= 26; y++){
          // "Kategorie"+x+"-"+y
            const WerteKategorie = document.getElementsByName("Kategorie"+x+"-"+y).value;
            alert(WerteKategorie);
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

function Graph(){
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
}