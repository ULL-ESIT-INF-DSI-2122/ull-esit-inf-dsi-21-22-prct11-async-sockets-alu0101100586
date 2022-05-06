import { EventEmitter } from 'events';

/**
 * Clase que hereda de la clase EventEmitter, recibir los mensajes entre cliente y servidor
 */
export class Eventer extends EventEmitter {
  /**
   * Constructor de la clase Eventer
   * @param connexion 
   */
  constructor(connexion: EventEmitter) {
    super();

    let data = '';
    connexion.on('data', (item) => {
      data += item;
    });
    
    connexion.on('end', () => {
      const msg = JSON.parse(data.toString());
      this.emit('message', msg);
    });
  }
}