const orange = {
	value: 2,
};

const apple = {
	value: 1.5,
};

function mapArray(array, thisArg) {
	return array.map(function (item) {
		return item * this.value;  // com this
	}, thisArg);
}

const nums = [1, 2, 3, 4, 5];

console.log('this -> apple', mapArray(nums, apple)); 

console.log('this -> orange', mapArray(nums, orange));