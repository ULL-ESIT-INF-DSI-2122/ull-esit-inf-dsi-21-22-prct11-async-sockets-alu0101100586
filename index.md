# DESARROLLO DE SISTEMAS INFORMATICOS
## PRÁCTICA 11
### JONAY ESTÉVEZ DÍAZ
  
## Class Notes y Class Gestor  
  
Como se puede apreciar, se ha utilizado el código que se implementó en una de las prácticas anteriores. El código no ha sufrido cambios muy grandes, pues lo qyue se realizó en ambas clasesfue cambiar los métodos que devolvían `void` a que devuelvan `string` de esta manera cambiamos los `console.log()` por cadenas que son devueltas por los métodos que han sufrido este cambio.  
  
- Código de la clase [Notes](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct11-async-sockets-alu0101100586/blob/main/src/classes/notes.ts)
- Código de la clase [Gestor](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct11-async-sockets-alu0101100586/blob/main/src/classes/gestor.ts)
- Pruebas de la clase [Notes](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct11-async-sockets-alu0101100586/blob/main/tests/notes.spec.ts)
  
## Class Eventer  
  
La clase `Eventer` que hereda de `EventEmitter`, se utiliza para recibir un mensaje por partes, para juntarlo en un único mensaje, para liego emitirlo una vez se envia la señal `end`.

- Código de la clase [Eventer](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct11-async-sockets-alu0101100586/blob/main/src/classes/eventer.ts)
- Pruebas de la clase [Eventer](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct11-async-sockets-alu0101100586/blob/main/tests/eventer.spec.ts)
  
## Types  
  
Se define `CommandRequest` y `ResponseType`, que definen los tipos que vamos a utilizar para definir los mensajes que se van a enviar entre el servidor y el cliente.  
  
`CommandRequest` representa una petición de solicitud del cliente, el paramtero `type` repesenta los tipos de comandos que tiene el cliente. `user` representa el nombre de usuario, y luego tendremos tres más que son optativos, que representan cada una de las partes de una nota `title`, `text` y `color`.  
  
 `ResponsiveType` representa una respuesta del servidor. `msg` representa el código de la respuesta.  
 
 - Código del fichero [Types](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct11-async-sockets-alu0101100586/blob/main/src/types/types.ts)
   
 ## Client  
   
 El fichero `client.ts` está compuesto únicamente por los yargs, es decir, se hace la gestión de parámetros en este fichero. Desde los handler se llama a la función `sendToServer`, pasándole los parámetros que necesita para llevar a cabo el comando seleccionado. Desde esta función se inicia la conección mediante un `net.connect` al puerto `60300`, y se guarda el socket en la constante `socket`. Se crea el objeto que se va a enviar y se guarda en la variable `command`. A través del socket se hace un `write`, para enviar el objeto que hemos construido previamente, y se indica con un evento `end` cuando se ha acabado de enviar el mensaje. Para recibir los datos tenemos la clase `Eventer`, ya la que se le pasa el socket creado. Esta clase se encargará de escuchar a través de este socket, y almacenar la información que se envie a través del socket. Una vez recibido el evento end que provenga del servidor, se emite un evento message. Este evento es recogido desde la función `sendToServer` e imprime el contenido que recibe del servidor.  
  
## Server
  
Este server escucha en el puerto 60300, y recibe el socket `connexion`. Cuando se emiten datos a través de este socket, se emite un evento `data`. Cada vez que es emitido este evento, se van almacenando los datos. Como explicamos en el apartado anterior, el cliente emite un evento `end` cuando acabe de enviar los datos, por lo que tenemos un listener en el evento `end`. Cuando se han recibido los datos completamente, se transforman estos datos en un objeto JSON para manejarlos mejor, y se comprueba cual es el comando que se ha enviado. El switch maneja los diferentes comandos que se han mandado, y llama al método necesario de la clase `Gestor`, pasándole solamente los parámetros que necesita. Como anteriormente mencioné, se han sustituido todos los `console.log` que informaban de las operaciones por un `return`, con lo cual, guardamos ese resultado. Una vez ejecutado la operación mandada por el cliente, construimos un objeto `resp` que tendrá la salida de la operación en el atributo `msg`. Enviamos este objeto a través del socket en formato `string` y cerramos la conexión.
El cliente recibirá la salida o resultado de la operación que se ha intentado realizar en el servidor, y la mostrará por pantalla.
  
