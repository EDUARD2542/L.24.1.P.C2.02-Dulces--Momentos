import Cl_Arreglo from "./Cl_Arreglo.js";
export default class Cl_ArregloFrutas extends Cl_Arreglo{
    constructor(nrocontrato,nombre,tipo,tamano,aditivo){
        super(nrocontrato,nombre,tipo,tamano);
        this.aditivo=aditivo;
    }
    incremento(){
        if(this.aditivo==1)
            return 0.10*this.precioBase();
        else
            return 0.20*this.precioBase();
    }

    montoPagar(){
        return this.precioBase()+this.incremento();
    }
}