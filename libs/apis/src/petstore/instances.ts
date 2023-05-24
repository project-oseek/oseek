import baseAxios from '../base';
import { Configuration } from './generated/configuration';
import { PetApi } from './generated/api';

const config = new Configuration();

// Example
export const petAPI = new PetApi(config, undefined, baseAxios);
