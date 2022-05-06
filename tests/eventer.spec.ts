import 'mocha';
import { expect } from 'chai';
import { Eventer } from '../src/classes/eventer';
import { EventEmitter } from 'events';

describe('Class Eventer Tests', () => {
  it('Sending Message', (done) => {
    let socket = new EventEmitter();
    let send = new Eventer(socket);
    
    send.on('message', (msg) => {
      expect(msg).to.be.eql({'title': 'Nota roja', 'text': 'Esto es una nota roja', 'color': 'Rojo'});
      done();
    });

    socket.emit('data', '{"title": "Nota roja",');
    socket.emit('data', '"text": "Esto es una nota roja",');
    socket.emit('data', '"color": "Rojo"}');
    socket.emit('end');
  });
});