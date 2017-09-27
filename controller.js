const fs = require('fs');

class Controller {
	constructor() {
		try {
			this.userDb = JSON.parse(fs.readFileSync('db.js', 'utf8'));
		} catch (error) {
			console.log(error);
			this.userDb = {};
		}
	}
	saveUser(user) {
		this.userDb[user.id] = user;
		try {
			fs.writeFileSync('db.js', JSON.stringify(this.userDb), 'utf8');
		} catch (error) {
			console.log(error);
		}		
	}	
	loadUser(id) {
		return this.userDb[id];
	}
}

module.exports = Controller;