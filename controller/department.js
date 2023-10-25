const Department = require("../model/departmentmodel")

const getdepartment = async (req, res) => {
    //new instance of Department class
    const department = new Department()
    const [all_department] = await department.getdepartment()
    return res.send(all_department)
}
const adddepartment = async (req, res) => {
    const department = new Department()
    const data = req.body
    data["created_date"] = new Date()
    data["updated_date"] = new Date()
    const [wait] = await department.adddepartment(data)
    if (wait.affectedRows) {
        return res.send({ message: "department added" })
    }
    else {
        return res.send({ message: "department not added" })
    }
}
const deletedepartment = async (req, res) => {
    const department = new Department()
    const id = req.query.id
    const [deletedepartment] = await department.deletedepartment(id)
    return res.send({ message: "department deleted" })
}
module.exports = { getdepartment, adddepartment, deletedepartment }