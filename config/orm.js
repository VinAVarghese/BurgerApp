var connection = require ("../config/connection")

const orm = {
    selectAll: (tableInput, cb) => {
        var queryStr = `SELECT * FROM ${tableInput};`;
        connection.query(queryStr, (err, result) => {
            if (err) throw err;
            cb(result);
        })
    },
    
    insertOne: () => {
        
    },
    
    updateOne: () => {
        
    }   
}

module.exports = orm;