export const sortByParam = (propName) => 
  	(a, b) => {
  		const ax = (typeof a[propName] === "string") ? a[propName].toString().toLowerCase() : a[propName];
  		const bx = (typeof b[propName] === "string") ? b[propName].toString().toLowerCase() : b[propName];
	  	return ax === bx ? 0 : ax < bx ? 1 : -1;
	}
