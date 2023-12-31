const db = require("../db/db");

class Report {
    getreports() {
        const sql = 'SELECT * FROM reports';
        return db.query(sql);
    }
    addreports(data) {
        const sql = 'INSERT INTO reports set ?';
        return db.query(sql, data);
    }
    deletereports(data){
        const sql = "DELETE FROM reports WHERE id = ?"
        return db.query(sql, data)
    }
}
module.exports = Report