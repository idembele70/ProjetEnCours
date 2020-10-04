function nouvelleTache() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("tacheSaisie").value;
  var t = document.createTextNode(inputValue);
    t.className = "valeurSasie";
 
  var entreValeur = document.createElement("input");
  entreValeur.value = inputValue;
  entreValeur.disabled = true;
  li.appendChild(entreValeur);
  if (inputValue === '') {
    alert("Vous devrez ecrire une Tâche !!");
  } else {
    document.getElementById("listeTache").appendChild(li);
  }
  document.getElementById("tacheSaisie").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "supprimerTache";
  span.appendChild(txt);
  li.appendChild(span);
// ajouter Par moi pour la tache modifier
  var editable = document.createElement("button");

 editable.innerHTML = "Modifier"
  editable.className = "editable";
  li.appendChild(editable) ;

 var modif = document.getElementsByClassName("editable");
  
  for ( i = 0; i < modif.length; i++) {
  modif[i].onclick = function() {  
  // alert("tu veux modifier ?");
    if (entreValeur.disabled == true) {
      entreValeur.disabled = false;
    }else {
      entreValeur.disabled = true;
    }

  }

  }
      // fin du code ajotuer 

  var close = document.getElementsByClassName("supprimerTache");
  var i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}