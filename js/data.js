const pcComponents = [
    {id: 1,name: "RAM"},
    {id: 2,name: "SSD"},
    {id: 3,name: "HDD"},
    {id: 4,name: "CPU"},
    {id: 5,name: "Placa Madre"},
    {id: 6,name: "Mouse"},
    {id: 7,name: "Teclado"},
    {id: 8,name: "Monitor"},
    {id: 9,name: "Gabinete"}
];
const glosario = [
    {id: 1,word: "ASCII", desc: "Asigna una representación numérica para cada carácter, como 'a' o 'b'."},
    {id: 2,word: "Algoritmo", desc: "Debe ser general, soportar la mayoría de las variantes que se puedan presentar en la definición del problema."},
    {id: 3,word: "Codificación", desc: "Operación de escribir la solución del problema , en una serie de instrucciones detalladas."},
    {id: 4,word: "Comentarios", desc: "Pueden aparecer en cualquier parte del programa."},
    {id: 5,word: "Diagrama de flujo", desc: "Es la representación gráfica de un algoritmo"},
    {id: 6,word: "Documentación", desc: "Es la guía o comunicación escrita es sus variadas formas, ya sea en enunciados, procedimientos, dibujos o diagramas."},
    {id: 7,word: "Función", desc: "Es una subrutina o subprograma  se presenta como un subalgoritmo que forma parte del algoritmo principal"},
    {id: 8,word: "Identificador", desc: "Es una serie de caracteres formados por letras, así mismo es el nombre que damos a todo lo que manipulamos dentro de un programa."},
    {id: 9,word: "Lenguaje de programación", desc: "Sistema de símbolos y reglas que permite la construcción de programas con los que la computadora puede operar."},
    {id: 10,word: "Mantenimiento ", desc: "Se lleva acabo después de terminado el programa, cuando se detecta que es necesario hacer algún cambio"},
    {id: 11,word: "Operadores", desc: "Son símbolos que indica al compilador que realice operaciones lógicas o matemáticas específicas."},
    {id: 12,word: "Operaciones primitivas elementales", desc: "Son acciones que se ejecutan sobre los datos para transformarlos en información."},
    {id: 13,word: "Palabras reservadas", desc: "Son palabras que tienen un significado especial para el lenguaje y no se pueden utilizar como identificadores."},
    {id: 14,word: "Programación estructurada", desc: "Método disciplinado de escribir programas que sean claros, que se demuestren que son correctos y fáciles de modificar."},
    {id: 15,word: "Prueba y Depuración", desc: "Los errores humanos dentro de la programación  son  El proceso de identificar y eliminar errores, para dar paso a una solución sin errores se le llama depuración."},
    {id: 16,word: "Pseudocódigo", desc: "Es la representación narrativa de los pasos que debe seguir un algoritmo para dar solución a un problema determinado. El pseudocódigo utiliza palabras que indican el proceso a realizar."},
    {id: 17,word: "Tipos de datos", desc: "Todos los datos tienen un tipo asociado con ellos. Un dato puede ser un simple carácter, tal como b, un valor entero tal como 35. El tipo de dato determina la naturaleza del conjunto de valores que puede tomar una variable."},
    {id: 18,word: "Variables", desc: "Una variable es una posición de memoria donde se puede almacenar una valor que se usará en el programa."},
    {id: 19,word: "API", desc: "Es la sigla en inglés de Interfaz de Programación de Aplicaciones. Esta consiste un conjunto de reglas y protocolos utilizados para construir aplicaciones de software."},
    {id: 20,word: "Argumento", desc: "También se los suele nombrar como 'arg'. Un argumento es un número, una cadena de texto o algún otro valor que sea necesario para que se ejecute un comando o una función."}
];