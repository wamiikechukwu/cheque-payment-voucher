const db = require('../db')

// get
const getCPV = (id, bank, email, depart, firstname, lastname, dateRange,) => {

}
// create
// TODO 
exports.createCPV = (data) => {
    const result = db.query(`INSERT INTO cpv (payee_name, payee_addr, cheque_no, amount, bank, code, account_name, cpv_description, amount_total, cheque_type, cheque_date,  created_at, modified_at ) VALUES(?,?,?,?,?,?,?,?,?,?,current_time(), current_time(), current_time() )`,
        [data.payee_name, data.payee_addr, data.cheque_no, data.amount, data.bank, data.code, data.account_name, data.description, data.amount_total, data.chequ_type,  data.cheque_date, data.created_at, data.modified_at])
    return result;
}
// update
// delete