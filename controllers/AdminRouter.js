const express = require("express")

const adminModel = require("../Models/AdminModel")

const router = express.Router()

router.get('/view', (req, res) => {
    adminModel.viewAdmin((error,results)=>{
        res.json(results);
    })
});

router.post('/addadmin', async (req, res) => {
    try {
        let { data } = { "data": req.body };
        // let password = data.password;
        // const hashedPassword = await hashPasswordGenerator(password);
        // data.password = hashedPassword;
        adminModel.insertAdmin(data, (error, results) => {
            if (error) {
                return res.status(500).json({ message: error.message });
            }
            res.json({ status: "success", data: results });
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/login',(req,res)=>{
    const { email,password }=req.body;
    adminModel.loginAdmin(email,password,(error,admin)=>{
        if(error)
        {
            res.json({
                status:"Error"
            })
        }
        if(email !== admin.email)
        {
            res.json({
                status:"Invalid Email ID"
            })
        }
        if(password !== admin.password)
        {
            res.json({
                status:"Invalid Email ID"
            })
        }
        return res.json({status:"succes",admindata:admin})
    })
});

module.exports = router