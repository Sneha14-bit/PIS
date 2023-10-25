const db = require("../db/db");

class Appointment {
    getappointment() {
        const sql = 'SELECT * FROM appointment';
        return db.query(sql);
    }
    addappointment(data){
        const sql = "INSERT INTO appointment set ?"
        return db.query(sql, data)
    }
    deleteappointment(data){
        const sql = "DELETE FROM appointment WHERE id = ?"
        return db.query(sql, data)
    }
}
module.exports = Appointment