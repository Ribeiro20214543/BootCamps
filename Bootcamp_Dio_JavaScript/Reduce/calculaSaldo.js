

const list = [
	{
		value: 2,
		name: "apple",
	},
	{
		value: 30,
		name: "clothing",
	},
	{
		value: 25,
		name: "beef",
	},
];

const cash = 100;


function calculaSaldo(cash, list) {
    return list.reduce(function (previousValue, currentValue, index){
      console.log("rodada", index + 1);
      console.log({previousValue});
      console.log({currentValue});
      return previousValue - currentValue.value;
    }, cash);

}

console.log(calculaSaldo(cash, list));