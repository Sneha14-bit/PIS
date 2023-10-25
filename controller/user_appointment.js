const User_appointment = require("../model/user_appointmentmodel")

const getuser_appointment = async (req, res) => {
    const userappointment = new User_appointment()
    const [all_userappointment] = await userappointment.getuser_appointment()
    return res.send(all_userappointment)
}
const adduser_appointement = async (req, res) => {
    const user_appointment = new User_appointment()
    const data = req.body
    data["created_date"] = new Date()
    const [wait] = await user_appointment.adduser_appointment(data)
    if (wait.affectedRows) {
        return res.send({ message: "user_appointment added" })
    }
    else {
        return res.send({ message: "user_appointment not added" })
    }
}
module.exports = { getuser_appointment, adduser_appointement }