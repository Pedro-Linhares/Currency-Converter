var arrayMovieList = [];
var arrayNameList = [];

function AddMovie(){
    //get the input value
    var movieAddress = document.getElementById("movie").value;
    var movieName = document.getElementById("name").value;
   
    //
    if(movieAddress.indexOf("image/jpeg") || movieAddress.endsWith(".jpg")){

        document.getElementById("field").innerHTML = "";
        DoPush(movieAddress, movieName);
        ListMovies();

   } else{

        alert("[ERRO] put a valid adress"); 

   }
    document.getElementById("movie").value = "";
    
}

function DoPush(address, name){
    
    arrayMovieList.push(address);
    arrayNameList.push(name);
}

function ListMovies(){
    var listField = document.getElementById("field");

    for(var i = 0; i < arrayMovieList.length; i++){
        var addFilm = `<img src = "${arrayMovieList[i]}"` +
                       `<p> <h3> ${arrayNameList[i]}</h3> </p>`;
        listField.innerHTML += addFilm;
    }
}

function RemoveMovie(){
    var remove = document.getElementById("remove").value;

    if(arrayNameList.includes(remove)){
        var arrayIndex = parseInt(arrayNameList.indexOf(remove));
        
        arrayNameList.splice(arrayIndex, 1);
        arrayMovieList.splice(arrayIndex, 1);

        document.getElementById("field").innerHTML = "";
        ListMovies();
    }
}