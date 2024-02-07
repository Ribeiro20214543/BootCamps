function somaNumeros(array) {
	return array.reduce(function(previusValue, currentValue){ //PreviusValue(Valor anteiror) e currentValue (valor atual)
        console.log({previusValue});
        console.log({currentValue});
        return previusValue + currentValue;
    }, 0); //valor inicial de previusValue 
}

const array = [1, 2];

console.log(somaNumeros(array));