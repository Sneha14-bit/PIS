const User = require("../model/usersmodel")

const loginuser = async (req, res) => {
    const data = req.body
    const user = new User()
    const [checkuser] = await user.getuser_byemail(data.email)
    if (checkuser.length == 0) {
        return res.send({ message: "user not found" })
    }
    //console.log(checkuser.password, data.password)
    if (checkuser[0].password != data.password){
        return res.send({ message: "password incorrect" })
    }
        return res.send({ message: "successfully login", id: checkuser[0].id})
}
module.exports = {loginuser}
