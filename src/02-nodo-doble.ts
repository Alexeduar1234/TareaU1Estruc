
interface IComparable<T> {
    comparar(otro: T): number;
}

// T extends IComparable<T> para poder comparar los datos del nodo
class NodoDoblementeEnlazado<T extends IComparable<T>>
    implements IComparable<NodoDoblementeEnlazado<T>> {

    dato: T;
    siguiente: NodoDoblementeEnlazado<T> | null;
    anterior: NodoDoblementeEnlazado<T> | null;

    // siguiente y anterior inician en null
    constructor(dato: T) {
        this.dato = dato;
        this.siguiente = null;
        this.anterior = null;
    }

    // Representacion del nodo
    toString(): string {
        return `Nodo(${String(this.dato)})`;
    }

    // Compara usando el dato interno - O(1)
    comparar(otro: NodoDoblementeEnlazado<T>): number {
        return this.dato.comparar(otro.dato);
    }
}

