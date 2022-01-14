var d =document

var btn_boisson = [d.getElementById("b1"), d.getElementById("b2"), d.getElementById("b3"), d.getElementById("b4"), d.getElementById("b5"), d.getElementById("b6"), ];
var btn_boisson_active=7;

var btn_cal_bib = d.getElementById("calcul_bib"); 
var result = 0;



for(let i=0; i<7; i++){

  
    btn_boisson[i].onclick = function(){

      if(btn_boisson_active != i){

        btn_active(btn_boisson[i]);
    
        if(btn_boisson_active <=6){
          btn_desactive(btn_boisson[btn_boisson_active])
        }    
    
        btn_boisson_active = i;
    
      }else{
        btn_desactive(btn_boisson[i]);
        btn_boisson_active = 7;
      }

    }
  
  

  btn_cal_bib.onclick = function(){
    //calculer
  var poid_bib = d.getElementById("poids_bib").value
  
    if(poid_bib == ""){
      alert("Merci d'indiquer le poids !");
    }else{
      check(btn_boisson_active,poid_bib);
      d.getElementById("result_bib").textContent  = result;
    }

  }


}




















//function

function btn_active(boisson){
  boisson.style.backgroundColor="rgba(0,0,0,0.5)"
}

function btn_desactive(boisson){
  boisson.style.backgroundColor="rgba(255,255,255,0.5)"
}

function check(soda_type, poids){
    
   switch (soda_type){
     case 0 : 
          if(poids>19300){
            result = 1;
          }else if(poids>17500){
            result = 0.92;
          }else if(poids>15800){
            result = 0.83;
          }else if(poids>14000){
            result = 0.75;
          }else if(poids>12300){
            result = 0.67;
          }else if(poids>10500){
            result = 0.58;
          }else if(poids>8800){
            result = 0.50;
          }else if(poids>7000){
            result = 0.42;
          }else if(poids>5300){
            result = 0.33;
          }else if(poids>3500){
            result = 0.25;
          }else if(poids>1800){
            result = 0.17;
          }else if(poids>0){
            result = 0.08;
          }else{
            result = 0;
          }
          break;

     case 1 :
          if(poids>4700){
            result = 1;
          }else if(poids>3500){
            result = 0.83;
          }else if(poids>2600){
            result = 0.66;
          }else if(poids>1700){
            result = 0.5;
          }else if(poids>900){
            result = 0.33;
          }else if(poids>0){
            result = 0.17;
          }else{
            result = 0;
          }
          break;
     case 2 :
          if(poids>4800){
            result = 1;
          }else if(poids>3900){
            result = 0.83;
          }else if(poids>2900){
            result = 0.66;
          }else if(poids>1900){
            result = 0.5;
          }else if(poids>1000){
            result = 0.33;
          }else if(poids>0){
            result = 0.17;
          }else{
            result = 0;
          }
          break;

     case 3 :

            if(poids>4600){
              result = 1;
            }else if(poids>3700){
              result = 0.83;
            }else if(poids>2700){
              result = 0.66;
            }else if(poids>1800){
              result = 0.5;
            }else if(poids>900){
              result = 0.33;
            }else if(poids>0){
              result = 0.17;
            }else{
              result = 0;
            }

            break;
          
     case 4 :
              if(poids>4700){
                result = 1;
              }else if(poids>3700){
                result = 0.83;
              }else if(poids>2800){
                result = 0.66;
              }else if(poids>1900){
                result = 0.5;
              }else if(poids>900){
                result = 0.33;
              }else if(poids>0){
                result = 0.17;
              }else{
                result = 0;
              }
              break;

    case 5 :
                if(poids>4700){
                  result = 1;
                }else if(poids>3800){
                  result = 0.83;
                }else if(poids>2800){
                  result = 0.66;
                }else if(poids>1900){
                  result = 0.5;
                }else if(poids>900){
                  result = 0.33;
                }else if(poids>0){
                  result = 0.17;
                }else{
                  result = 0;
                }
                break;
    
    case 7 : alert("Sectionner une boisson !")
   }

}
