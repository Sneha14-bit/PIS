const User = require("../model/usersmodel")

const getusers = async (req, res) => {
    //new instance for User class
    const user = new User()
    const [all_users] = await user.getusers()
    return res.send(all_users)
}
const adduser = async (req, res) => {
    const user = new User()
    const data = req.body
    data["status"] = 1
    data["created_date"] = new Date()
    data["updated_date"] = new Date()
    const [wait] = await user.adduser(data)
    if (wait.affectedRows) {
        return res.send({ message: "user added" })
    }
    else {
        return res.send({ message: "user not added" })
    }
}
const getuser_byid = async (req, res) => {
    const user = new User()
    const id = req.query.id
    const [getuser] = await user.getuser_byid(id)
    return res.send({ user: getuser })
}
const deleteuser = async (req, res) => {
    const user = new User()
    const id = req.query.id
    const [deleteuser] = await user.deleteuser(id)
    return res.send({ message: "user deleted" })
}
const updateuser = async (req, res) => {
    const user = new User()
    const id = req.query.id
    const data = req.body
    const columns = Object.keys(data)
    const values = Object.values(data)
    const [updateuser] = await user.updateuser(id, columns, values)
    return res.send({ message: "user updated" })
}
const registeruser = async (req, res) => {
    const data = req.body
    const user = new User()
    const userdata = {
        name: data.userName,
        mobile_number: data.userNumber,
        email: "not updated",
        gender: data.userGender,
        password: data.password,
        user_type: "patient"
    }
    userdata["status"] = 1
    userdata["created_date"] = new Date()
    userdata["updated_date"] = new Date()
    const [wait] = await user.adduser(userdata)
    if (wait.affectedRows) {
        return res.send({ message: "user registered" })
    }
    else {
        return res.send({ message: "user not registered" })
    }
}
module.exports = { getusers, adduser, getuser_byid, deleteuser, updateuser, registeruser }
