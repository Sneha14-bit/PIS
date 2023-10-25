const db = require("../db/db");

class User_appointment{
    getuser_appointment(){
        const sql = 'SELECT * FROM user_appointment';
        return db.query(sql);
    }
    adduser_appointment(data){
        const sql = 'INSERT INTO user_appointment set ?'
        return db.query(sql, data);
    }
}
module.exports = User_appointment