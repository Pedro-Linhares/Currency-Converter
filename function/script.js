function AddFilm(){
    var favoriteFilm = document.getElementById("film").value;
   
    if(favoriteFilm.endsWith(".jpg") || favoriteFilm.indexOf("image/jpeg")){
        PutOnFimlField(favoriteFilm);
   } else{
        alert("[ERRO] put a valid adress");
   }
    document.getElementById("film").value = "";
    
}
function PutOnFimlField(film){
        var elementFilm = `<img src = "${film}" >`;
        var elementFilmList = document.getElementById("field");
        elementFilmList.innerHTML += elementFilm;
}

