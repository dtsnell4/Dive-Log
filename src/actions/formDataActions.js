import * as types from './actionTypes';

function storeFormData(formData) {
  return {
    type: types.STORE_FORM_DATA,
    payload: formData ? formData.values : null
  }
}
export default storeFormData;
