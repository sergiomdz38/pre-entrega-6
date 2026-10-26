
class Movimiento {
    constructor(tipo, monto, fecha, descripcion) {
        this.tipo = tipo;
        this.monto = monto;
        this.fecha = fecha;
        this.descripcion = descripcion;
    }

    obtenerDetalle() {
        return "Tipo: " + this.tipo + " | Monto: $" + this.monto + " | Fecha: " + this.fecha;
    }
}


const depositoSueldo = new Movimiento("Depósito", 150000, "01/09/2025", "Acreditación de sueldo");
const extraccion = new Movimiento("Extracción", 1500, "26/10/2026", "Por cajero sucursal 2032");
const pagoServicio = new Movimiento("Pago de servicio", 500, "26/10/2026", "Pago de luz, octubre");


const movimientos = [depositoSueldo, extraccion, pagoServicio];


let opcion;

do {
    opcion = prompt(
        "CAJERO AUTOMÁTICO\n\n" +
        "1. Buscar un movimiento por tipo (find)\n" +
        "2. Ver movimientos desde un monto (filter)\n" +
        "3. Ver el detalle de todos los movimientos (map)\n" +
        "4. Ver el total de dinero movido (reduce)\n" +
        "5. Salir"
    );

    if (opcion === "1") {
        
        const tipoBuscado = prompt("¿Qué tipo buscás? (Depósito / Extracción / Pago de servicio)");
        const encontrado = movimientos.find(mov => mov.tipo === tipoBuscado);

        if (encontrado !== undefined) {
            console.log("Movimiento encontrado:");
            console.log(encontrado.obtenerDetalle());
        } else {
            console.log("No hay ningún movimiento con el tipo " + tipoBuscado);
        }

    } else if (opcion === "2") {
        
        const montoMinimo = parseInt(prompt("¿Desde qué monto querés ver? (ej: 1000)"));
        const filtrados = movimientos.filter(mov => mov.monto >= montoMinimo);

        if (filtrados.length > 0) {
            console.log("Encontré " + filtrados.length + " movimientos desde $" + montoMinimo + ":");
            for (const movimiento of filtrados) {
                console.log(movimiento.obtenerDetalle());
            }
        } else {
            console.log("No hay movimientos desde ese monto");
        }

    } else if (opcion === "3") {
       
        const detalles = movimientos.map(mov => mov.obtenerDetalle());

        console.log("Detalle de todos tus movimientos:");
        for (const detalle of detalles) {
            console.log(detalle);
        }

    } else if (opcion === "4") {
        
        const total = movimientos.reduce((acum, mov) => acum + mov.monto, 0);
        console.log("El total de dinero movido es: $" + total);

    } else if (opcion === "5") {
        console.log("Gracias por usar el cajero. ¡Hasta pronto!");

    } else {
        console.log("Opción inválida, volvé a elegir");
    }

} while (opcion !== "5");