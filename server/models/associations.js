const Clients = require('./clients');
const Buildings = require('./buildings');


Clients.hasOne(Buildings, {
  foreignKey: 'client_id',
  onDelete: "CASCADE",
  onUpdate: "CASCADE"
});
Buildings.belongsTo(Clients);

