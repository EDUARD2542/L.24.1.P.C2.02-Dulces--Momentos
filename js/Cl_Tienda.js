import Cl_ArregloFlores from "./Cl_ArregloFlores.js";

export default class Cl_Tienda {
    constructor() {
        this.acummonto=0;
        this.cantfloresn=0;
        this.cantfrutasa=0;
    }

       procesarArreglo(arreglo) {
        this.acummonto+=arreglo.montoPagar();
        if(arreglo instanceof Cl_ArregloFlores){
            if (arreglo.tipoflores==1)
            this.cantfloresn++;}
        else 
           if (arreglo.aditivo==1)
                this.cantfrutasa++;
        
    }

    devolverMonto() {
        return this.acummonto;
    }

    devolvercantflores() {
        return this.cantfloresn;
    }

    devolvercantfrutas() {
        return this.cantfrutasa;
    }
}