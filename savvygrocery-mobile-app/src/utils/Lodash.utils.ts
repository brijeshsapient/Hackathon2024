import {isEmpty, trim, get, merge, isNil, omit, includes} from 'lodash';

export {isEmpty, trim, get, merge, isNil, omit, includes};

export function getValue(obj: any, key: string, defaultValue: any) {
  return get(obj, key, defaultValue) || defaultValue;
}
