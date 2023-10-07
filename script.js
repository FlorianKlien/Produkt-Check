const WerteKategorie1 = [];
const WerteKategorie2 = [];
const WerteKategorie3 = [];

function Reset(){
	location.reload();
	return;
}

function Speichern(){
    for (var x = 1; x <= 3; x++){
        for (var y = 1; y <= 26; y++){
            const WerteKategorie = document.getElementById("Kategorie"+i+"-"+j)
            if (x == 1){
                WerteKategorie.push(WerteKategorie1)
            }
            else if (x ==2){
                WerteKategorie.push(WerteKategorie2)
            }
            else{
                WerteKategorie.push(WerteKategorie3)
            }
        }
    }
}