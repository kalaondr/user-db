const Controller = require('./controller');

const controller = new Controller();

controller.saveUser({id:1, name:"User 1"});
controller.saveUser({id:2, name:"User 2"});

console.log(controller.loadUser(1));