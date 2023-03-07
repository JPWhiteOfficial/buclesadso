function mostrar(){
  let numero_fila=parseInt(document.getElementById("numerofila").value)
  //console.log(numero_fila);
  const fila1=20;
  const fila2=40;
  const fila3=30;

  if ((numero_fila==1)){
    nivel1(numero_fila,fila1)
  }
  

  

function nivel1(numero_fila,fila1){
  alert("tickets iniciales fila "+ numero_fila+" Te sobran "+ fila1 + " cupos");

  if((numero_fila==1)){
    let ticketscomprados=parseInt( prompt("cuantos tickets desea adquirir? "))

    while(ticketscomprados<fila1){
      let ticketsrestantes= fila1-ticketscomprados;
      let tickets=prompt("desea adquirir mas tickets? Quedan: "+ticketsrestantes)
      let ticketsInt=parseInt(tickets)
      ticketscomprados+=ticketsInt;
      
      if (ticketscomprados>=fila1){
        alert("los cupos estan llenos mira en otro bloque")

      }
  }
} 
if ((numero_fila==2)){
  nivel2(numero_fila,fila2)
}

  if((numero_fila==2)){
  let ticketscomprados=parseInt( prompt("cuantos tickets desea adquirir? "))

  while(ticketscomprados<fila2){
    let ticketsrestantes= fila2-ticketscomprados;
    let tickets=prompt("desea adquirir mas tickets? Quedan: "+ticketsrestantes)
    let ticketsInt=parseInt(tickets)
    ticketscomprados+=ticketsInt;
    
    if (ticketscomprados>=fila2){
      alert("los cupos estan llenos mira en otro bloque")

    }
}
}
if((numero_fila==3)){
  let ticketscomprados=parseInt( prompt("cuantos tickets desea adquirir? "))

  while(ticketscomprados<fila3){
    let ticketsrestantes= fila3-ticketscomprados;
    let tickets=prompt("desea adquirir mas tickets? Quedan: "+ticketsrestantes)
    let ticketsInt=parseInt(tickets)
    ticketscomprados+=ticketsInt;
    
    if (ticketscomprados>=fila3){
      alert("los cupos estan llenos mira en otro bloque")
    }
  }
}
}
}