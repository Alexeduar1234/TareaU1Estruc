
interface IContenedor<T> {
    agregar(elemento: T): void;
    eliminar(): T | undefined;
    obtener(): T | undefined;
    estaVacia(): boolean;
    tamanio(): number;
}

// Comparable - retorna negativo, 0 o positivo
interface IComparable<T> {
    comparar(otro: T): number;
}

// Iterable - permite usar for...of
interface IIterable<T> {
    [Symbol.iterator](): Iterator<T>;
}

// Par de valores de tipos diferentes
type Par<A, B> = {
    primero: A;
    segundo: B;
};

