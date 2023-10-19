const WerteProdukt1 = [];
const WerteProdukt2 = [];
const WerteProdukt3 = [];

const Kategorien = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];


function Reset(){
	location.reload();
	return;
}


const radioButton = document.querySelector('input[type="radio"]:checked');

window.addEventListener('change', function() {
  const target = event.target;
  if (target.type === 'radio') {
    Save();
    console.log('Radio-Button wurde ausgewählt.');
  }
});


function Save() {
  const WerteProdukt1 = [];
  const WerteProdukt2 = [];
  const WerteProdukt3 = [];

  for (var x = 1; x <= 3; x++) {
    for (var y = 1; y <= 26; y++) {
      const radioButtons = document.getElementsByName("Kategorie" + y + "-" + x);
      for (var z = 0; z < radioButtons.length; z++) {
        if (radioButtons[z].checked) {
          const WerteKategorie = radioButtons[z].value;
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

  chart.data.datasets[0].data = WerteProdukt1;
  chart.data.datasets[1].data = WerteProdukt2;
  chart.data.datasets[2].data = WerteProdukt3;
  chart.update();

}

const ctx = document.getElementById('myChart');

const chart = new Chart(ctx, {
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
    indexAxis: "y",
    scales: {
      x: {
        beginAtZero: true,
        max:3, 
        min:-3
      }
    }
  }
});