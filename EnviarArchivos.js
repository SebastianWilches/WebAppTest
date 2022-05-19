const http = require('http');

// Request: Toda la informacion que me esta pidiendo (URL, Headers, Argumentos) el WebServer
// Response: La respuesta que va a recibir el cliente
http.createServer((request, response) => {
    
    /*ENVIAR UN JSON
    response.writeHead(202, { 'Content-Type' : 'application/json' })

    const persona = {
        id: 2,
        nombre: 'Sebastian'
    }
    response.write(JSON.stringify(persona));
    */
    

    //Para enviar un archivo csv y que se descargue correctamente
    response.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    response.writeHead(200, { 'Content-Type' : 'application/csv' })

    response.write('ID, NOMBRE\n');
    response.write('1, Sebastian\n');
    response.write('2, Benji\n');
    response.write('3, Test\n');



    response.end(); //Para indicarle a node que ya acabo la respuesta

}).listen(8080);

console.log('Escuchando en el puerto 8080');