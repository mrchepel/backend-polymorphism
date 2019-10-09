import fs from 'fs';
import path from 'path';
import _ from 'lodash';

export default class DatabaseConfigLoader {
  constructor(pathToConfigs) {
    this.pathToConfigs = pathToConfigs;
  }

  load(env) {
    const filePath = path.join(this.pathToConfigs, `database.${env}.json`);
    const raw = fs.readFileSync(filePath);
    const config = JSON.parse(raw);
    if (!config.extend) {
      return config;
    }
    const newEnv = config.extend;
    const configWithoutExtend = _.omit(config, 'extend');
    return { ...this.load(newEnv), ...configWithoutExtend };
  }
}
