export default class ALXCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    if (!Array.isArray(students) || !students.every((student) => typeof student === 'string')) {
      throw new TypeError('Not an array or array items not a string');
    }

    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set length(length) {
    this.length = length;
  }

  get length() {
    return this._length;
  }

  set name(name) {
    this._name = name;
  }

  get students() {
    return this._students;
  }

  set students(students) {
    this._students = students;
  }
}
