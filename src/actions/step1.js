import { STEP1_ADD, STEP1_DELETE } from '../constants';

export const add = item => ({
  type: STEP1_ADD,
  item,
});

export const del = item => ({
  type: STEP1_DELETE,
  item,
});
