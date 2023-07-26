const Users = require('./users');
/* const Accounts = require('./accounts'); */
const Buildings = require('./buildings');


Users.hasOne(Buildings, {
  foreignKey: 'user_id',
  onDelete: "CASCADE",
  onUpdate: "CASCADE"
});
Buildings.belongsTo(Users);

