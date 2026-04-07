const express = require('express');
const mysql = require('mysql2/promise.js');
const { userInfo } = require('node:os');

const app = express();
const PORT = 3000;
app.use(express.json()); 

//CONFIG DA CONEXAO DO BANCO DE DADOS
const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'todo_app'
}

app.post('/tasks', async(req, res)=>{

    try {
        const conection = await mysql.createConnection(dbConfig)
        const { description } = req.body;
        const [result] = await conection.execute(
            'INSERT INTO taskes (description) VALUES (?)',
            [description]
        )

        await conection.end();


    } catch (error) {
        console.error('Erro ao criar tarefa: ', error);
        res.status(500).json( {error: 'Erro interno do servidor'});
    }
});





app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
});
