import * as net from 'net'
import { Eventer } from '../classes/eventer'; 
import { CommandRequest } from '../types/types';
import * as chalk from 'chalk';

const request_true: string = chalk.green.inverse('The request was made');

export function sendToServer(command: CommandRequest, user: string, title?: string, text?: string, color?: string) {
  const socket = net.connect({port: 60300});
  const client = new Eventer(socket);

  socket.write(JSON.stringify(command), (err)=> {
    if(err) console.log(chalk.red.inverse(`The request could not be made: ${err.message}`));
    else {
      console.log(request_true);
      socket.end();
    }
  });

  client.on('message', (msg) => {
    console.log(msg.msg);
  });
  
  client.on('error', (err) => {
    console.log(chalk.red.inverse(`The connection could not be established: ${err.message}`));
  });
}