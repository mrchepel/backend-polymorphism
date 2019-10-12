import _ from 'lodash';

class InMemoryKV {
  constructor(initial = {}) {
    this.map = initial;
  }

  set(key, value) {
    this.map = { ...this.map, [key]: value };
  }

  unset(key) {
    this.map = _.omit(this.map, key);
  }

  get(key, defaultValue = null) {
    return this.map[key] || defaultValue;
  }

  toObject() {
    return this.map;
  }
}

export default InMemoryKV;
