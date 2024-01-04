const cpvModel = require('../model/cpv')

exports.create = async (req, res) => {

    // check no empty field
    //

    try {
        await cpvModel.createCPV(req.body)
        return res.status(200).json({ message: `added succesfully` })

    } catch (error) {
        console.log(error)
    }


}