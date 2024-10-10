/*En la ciudad de Barquisimeto, se ha inaugurado una tienda denominada 
 “DULCES MOMENTOS” C.A, que ofrece los más hermosos arreglos para esos momentos 
 especiales. Los tipos de arreglos que son elaborados por la tienda son de flores 
 y de frutas. Actualmente, la tienda requiere de un sistema computarizado que le 
 permita llevar el control de los arreglos que vende a lo largo del mes.
Independientemente del tipo de arreglo, se mantienen los siguientes datos: número del 
 contrato del arreglo, nombre del cliente. Por supuesto, es importante el dato tipo 
 de arreglo (1. Arreglos de Flores 2. Arreglos de Frutas), que vienen en tres tamaños 
 (1. Pequeño, 2. Mediano y 3. Grande) y cuyos precios bases están definidos 
 en 25$, 45$, y 80$, respectivamente.
A continuación se exponen los detalles relacionados por cada tipo de arreglo:
	Si el arreglo es de flores, se debe especificar qué tipo de flores llevará 
(1. Natural ó 2. Artificial), ya que, se debe considerar que si las flores 
son artificiales el arreglo tendrá un descuento del 8% sobre el precio base.
	Si el arreglo es de fruta, se debe indicar que tipo de aditivo llevará 
el mismo (1. Chocolate ó 2. Botella de vino), ya que, hay un incremento a 
cancelar del 10% o del 20% sobre el precio base, respectivamente. 
Para finalizar se desea  conocer el monto en $ a pagar por cada cliente, 
información que debe estar acompañada con el número de contrato del arreglo,
 nombre del cliente y tipo de arreglo (flores o frutas).  
 Por otra parte, la tienda necesita conocer el monto total en $. Vendido, 
 el porcentaje de arreglos de flores naturales de tamaño 
 mediano, en relación a todos los arreglos de flores naturales vendidos por la 
 Tienda y cantidad de arreglos de fruta con aditivo chocolate.
 Considere arreglo de flores (nrocontrato, nombrecliente, tipo, tamaño, tipoflores) -
  (111, Jose,1,1,1) - (333,Mary,1,2,1), 
  y arreglo de frutas (nrocontrato, nombrecliente, tipo, tamaño, aditivo) 
  - (222,Luis,2,2,1) - (444,Marcos, 2,1,1) - (555,Mery,2,3,2)*/

import Cl_ArregloFlores from "./Cl_ArregloFlores.js";
import Cl_ArregloFrutas from "./Cl_ArregloFrutas.js";
import Cl_Tienda from "./Cl_Tienda.js";

let arregloflores = new Cl_ArregloFlores(111, "Jose", 1, 1, 1);
let arregloflores2= new Cl_ArregloFlores(333, "Mary", 1, 2, 1);
let arreglofrutas = new Cl_ArregloFrutas(222, "Luis", 2, 2, 1);
let arreglofrutas2= new Cl_ArregloFrutas(444, "Marcos", 2, 1, 1);
let arreglofrutas3= new Cl_ArregloFrutas(555, "Mery", 2, 3, 2);
let tienda = new Cl_Tienda();
tienda.procesarArreglo(arregloflores);
tienda.procesarArreglo(arreglofrutas);
tienda.procesarArreglo(arreglofrutas2);
tienda.procesarArreglo(arreglofrutas3);
tienda.procesarArreglo(arregloflores2);

let salida=document.getElementById("Salida");

let mostrarArreglo = (arreglo) => {
    return `
      <tr>
          <td>${arreglo.nrocontrato}</td>
          <td>${arreglo.nombre}</td>
  
          <td>${arreglo.convertirStringTipoFlores()}</td>
          <td>$${arreglo. montoPagar()}</td>
      </tr>
      `;
  };
  
  salida.innerHTML = `
  <table>
      <tr>
          <th>Contrato</th>
          <th>Nombre</th>
          <th>Tamaño</th>
          <th>Tipo de arreglo</th>
          <th>A pagar</th>
      </tr>
      ${mostrarArreglo(arregloflores)}
      ${mostrarArreglo(arregloflores2)}
      ${mostrarArreglo(arreglofrutas)}
      ${mostrarArreglo(arreglofrutas2)}
      ${mostrarArreglo(arreglofrutas3)}
      
  </table>
  <br>Monto total vendido: $${tienda.devolverMonto().toFixed(2)}
  <br>Cantidad de arreglos de flores naturales vendidos: ${tienda.devolvercantflores()}
   <br>Cantidad de arreglos de fruta con aditivo chocolate: ${tienda.devolvercantfrutas()}
  `;