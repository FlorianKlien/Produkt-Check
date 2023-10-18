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
  if (this.event.target.type === 'radio' && this.event.target.name.startsWith('Kategorie')) {
    Speichern();
    //Graph();
    console.log('Radio-Button wurde ausgewählt.');
  }
});


function Speichern() {
  for (var x = 1; x <= 3; x++) {
    for (var y = 1; y <= 26; y++) {
      const radioButtons = document.getElementsByName("Kategorie" + x + "-" + y);
      for (var i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
          const WerteKategorie = radioButtons[i].value;
          console.log("Wert: " + WerteKategorie);
          if (x === 1) {
            WerteProdukt1.push(WerteKategorie);
          } else if (x === 2) {
            WerteProdukt2.push(WerteKategorie);
          } else {
            WerteProdukt3.push(WerteKategorie);
          }
        }
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