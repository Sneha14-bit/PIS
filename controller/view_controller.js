const home = (req, res) => {
    return res.render('home/index')
}
const login = (req, res) => {
    return res.render('login/index')
}
module.exports = { home, login }