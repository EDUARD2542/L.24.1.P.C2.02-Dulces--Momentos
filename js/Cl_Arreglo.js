export default class Cl_Arreglo{
    constructor(nrocontrato, nombre, tipo, tamano){
        this.nrocontrato = nrocontrato;
        this.nombre = nombre;
        this.tipo = tipo;
        this.tamano = tamano;
    }

    convertirStringTipoFlores(){
        switch(this.tipo){
            case 1:
                return "Flores naturales";
            case 2:
                return "Flores artificiales";
        }
    }

    precioBase(){
        if (this.tamano == 1)
            return 25;
        else if (this.tamano == 2)
            return 45;
        else
            return 80;
    }

}