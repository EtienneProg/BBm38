var d = document;


//btn nb plat
var plat = d.getElementById("plat");
var btn_plat = [d.getElementById("btn_plat_0"), d.getElementById("btn_plat_1")];
var btn_plat_active=2;


btn_plat[0].onclick = function(){

  if(btn_plat_active != 0){

    btn_active(btn_plat[0]);

    if(btn_plat_active == 1 || btn_plat_active == 0 ){
      btn_desactive(btn_plat[btn_plat_active])
    }    

    btn_plat_active = 0;

  }else{
    btn_desactive(btn_plat[0]);
    btn_plat_active = 2;
  }
}

btn_plat[1].onclick = function(){

  if(btn_plat_active != 1){

    btn_active(btn_plat[1]);
    if(btn_plat_active == 1 || btn_plat_active == 0 ){
      btn_desactive(btn_plat[btn_plat_active]);
    }   
    btn_plat_active = 1;

  }else{
    btn_desactive(btn_plat[1]);
    btn_plat_active = 2;
  }
  
}


//****************************************************************** */

//btn nb caisse
var caisse = d.getElementById("caisse");
var btn_caisse = [d.getElementById("btn_caisse_0"), d.getElementById("btn_caisse_1"), d.getElementById("btn_caisse_2"), d.getElementById("btn_caisse_3")];
var btn_caisse_active=4;


btn_caisse[0].onclick = function(){

  if(btn_caisse_active != 0){

    btn_active(btn_caisse[0]);

    if(btn_caisse_active <=3){
      btn_desactive(btn_caisse[btn_caisse_active]);
    }    

    btn_caisse_active = 0;

  }else{
    btn_desactive(btn_caisse[0]);
    btn_caisse_active = 4;
  }
}

btn_caisse[1].onclick = function(){

  if(btn_caisse_active != 1){

    btn_active(btn_caisse[1]);
    if(btn_caisse_active <=3 ){
      btn_desactive(btn_caisse[btn_caisse_active])
    }   
    btn_caisse_active = 1;

  }else{
    btn_desactive(btn_caisse[1]);
    btn_caisse_active = 4;
  }
  
}

btn_caisse[2].onclick = function(){

  if(btn_caisse_active != 2){

    btn_active(btn_caisse[2]);
    if(btn_caisse_active <=3){
      btn_desactive(btn_caisse[btn_caisse_active])
    }   
    btn_caisse_active = 2;

  }else{
    btn_desactive(btn_caisse[2]);
    btn_caisse_active = 4;
  }
  
}

btn_caisse[3].onclick = function(){

  if(btn_caisse_active != 3){

    btn_active(btn_caisse[3]);
    if(btn_caisse_active <=3){
      btn_desactive(btn_caisse[btn_caisse_active])
    }   
    btn_caisse_active = 3;

  }else{
    btn_desactive(btn_caisse[3]);
    btn_caisse_active = 4;
  }
  
}


/*disign btn activé et desactivé*/ 


var btn_active = function(b){

  b.style.borderLeft = "0";
  b.style.borderTop = "0";
  b.style.borderRight = "5px solid #a78553";
  b.style.borderBottom = "5px solid #e0b574";
}

var btn_desactive = function(b){

  b.style.borderLeft = "5px solid #a78553";
  b.style.borderTop = "5px solid #e0b574";
  b.style.borderRight = "0";
  b.style.borderBottom = "0";
}

//calcul sauce
var poids_plateau = 390;
var poids_caisse = 1175;
var poids_bac = 26;


var btn_cal = d.getElementById("btn_calcul");

btn_cal.onclick = function(){
  
  if(btn_plat_active>1){
    alert("Indiquez le nombre de plateau !");
  }else if(btn_caisse_active>3){
    alert("Indiquez le nombre de caisse !");
  }else if(d.getElementById("chiffre_bac").value == ""){
    alert("Indiquez le nombre de bac !");
  }else if(d.getElementById("chiffre_p_sauce").value == "" || d.getElementById("chiffre_p_sauce").value <0){
    alert("Indiquez le poids de 3 sauces !");
  }else if(d.getElementById("chiffre_p_toto").value == "" || d.getElementById("chiffre_p_toto").value <0){
    alert("Indiquez le poids Total !");
  }else{
    
    var cal = (d.getElementById("chiffre_p_toto").value - ((poids_plateau * btn_plat_active) + (poids_caisse * btn_caisse_active) + (d.getElementById("chiffre_bac").value * poids_bac)))/(d.getElementById("chiffre_p_sauce").value/3);

    d.getElementById("Nb_sauce_result").textContent = cal.toString();

  }


}


//**************************** */


var btn_boisson = d.getElementById("b1");

btn_boisson.onClick = () =>

  alert("enfin putain");





  
  



