function filtraPares(arr) {
	if (!arr || !arr.length) return;

	const filteredArr = arr.filter((item) => item % 2 === 0);// resto igual a 0 para encontrar pares
	return filteredArr;
}

console.log(filtraPares([1, 2, 3, 4]));