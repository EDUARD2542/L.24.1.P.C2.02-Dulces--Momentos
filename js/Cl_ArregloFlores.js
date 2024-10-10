import Cl_Arreglo from "./Cl_Arreglo.js";

export default class Cl_ArregloFlores extends Cl_Arreglo{
    constructor(nrocontrato,nombre,tipo, tamaño, tipoflores){
        super(nrocontrato,nombre,tipo, tamaño);
        this.tipoflores=tipoflores        
    }

    descuento(){
        if(this.tipoflores==1)
            return 0;
        else
            return 0.08* this.precioBase();
    }

    montoPagar(){
        return this.precioBase() - this.descuento();
    }
}

