import 'mocha';
import {expect} from 'chai';
import {add} from '../src/index'

describe("Suma de dos numeros", () => {
  it("2 + 3 = 5", () => {
    expect(add(2, 3)).to.be.eql(5);
  });
});