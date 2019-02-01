export const sortByParam = (propName) => 
  	(a, b) => {
  		const ax = (typeof a[propName] === "string") ? a[propName].toString().toLowerCase() : a[propName];
  		const bx = (typeof b[propName] === "string") ? b[propName].toString().toLowerCase() : b[propName];
	  	return ax === bx ? 0 : ax < bx ? 1 : -1;
	}

export const validateMe = (value) => {
	console.log('hel', value);
}


// export const asyncValidate = (values /*, dispatch */) => {
// 	console.log('async: ', values)
//     if ([1, 2, 3, 4].includes(values.diveNumber)) {
//       throw new Error("That dive number is taken")
//     }
// }
