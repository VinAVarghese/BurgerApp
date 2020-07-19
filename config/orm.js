var connection = require("../config/connection")

const orm = {
    selectAll: (tableInput, cb) => {
        var queryStr = `SELECT * FROM ${tableInput};`;
        connection.query(queryStr, (err, result) => {
            if (err) throw err;
            cb(result);
        })
    },

    insertOne: (table, cols, vals, cb) => {
        var queryStr = `INSERT INTO ${table} (${cols.toString()}, devoured) VALUES (${vals.toString()}, ${false})`;
        console.log(queryStr);

        connection.query(queryStr, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },

    updateOne: () => {

    }
}

module.exports = orm;