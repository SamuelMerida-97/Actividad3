//noprotect

/*aries      (mes 3)    21 de marzo al     20 de abril
tauro        (mes 4)    21 abril al        20 de mayo
geminis      (mes 5)    21 de mayo al      20 de junio
cancer       (mes 6)    21 de junio al     22 de julio
leo          (mes 7)    23 de julio al     23 de agosto
virgo        (mes 8)    24 de agosto al    22 de septiembre
libra        (mes 9)    23 de sept al      23 de octubre
escorpio     (mes 10)   24 de octub al     22 de noviembre
sagitario    (mes 11)   23 de noviembre al 21 de diciembre
capricornio  (mes 12)   22 de dicimbre al  20 de enero
acuario      (mes 1)    21 de enero al     19 de febrero
piscis       (mes 2)    20 de febrero al   20 de marzo
*/
var mes = parseInt(prompt("Ingrese el mes de su nacimiento"));
var dia = parseInt(prompt("Ingrese el dia de su nacimiento"));

  if(mes == 3 && dia >=21){
     console.log("su signo es Aries")
  }
     if(mes==3 && dia <=20){
       console.log("su signo es Piscis")
  } 
  if(mes==4 && dia >=21){
    console.log("su signo es Tauro")
  }
  if(mes==4 && dia <=20) {
    console.log("su signo es Aries")
  }
  if(mes==5 && dia >=21){
    console.log("su signo es Geminis")
  }
  if(mes==5 && dia <=20){
    console.log("su signo es Tauro")
  }
  if(mes==6 && dia >=21){
  console.log("su signo es Cancer")
  }
  if(mes==6 && dia <=20){
  console.log("su signo es Geminis")
  }
  if(mes==7 && dia >=23){
  console.log("su signo es Leo")
  }
  if(mes==7 && dia <=22){
  console.log("su signo es Cancer")
  } 
  if(mes==8 && dia >=24){
  console.log("su signo es Virgo")
  }
  if(mes==8 && dia <=23){
  console.log("su signo es Leo")
  }
  if(mes==9 && dia >=23){
    console.log("su signo es Libra")
  }
  if(mes==9 && dia <=22){
    console.log("su signo es Virgo")
  }
  if(mes==10 && dia >=24){
    consgole.log("su signo es Escorpio")
  }
  if(mes==10 && dia <=23){
    console.log("su signo es Libra")
  }
  if(mes==11 && dia >=23){
    console.log("su signo es Sagitario")
  }
  if(mes==11 && dia <=22){
    console.log("su signo es Escorpio")
  }
  if(mes==12 && dia >=22){
    console.log("su signo es Capricornio")
  }
  if(mes==12 && dia <=21){
    console.log("su signo es Sagitario")
  }
  if(mes==1 && dia >=21){
    console.log("su signo es Acuario")
  }
  if(mes==1 && dia <=20){
    console.log("su signo es Capricornio")
  }
  if(mes==2 && dia >=20){
    console.log("su signo es Piscis")
  }
  if(mes==2 && dia <=19){
    console.log("su signo es Acuario")
  }  
else(mes<1 && mes>12 && dia<1 && mes>31)
alert("Por favor ingrese una fecha valida")