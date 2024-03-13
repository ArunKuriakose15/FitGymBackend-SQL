const mysql=require("mysql")

const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    database:'gymdb',
    port:3308
})

const adminModel={
    insertAdmin: (adminData, callback)=>{
        const query='INSERT INTO admin SET ?';
        pool.query(query,adminData, callback);
    },
    findAdminByEmail: (admin_email, callback)=>{
        const query='SELECT * FROM gymdb WHERE admin_email = ?';
        pool.query(query,[admin_email],callback);
    },
    viewAdmin: (callback)=>{
        const query='SELECT * FROM admin';
        pool.query(query,callback);
    },
    loginAdmin: (admin_email, admin_password, callback) => {
        const query = 'SELECT * FROM admin WHERE admin_email = ? AND admin_password = ?';
        pool.query(query, [admin_email, admin_password], callback);
    }
    
}

module.exports=adminModel;