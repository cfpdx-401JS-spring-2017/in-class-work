const mongoose = require('mongoose');

const connect = {
  db: null,

  connect(dbUri) {
    if (this.db) return Promise.reject('Already connected to db');
    return mongo.connect(dbUri)
      .then(db => this.db = db);
  },

  close() {
    if (!this.db) return Promise.resolve();
    return this.db.close()
      .then(result => {
        this.db = null;
        return result;
      });
  }
};

module.exports = connect;