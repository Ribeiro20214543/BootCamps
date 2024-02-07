const getAdmins = (map) => {
	let admins = [];

	for ([key, value] of map) {
		if (value === 'ADMIN') {
			admins.push(key);
		}
	}

	return admins;
};

const userRoles = new Map();

userRoles.set('Patrick', 'SUDO');
userRoles.set('Emanuel', 'ADMIN');
userRoles.set('Lilian', 'ADMIN');
userRoles.set('Felipe', 'USER');
userRoles.set('Manu', 'USER');

console.log(getAdmins(userRoles));