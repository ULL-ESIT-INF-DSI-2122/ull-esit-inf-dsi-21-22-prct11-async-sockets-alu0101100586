import 'mocha';
import { expect } from 'chai';
import { Notes } from '../src/classes/notes';
import * as chalk from 'chalk';

let note_test = new Notes('Prueba', 'Nota de prueba', 'rojo');

describe('Class Notes Tests', () => {
  it('Instance of class Notes', () => {
    expect(note_test).to.be.instanceOf(Notes);
  });

  it('Getter and Setter of Title', () => {
    note_test.setTitle('Prueba 1');
    expect(note_test.getTitle()).to.be.eql('Prueba 1');
  });

  it('Getter and Setter of Text', () => {
    note_test.setText('Nota de prueba 1');
    expect(note_test.getText()).to.be.eql('Nota de prueba 1');
  });

  it('Getter and Setter of', () => {
    note_test.setColor('amarillo');
    expect(note_test.getColor()).to.be.eql('amarillo');
  });

  it('Printable Title', () => {
    expect(note_test.printableHead()).to.be.eql(chalk.yellow('Prueba 1'));
    note_test.setColor('azul');
    expect(note_test.printableHead()).to.be.eql(chalk.blue('Prueba 1'));
    note_test.setColor('verde');
    expect(note_test.printableHead()).to.be.eql(chalk.green('Prueba 1'));
    note_test.setColor('rojo');
    expect(note_test.printableHead()).to.be.eql(chalk.red('Prueba 1'));
  });

  it('Printable Text', () => {
    expect(note_test.printableHead()).to.be.eql(chalk.red('Prueba 1'));
    note_test.setColor('azul');
    expect(note_test.printableHead()).to.be.eql(chalk.blue('Prueba 1'));
    note_test.setColor('verde');
    expect(note_test.printableHead()).to.be.eql(chalk.green('Prueba 1'));
    note_test.setColor('amarillo');
    expect(note_test.printableHead()).to.be.eql(chalk.yellow('Prueba 1'));
  });
});