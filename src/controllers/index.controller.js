const { Pool } = require('pg')

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
   /* host: 'localhost',
    user: 'postgres',
    password: 'Ru556879',
    database: 'finbalance',
    port: '5432'*/
})

const getRun = async (req, res) => {
    res.status(200).send("its ok")
}

const getDb = async (req, res) => {
    try {
        const client = await pool.connect();
        const result = await client.query('SELECT * FROM test_table');
        res.json(result.rows);
        client.release();
      } catch (err) {
        console.error(err);
        res.send("Error " + err);
      }
}

const getUsers = async (req, res) => {
   const response = await pool.query('SELECT * FROM target');
   res.status(200).json(response.rows);
};

const getUsersById = async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await pool.query('SELECT * FROM target WHERE id = ($1)', [id]);
    res.json(response.rows);
 };

const createUser = async (req, res) => {
   const {targetType,targetDescription,targetValue} = req.body;
   const response = await pool.query('INSERT INTO target (targetType,targetDescription,targetValue) VALUES($1,$2,$3)', [targetType, targetDescription, targetValue]);
   res.json({
       message: 'Objetivo salvo com sucesso',
       body: {
           user: {targetType, targetDescription, targetValue}
       }
   })
};

const updateUser = async (req, res) => {
    const id = parseInt(req.params.id);
    const {targetType,targetDescription,targetValue} = req.body;
    const response = await pool.query('UPDATE target SET targettype = $1, targetdescription = $2, targetvalue = $3 WHERE id = $4', [
        targetType,
        targetDescription,
        targetValue,
        id
    ]);
    res.json({
        message: 'Objetivo alterado com sucesso',
        body: {
            user: {targetType, targetDescription, targetValue}
        }
    })
};

const deleteUser = async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await pool.query('DELETE FROM target WHERE id = ($1)', [id]);
    res.json({
        message: "Objetivo deletado com sucesso!"
    });
}

module.exports = {
    getUsers,
    createUser,
    getUsersById,
    deleteUser,
    updateUser,
    getRun,
    getDb
}