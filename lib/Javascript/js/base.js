document.write("<h3>Apprendre le javascript</h3> <br/>"); //Ecrire une phrase dans le document

var compteur = 5;
var monTexte = "Ceci est une chaine de caractère"
var decimal = 1.5;

var addition = compteur + decimal;
document.write("afficher le résultat de 5 + 1.5 = ", addition , "<br/><br/>");

//type contenue
document.write("<h3>Les différent type de variable: </h3> <br/>")
var var1;
var var2 = 15.95;
var var3 = "Hello";
var var4 = "15.95";
var var5 = true;
var var6 = false;

document.write("var1 =", var1, "<br/> Type =", typeof(var1), "<br/><br/>", 
               "var2 =", var2, "<br/> Type =", typeof(var2), "<br/><br/>",
               "var3 =", var3, "<br/> Type =", typeof(var3), "<br/><br/>",
               "var4 =", var4, "<br/> Type =", typeof(var4), "<br/><br/>",
               "var5 =", var5, "<br/> Type =", typeof(var5), "<br/><br/>",
               "var6 =", var6, "<br/> Type =", typeof(var6), "<br/><br/>"
               );

//Conditions

var prixTotal = 20;
var prixTransport = 10;

document.write("<h3>Condition:</h3>Si Le prix totale est supérieure à 50 alors le prix du transport est divisé par deux <br/> Prix total = " , prixTotal, "<br/> Prix du transport = ", prixTransport ,"<br/> <br/>");

if (prixTotal > 50){
    prixTransport = prixTransport / 2;
    document.write( "Alors le prix du transport est = ", prixTransport, "<br/><br/>");
}else{
    prixTransport = prixTransport;
    document.write( "Alors le prix du transport est = ", prixTransport, "<br/><br/>");
};

// Infos supplémentaire! 

document.write("<h4>Info en plus pour les conditions :</h4> if ( (a == 1) && (b == 2)) Si a vaut 1 <span>ET</span> b vaut 2 <br/> if ( (a != 1) && (b == 2)) Si est différent de 1 <span>ET</span> b vaut 2 <br/> if ( (a == 1) || (b == 2)) Si a vaut 1 <span>OU</span> b vaut 2 <br/> if ( (a == 0) || ( (a == 1) && (b == 2) )) Si a vaut 0 <span>OU</span> Si a vaut 1 <span>ET</span> b vaut 2 <br/>if ( (a != 1) && (b != 2)) Si a est différent 1 <span>OU</span> b est différent 2 <br/> <br/> ");
    


// Switch

document.write("<h4>Switch:</h4> Ici on va comparer la variable noCompteur et faire afficher la phrase correspondante ici : ")

var noCompteur = 2;
switch (noCompteur) {
    case (1) /*valeur comparé*/ : document.write ( "no compteur = ", noCompteur, "<br/>" );
        break;
    case (2) : document.write ( "no compteur = ", noCompteur, "<br/>");
        break;
    case (3) : document.write ( "no compteur = ", noCompteur, "<br/>");
        break;
    case (4) : document.write ("no compteur = ", noCompteur, "<br/>");
        break;
    default : document.write ("no compteur = ", noCompteur, "<br/>");
};

//Les boucles

// For

document.write("<h3>Les boucles :</h3> <h4>For:</h4> Ici nous voulons calculé la somme des nombre de un à dix : <br/>");

var somme = 0;

for (var no = 1; no <= 10 ; no ++ ){
    somme = somme + no;
};

document.write ("somme = ", somme, "<br/> no = ", no, "<br/> <h5>ATTENTION AU BOUCLES SANS FIN, la condition de fin est très importante!</h5>");

// While

document.write ("<h4> While : </h4> Tant que la somme est inférieure à 100 la boucle continue de tourner on rajoutera à chaque fois N qui lui même augmentera de 1 à chaque boucle <br/><br/>");

var somme2 = 0;
var N = 0;

while ( somme2 < 100 ) {
    N ++;
    somme2 = somme2 + N;
    document.write( "Somme = ", somme2 , " et N = ", N, "<br/>");
};

document.write ("<br/>Au finale somme = ", somme2, " et N = ", N, "<br/><br/>");

// Do

document.write("<h3>Do :</h3> Do s'executera au moins une fois et la condition s'effectura après avec while <br/>");

var somme3 = 0;
var N1 = 0;

do {
    N1 ++;
    somme3 = somme3 + N1;
} while ( somme3 < 100);

document.write("la somme sera donc ", somme3, " et le N sera ", N1, "<br/> <br/>");

// Fonction

document.write("<h3>Les Fonctions</h3>");

function getPluriel (nb) {
    if (nb > 1) {
        return "s";
    } else {
        return "";
    }
    //Le else ici n'est pas nécessaire, juste rajouter return "" après l'accolade du if aurait suffit
};

//La fonction aurait aussi pu s'écrire ainsi: function getPluriel (nb, mot) { var pluriel = ""; if (nb > 1){ pluriel = "s";} return mot + pluriel}; document.write("j'ai ", nbManga, " ", getPluriel (nbManga, "Manga"));
var nbManga = 10;
var nbFigurine = 1;

document.write("Ici nous utiliserons une fonction pour savoir si un mot doit prendre un S ou non suivant le nombre que l'ont à : <br/> J'ai donc ", nbManga, " Manga", getPluriel(nbManga), " et j'ai ", nbFigurine, " Figurine", getPluriel(nbFigurine), "<br/> <br/>");
