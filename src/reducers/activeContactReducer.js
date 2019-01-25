export default function(state = null, action) {
	console.log(action, state)
  switch (action.type) {
    case 'CONTACT_SELECTED':
      return action.payload
    case 'STORE_FORM_DATA':
      return action.payload;
    default:
      return state;
  } 
}
