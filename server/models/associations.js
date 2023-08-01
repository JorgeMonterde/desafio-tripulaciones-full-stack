<<<<<<< HEAD
const Users = require('./users');
/* const Accounts = require('./accounts'); */
const Buildings = require('./buildings');


Users.hasOne(Buildings, {
  foreignKey: 'user_id',
  onDelete: "CASCADE",
  onUpdate: "CASCADE"
});
Buildings.belongsTo(Users);

=======
const Clients = require('./clients');
const Buildings = require('./buildings');


Clients.hasOne(Buildings, {
  foreignKey: 'client_id',
  onDelete: "CASCADE",
  onUpdate: "CASCADE"
});
Buildings.belongsTo(Clients);

>>>>>>> 9a2f24fb3eb5f378599c9e0439ed52163d24995c
