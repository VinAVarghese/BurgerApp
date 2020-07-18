var orm = require ("../config/orm")

var burger = {

    selectAll: (cb) => {
        orm.selectAll("burgers", res => {
            cb(res);
        });
    },
    
    insertOne: () =>{
        orm.insertOne()
    },
    
    updateOne: () =>{
        orm.updateOne()
    }
}

module.exports = burger;