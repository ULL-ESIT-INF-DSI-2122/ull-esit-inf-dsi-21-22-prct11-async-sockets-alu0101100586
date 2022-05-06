import { Eventer } from '../classes/eventer';
import { ResponseType } from '../types/types';
import { Notes } from '../classes/notes';
import { Gestor } from '../classes/gestor';
import * as net from 'net';
import * as chalk from 'chalk';

const client_desconnexion: string = chalk.green.inverse('A client has disconnected');
const client_connexion: string = chalk.green.inverse('A client has connected');
const connexion_false: string = chalk.red.inverse('The connection could not be established');
const request_true: string = chalk.green.inverse('Client`s Request received');
const response: string = chalk.green.inverse('The response was sent');
const waiting: string = chalk.yellow('Waiting for a client to connect ...');

/**
 * Servidor que procesa los request del cliente que llegan como mensajes, el cual se procesa
 * y se llama la lafuncionq eu se necesite llamar. Luego el cliente es notificado con una 
 * respuesta del servidor
 */
const server = net.createServer({allowHalfOpen: true}, (connexion) => {
  console.log(client_connexion);
  const socket = new Eventer(connexion);

  socket.on('message', (msg) => {
    let gestor = new Gestor();
    console.log(request_true);
    let resp: ResponseType = {msg: '',};
    
    switch(msg.type) {
      case 'add':
        let aux01_note = new Notes(msg.title, msg.text, msg.color);
        resp.msg = gestor.add(aux01_note, msg.user);
        break;

      case 'modify':
        let aux02_note = new Notes(msg.title, msg.text, msg.color);
        resp.msg = gestor.modify(aux02_note, msg.user);
        break;

      case 'remove':
        resp.msg = gestor.remove(msg.title, msg.user);
        break;

      case 'read':
        resp.msg = gestor.read(msg.title, msg.user);
        break;

      case 'list':
        resp.msg = gestor.listHeads(msg.user);
        break;
    }

    connexion.write(JSON.stringify(resp), (err) => {
      if(err) console.log(`The response could not be sent -> ${err.message}`);
      else {
        console.log(response);
        connexion.end();
      }
    });
  });

  connexion.on('error', (err) => {
    if(err) console.log(connexion_false);
  });

  connexion.on('close', () => {
    console.log(client_desconnexion);
  });
});

server.listen(60300, () => {
  console.log(waiting);
});