const db = require("../db/db");

class User {
    getusers() {
        const sql = 'SELECT * FROM users';
        return db.query(sql);
    }
    adduser(data) {
        const sql = "INSERT INTO users set ?"
        return db.query(sql, data)
    }
    updateuser(id, columns, values) {
        const Whereclause = columns.map((column) => `${column} = ?`).join(" , ")
        const sql = "UPDATE users set " + Whereclause + "  WHERE id = ?"
        return db.query(sql, [...values, id])
    }
    deleteuser(data) {
        const sql = "DELETE FROM users WHERE id = ?"
        return db.query(sql, data)
    }
    getuser_byid(id) {
        const sql = "SELECT * FROM users WHERE id = ?"
        return db.query(sql, id)
    }
    getuser_byemail(email) {
        const sql = "SELECT * FROM users WHERE email = ?"
        return db.query(sql, email)
    }
}
module.exports = User