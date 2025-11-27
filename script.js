//Ejercicio 5: Cotizador de Envíos 'RapidiEntrega'
//La Necesidad:
//La empresa de logística 'RapidiEntrega' tiene un sistema de precios complejo que depende
//del peso del paquete y la zona de destino (Nacional o Internacional). Necesitan un prototipo
//simple para que sus empleados de mostrador puedan cotizar rápidamente un envío.
//Tu Tarea:
//Desarrollar un simulador de cotización. El empleado debe poder ingresar el peso y
//seleccionar la zona, y el sistema debe aplicar recargos y calcular el costo total.
//Requisitos de Operación:
//● El sistema debe manejar un costo base (ej. 5.000).
//● El menú principal debe ofrecer:
//1. Definir Zona de Envío
//2. Definir Peso del Paquete (en Kg)
//3. Aplicar Seguro (Opcional)
//4. Calcular Costo Total del Envío
//5. Salir
//Lógica de Decisiones (Condicionales):
//● Opción 1 (Definir Zona):
//○ Debe preguntar al usuario si la zona es "Nacional" o "Internacional".
//○ Esta decisión modifica el costo base:
//
//■ Si es "Nacional", el costo base se mantiene (ej. 5.000).
//■ Si es "Internacional", el costo base se triplica (ej. 15.000).
//■ Cualquier otra entrada debe ser "Zona no válida".
//● Opción 2 (Definir Peso):
//○ Debe preguntar el peso en Kg.
//○ Esta decisión agrega un recargo por peso:
//■ Si el peso es menor a 2 Kg: No hay recargo.
//■ Si el peso está entre 2 Kg y 5 Kg: Recargo del 25% sobre el costo base.
//■ Si el peso es mayor a 5 Kg: Recargo del 50% sobre el costo base.
//● Opción 3 (Aplicar Seguro):
//○ Debe preguntar al usuario si desea tomar el seguro ("Si" o "No").
//○ Si la respuesta es "Si", se debe sumar un costo fijo de seguro (ej. 2.000) al total.
//● Opción 4 (Calcular Costo Total):
//○ Debe verificar que la Zona (Opción 1) y el Peso (Opción 2) hayan sido definidos.
//○ Debe sumar: (Costo Base modificado por Zona) + (Recargo por Peso) + (Costo de
//Seguro, si aplica).
//● Opción 5 (Salir):
//○ Debe terminar el programa.

// Variables iniciales
let costoBase = 5000;
let zonaDestino = false;
let pesoPaquete = false;
let seguroAplicado = false;
let recargo = 0;
let costoSeguro = 0;

let zona = "";
let peso = 0;
let opcion = 0;


while(opcion != 5) {
  
 opcion = parseInt(prompt(
  "📦 Menú RapidiEntrega 📦\n\n" +
  "1. Definir Zona de Envío\n" +
  "2. Definir Peso del Paquete (Kg)\n" +
  "3. Aplicar Seguro (Opcional)\n" +
  "4. Calcular Costo Total del Envío\n" +
  "5. Salir\n\n" +
  "Ingrese una opción (1-5):"
));
  
  if(opcion === 1) {
    // Definir Zona
    zona = prompt("Ingrese la zona de envío (Nacional o Internacional):");
    
    if(zona === "Nacional" || zona === "nacional") {
      costoBase = 5000;
      zonaDestino = true;
      console.log("Zona Nacional seleccionada. Costo base: " + costoBase);
    } else if(zona === "Internacional" || zona === "internacional") {
      costoBase = 15000;
      zonaDestino = true;
      console.log("Zona Internacional seleccionada. Costo base: " + costoBase);
    } else {
      console.log("Zona no válida.");
    }
    
  } else if(opcion === 2) {
    // Definir Peso
    peso = parseFloat(prompt("Ingrese el peso del paquete en Kg:"));
    
    if(peso < 2) {
      recargo = 0;
    } else if(peso >= 2 && peso <= 5) {
      recargo = costoBase * 0.25;
    } else if(peso > 5) {
      recargo = costoBase * 0.5;
    }
    
    pesoPaquete = true;
    console.log("Peso registrado: " + peso + " Kg. Recargo: " + recargo);
    
  } else if(opcion === 3) {
    // Aplicar Seguro
    let respuestaSeguro = prompt("¿Desea aplicar seguro? (Si/No):");
    
    if(respuestaSeguro === "Si" || respuestaSeguro === "si") {
      costoSeguro = 2000;
      seguroAplicado = true;
      console.log("Seguro aplicado. Costo: " + costoSeguro);
    } else if(respuestaSeguro === "No" || respuestaSeguro === "no") {
      costoSeguro = 0;
      seguroAplicado = false;
      console.log("Seguro no aplicado.");
    } else {
      console.log("Opción de seguro no válida.");
    }
    
  } else if(opcion === 4) {
    // Calcular Costo Total
    if(zonaDestino && pesoPaquete) {
      let total = costoBase + recargo + costoSeguro;
      console.log("Costo total del envío: " + total);
    } else {
      console.log("Debe definir zona y peso antes de calcular el costo.");
    }
    
  } else if(opcion === 5) {
    //Salir.
    console.log("Gracias por usar RapidiEntrega. ¡Hasta luego!");
    
  } else {
    console.log("Opción no válida. Ingrese un número del 1 al 5.");
  }
}
