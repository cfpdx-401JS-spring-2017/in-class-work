function dbFactory(rootDir) {

    return {
        get(table, id, callback) {

        },
        getAll(table, callback) {

        },
        save(table, objectToSave, callback) {

        },
        update(table, objectToUpdate, callback) {
            const id = objectToUpdate._id;
            if(!id) {
                return callback(new Error('some message'));
            }
        }
    };
}

module.exports = dbFactory;