const home = (req, res) => {
    return res.render('home/index')
}
const login = (req, res) => {
    return res.render('login/index')
}
const emergency =(req, res) => {
    return res.render('emergency/index')
}
module.exports = { home, login, emergency }