var orm = require ("../config/orm")

var burger = {

    selectAll: () =>{
        orm.selectAll()
    },
    
    insertOne: () =>{
        orm.insertOne()
    },
    
    updateOne: () =>{
        orm.updateOne()
    }
}

module.exports = burger;