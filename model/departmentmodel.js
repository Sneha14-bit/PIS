const db = require("../db/db");

class Department{
    getdepartment(){
        const sql = 'SELECT * FROM department';
        return db.query(sql);
    }
    adddepartment(data){
        const sql = "INSERT INTO department set ?" 
        return db.query(sql, data);
    }
    deletedepartment(data){
        const sql = "DELETE FROM department WHERE id = ?"
        return db.query(sql, data)
    }
}
module.exports =  Department