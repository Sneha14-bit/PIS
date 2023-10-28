const Report = require("../model/reportsmodel")

const getreports = async (req, res) => {
    const report = new Report()
    const [all_reports] = await report.getreports()
    return res.send(all_reports)
}
const addreports = async (req, res) => {
    const report = new Report()
    const data = req.body
    data["created_date"] = new Date()
    data["updated_date"] = new Date()
    const [wait] = await report.addreports(data)
    if (wait.affectedRows) {
        return res.send({ message: "reports added" })
    }
    else {
        return res.send({ message: "reports not added" })
    }

}
// delete report
const deletereports = async (req, res) => {
    const reports = new Report()
    const id = req.query.id
    const [deletereports] = await reports.deletereports(id)
    return res.send({ message: "reports deleted" })
}
module.exports = { getreports, addreports, deletereports }