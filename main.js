//creamos una clase para las pinturas
class Pinturas {
    constructor(id,marca,color,precioPorLitro){
        this.id=id
        this.marca=marca
        this.color=color;
        this.precioPorLitro=precioPorLitro;
    }
    esMarca(id){
        return this.id==id;
    } 
    devolverColor(){
            return this.color;
    }
}

const colorete = new Pinturas(1,"Colorete",["rojo", "amarillo", "verde", "azul", "negro", "blanco", "purpura"],700)
const colorshu = new Pinturas(2,"Colorshu",["rojo", "amarillo", "verde"],850)
const dicolor = new Pinturas(3,"Dicolor",["rojo", "amarillo", "azul", "negro", "blanco", "naranja", "morado"],975)

const arrayPinturas = [colorete, colorshu, dicolor]

let totalSinIva = 0;

// aqui declaramos la funcion COMPRA DE PINTURA, donde se encuentra la seleccion de Marca, Color y de cuanto pagaraXLitros.
//esta funcion tambien tiene un parametro (num1) con la cual le ponemos un orden a las compras que va realizando
function comprarPintura(num1){

    // aqui declaramos la funcion para seleccionar la MARCA
    const selecionarMarca = ()=>{
        let marcaSeleccionada = Number(prompt(`¿Qué marca de pintura desea? Seleccione el numero \n Selecciona la letra que corresponda: \n 1 - Colorete - $${colorete.precioPorLitro} el litro IVA no incluido. \n 2 - Colorshu - $${colorshu.precioPorLitro} el litro IVA no incluido. \n 3 - Dicolor - $${dicolor.precioPorLitro} el litro IVA no incluido.`));
        //usamos .some para conseguir un valor true de marcaSeleccionada a partir de las id
        if(arrayPinturas.some(pintura =>pintura.id === marcaSeleccionada)){
            //una ves que tenemos un valor true filtramos las id para encontrar la marca que selecciono y retornamos un array nuevo de la marca seleccionada
            const marcaArraySeleccionado = arrayPinturas.filter(pintura =>pintura.id === marcaSeleccionada)
            return marcaArraySeleccionado[0];
        }else{
            alert("No contamos con esa marca");
            
            return selecionarMarca();
        }
    };
    //llamamos la función de seleccion de marca 
    let pintura = selecionarMarca();
    
    //declaramos funcion de seleccion de color
    const selecionarColor = ()=>{
        //uso un metodo para crear un array con los colores de la marca seleccionada
        let arrayColores = pintura.devolverColor();
        //uso el metodo .join() para crear un string con espacio y guion medio
        const cadenaArrayColores = arrayColores.join("  -  ");
        let colorLower = prompt(`¿Cuál color deseas?\nColores disponibles:  ` + cadenaArrayColores);
        let color = colorLower.toLocaleLowerCase();
        //esto es casi lo mismo que hice con la seleccion de marca, salvo que solo retorna un color
        if(arrayColores.some(colores =>colores === color)){
            const colorArraySeleccionado = arrayColores.filter(colores =>colores === color)
            return colorArraySeleccionado;
        }else{
            alert("No contamos con ese color");
            return selecionarColor();
        }
    };
    
    //llamamos a la funcion de seleccion de color
    const colorSeleccionado = selecionarColor();
    
    //funcion para seleccion de cantidad de litros con un if para evitar que nos den un valor NAN y que coloren un valor menor a 1 o negativo
    function litrosSeleccionados () {
        let litrosPedidos = Number(prompt(`${pintura.marca} - ${colorSeleccionado}\n¿Cuántos litros necesita?`));
            if((isNaN(litrosPedidos))){
                return litrosSeleccionados();
            }else if (litrosPedidos<1){
                return litrosSeleccionados();
            }else{
                return litrosPedidos;
        }
    };
    //llamamos a la funcion de la cantidad de litros que quiere comprar
    let litros = litrosSeleccionados()

    //funcion de lo que pagara por litro segun la marca que selecciono
    const pagaraPorLitro = ()=>{
        let precio = litros*pintura.precioPorLitro
        return precio;
    }
    //llamomos a la funcion de lo que pagara por litro
    const pagaraXLitro = pagaraPorLitro()


    totalSinIva = totalSinIva + pagaraXLitro;
    
    let compraste = `${num1} Marca: ${pintura.marca} - Color: ${colorSeleccionado} - Litros: ${litros} - Subtotal: $${pagaraXLitro}\n\nTotal: $${totalSinIva} sin IVA incluido`
    //Nuestra funcion retorna un string con todos los datos recolectados
    return compraste;
};

//Aqui declaramos una funcion donde tenemos un bucle "for", solo pueden hacer "4" pedidos
//Tambien esta funcion con un bucle "for" le da el parametro a nuestra funcion "comprarPintura"
function bucleDeCompra () {
    for(let i=1; ((i<=4) && (comprar==true)); i++){
        //aqui llamamos a nuestra funcion estrella compraPintura donde "i" es el parametro
        let estasComprando = comprarPintura(`${i}:`);
        alert(estasComprando);
        //este console.log nos va imprimiendo en consola toda la orden de nuestr@ client@
        console.log (estasComprando)
        comprar = confirm("¿Queres seguir comprando?");
        };
};

//declaramos funcion para evita dato null al pedirles su nombre.
const buenNombre = ()=>{
    let nombre = prompt("Buenas tardes. ¿Cúal es su nombre?")
    if (nombre != null){
        return nombre;
    }else {
        return buenNombre()
    }
}

// funciones del IVA.
const iva = ()=>{
    let aPagarDeIva = (totalSinIva*0.21);
    return aPagarDeIva;
}
const masIva = ()=> {
    let totalMasIva = (totalSinIva + iva());
    return totalMasIva;
}

//llamamos a la funcion para que no de un nomber
let nombre = buenNombre()
//pedimos un confirm, si nos da el cliente un true comienza la compra
let comprar = confirm(`Bienvenido a pinturerías Don Pepe estiamd@ ${nombre}.\n¿Deseas realizar una comprar?`);

//en este if converge todo
if (comprar==true){
    bucleDeCompra();
    let apagarIva = iva();
    let totalAPagarMasIva = masIva()
    if(comprar==true){
        //si el bucle llega a los "4" pedidos salta el alerta de llegaste al limite y finaliza la compra
        const finExdenteCompra = `Subtotal a pagar: $${totalSinIva}  \nIVA a pagar: $${apagarIva}  \nTOTAL: $${totalAPagarMasIva}  \n\n¡Llegaste al limite de compra ${nombre} para este pedido!  \nPara continuar comprando, realice otro pedido  \n\nEstimad@ ${nombre}. ¡GRACIAS POR SU COMPRA!`;
        alert(finExdenteCompra);
        comprasEnCarrito.innerHTML= `<p>${finExdenteCompra}</p>`;
    } else{
        //si el/la clint@ pone en cancelar al preguntarle: "¿Queres seguir comprando?" tira este alert y finaliza la compra
        const finCompra = `Subtotal a pagar: $${totalSinIva}  \nIVA a pagar: $${apagarIva}  \nTOTAL: $${totalAPagarMasIva}  \n\nEstimad@ ${nombre}.¡GRACIAS POR SU COMPRA!`;
        alert(finCompra);
        comprasEnCarrito.innerHTML= `<p>${finCompra}</p>`;
    }
}




