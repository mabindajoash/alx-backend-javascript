export default class Currency {
  constructor(code, name) {
    if (code !== 'string') {
      throw new TypeError('code must be a string');
    }
    if (name !== 'string') {
      throw new TypeError('name must be a string');
    }

    this._code = code;
    this._name = name;
  }

  get name() {
    return this._name;
  }
  set name(name) {
    this._name = name;
  }

  get code() {
    return this._code;
  }
  set code(code) {
    this._code = code;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`
  }
}
