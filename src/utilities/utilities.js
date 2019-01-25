export const sortByParam = (propName) =>
  	(a, b) => a[propName] === b[propName] ? 0 : a[propName] < b[propName] ? -1 : 1

export const validateMe = (value) => {
	console.log('hel', value);
}

// export const asyncValidate = (values /*, dispatch */) => {
// 	console.log('async: ', values)
//     if ([1, 2, 3, 4].includes(values.diveNumber)) {
//       throw new Error("That dive number is taken")
//     }
// }
