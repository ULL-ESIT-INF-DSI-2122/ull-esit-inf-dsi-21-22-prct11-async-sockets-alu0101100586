import { Eventer } from "../classes/eventer";
import { CommandRequest } from "../types/types";
import { sendToServer } from "./send";
import * as yargs from 'yargs';

/**
 * Comando para agregar una nueva nota por terminal
 */
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    user: {
      describe: 'User owner of th new note',
      demandOption: true,
      type: 'string'
    },
    title: {
      describe: 'New Note title',
      demandOption: true,
      type: 'string',
    },
    text: {
      describe: 'New Note text',
      demandOption: true,
      type: 'string'
    },
    color: {
      describe: 'New Note Color',
      demandOption: true,
      type: 'string'
    },
  },
  handler(argv) {
    if (typeof argv.user === 'string' && typeof argv.title === 'string' && 
        typeof argv.text === 'string' && typeof argv.color === 'string') { 
      let command: CommandRequest = {type: 'add', user: argv.user, title: argv.title,
                                     text: argv.text, color: argv.color};
      sendToServer(command, argv.user, argv.title, argv.text, argv.color);
    }
  },
});

/**
 * Comando para modificar una nota por terminal
 */
yargs.command({
  command: 'modify',
  describe: 'Modify a Note',
  builder: {
    user: {
      describe: 'User owner of th new note',
      demandOption: true,
      type: 'string'
    },
    title: {
      describe: 'New Note title',
      demandOption: true,
      type: 'string',
    },
    text: {
      describe: 'New Note text',
      demandOption: true,
      type: 'string'
    },
    color: {
      describe: 'New Note Color',
      demandOption: true,
      type: 'string'
    },
  },
  handler(argv) {
    if (typeof argv.user === 'string' && typeof argv.title === 'string' && 
        typeof argv.text === 'string' && typeof argv.color === 'string') {
      let command: CommandRequest = {type: 'modify', user: argv.user, title: argv.title,
                                     text: argv.text, color: argv.color};
      sendToServer(command, argv.user, argv.title, argv.text, argv.color);
    }
  },
});

/**
 * Comando para eliminar una nota por terminal
 */
yargs.command({
  command: 'remove',
  describe: 'Remove an user note',
  builder: {
    user: {
      describe: 'User owner of th note',
      demandOption: true,
      type: 'string',
    },
    title: {
      describe: 'Note Title',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.user === 'string' && typeof argv.title === 'string') {
      let command: CommandRequest = {type: 'remove', user: argv.user, title: argv.title};
      sendToServer(command, argv.user, argv.title);
    }
  },
});

/**
 * Comando para leer una nota de un usuario parado por terminal
 */
yargs.command({
  command: 'read',
  describe: 'Print the note',
  builder: {
    user: {
      describe: 'User owner of th note',
      demandOption: true,
      type: 'string',
    },
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.user === 'string' && typeof argv.title === 'string') {
      let command: CommandRequest = {type: 'read', user: argv.user, title: argv.title};
      sendToServer(command, argv.user, argv.title);
    }
  },
});

/**
 * comando para listar las notas de un usuario pasado por terminal
 */
yargs.command({
  command: 'list',
  describe: 'List all notes titles from an user',
  builder: {
    user: {
      describe: 'User owner of the notes',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.user === 'string') {
      let command: CommandRequest = {type: 'list', user: argv.user};
      sendToServer(command, argv.user);
    }
  },
});

yargs.parse();