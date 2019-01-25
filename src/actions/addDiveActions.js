import * as types from './actionTypes';
import LocalForage from 'localforage';

export const saveDive = diveData => ({
  type: types.SAVE_DIVE,
  diveData
})

// export const loadData = diveData => ({
//   type: types.LOAD_DATA,
//   diveData
// })

export function loadDataSuccess(initialData) {
  return {
    type: types.LOAD_DATA_SUCCESS,
    initialData,
  };
}

export function getNextDive(nextDiveNumber) {
  // debugger;
  return {
    type: types.GET_NEXT_DIVE,
    payload: nextDiveNumber,
  }
}

export const loadData = () => {
  // const that = this;
  return LocalForage.keys().then(function(keys) {
    function sortNumber(a,b) {
      return a - b;
    }
    keys.sort(sortNumber);
    const length = keys.length;
    const nextDive = parseInt(keys[length - 1]) + 1;
    console.log(nextDive);
    // return {nextDiveNumber: nextDive};
  }).then((response) => {
    console.log(response);
    loadDataSuccess(response);

  }).catch(function(err) {
    console.log('Cannot find last dive number :', err);
  });
};
