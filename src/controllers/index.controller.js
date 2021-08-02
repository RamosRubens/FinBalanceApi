const { Pool } = require('pg')

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
})

const getRun = async (req, res) => {
    res.status(200).send("its ok")
}

const getTargets = async (req, res) => {
   const response = await pool.query('SELECT * FROM target');
   res.status(200).json(response.rows);
};

const getTargetsById = async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await pool.query('SELECT * FROM target WHERE id = ($1)', [id]);
    res.json(response.rows);
 };

const createTarget = async (req, res) => {
   const {targetType,targetDescription,targetValue} = req.body;
   const response = await pool.query('INSERT INTO target (targetType,targetDescription,targetValue) VALUES($1,$2,$3)', [targetType, targetDescription, targetValue]);
   res.json({
       message: 'Objetivo salvo com sucesso',
       body: {
           user: {targetType, targetDescription, targetValue}
       }
   })
};

const updateTarget = async (req, res) => {
    const id = parseInt(req.params.id);
    const {targetValue} = req.body;
    const response = await pool.query('UPDATE target SET targetvalue = $1 WHERE id = $2', [
        targetValue,
        id
    ]);
    res.json({
        message: 'Objetivo alterado com sucesso'
    })
};

const deleteTarget = async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await pool.query('DELETE FROM target WHERE id = ($1)', [id]);
    res.json({
        message: "Objetivo deletado com sucesso!"
    });
}
 
 const getUsersById = async (req, res) => {
     const id = parseInt(req.params.id);
     const response = await pool.query('SELECT * FROM users WHERE id = ($1)', [id]);
     res.json(response.rows);
  };
 
 const createUser = async (req, res) => {
    const {uuid} = req.body;
    const response = await pool.query('INSERT INTO users (uuid) VALUES($1)', [uuid]);
    res.json({
        message: 'Objetivo salvo com sucesso',
        body: {
            user: {uuid}
        }
    })
 };

module.exports = {
    getTargets,    
    createTarget,
    getTargetsById,
    deleteTarget,
    updateTarget,
    getUsersById,
    createUser,
    getRun
}