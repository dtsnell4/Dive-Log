import * as types from './actionTypes';

function storeFormData(formData) {

	console.log(formData, types)
	debugger
  return {
    type: 'CONTACT_SELECTED',
    payload: formData
  }
}
export default storeFormData;
