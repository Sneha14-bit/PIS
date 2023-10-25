const Appointment = require("../model/appointmentmodel")

const getappointment = async (req, res) => {
    const appointment = new Appointment()
    const [all_appointment] = await appointment.getappointment()
    return res.send(all_appointment)
}
const addappointment = async (req, res) => {
    const appointment = new Appointment()
    const data = req.body
    data["created_date"] = new Date()
    data["updated_date"] = new Date()
    const [wait] = await appointment.addappointment(data)
    if (wait.affectedRows) {
        return res.send({ message: "appointment added" })
    }
    else {
        return res.send({ message: "appointment not added" })
    }
}
const deleteappointment = async (req, res) => {
    const appointment = new Appointment()
    const id = req.query.id
    const [deleteappointment] = await appointment.deleteappointment(id)
    return res.send({ message: "appointment deleted" })
}
module.exports = { getappointment, addappointment, deleteappointment }
