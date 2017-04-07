export const add = (item) => {
  return {
    type: 'addStep1',
    item
  };
};

export const del = (item) => {
    return {
        type: 'deleteStep1',
        item
    };
};