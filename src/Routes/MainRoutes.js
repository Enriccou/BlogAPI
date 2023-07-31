import express from 'express';

import { Post } from '../Models/Post.js';

export { router };

const router = express.Router();

router.get('/', (req, res) => {

    res.json({ message: 'Veja aqui todos os Posts do noss Blog' });
    // Retorna todos os posts do banco de dados

});

router.get('/Post/:id', async (req, res) => {

    const id = req.params.id;

    try{

        const response = await Post.findById(id);

        res.json({ error: false, Post: response });

    }catch(error){

        res.json({ error: true, message: error.message });
    
    }
    // Retorna um post específico do banco de dados

});

router.post('/new', async (req, res) => {
    // Cria um novo post utilizando o modelo ja setado, insere no  banco de dados e retorna o post criado
    try {
        const body = req.body;

        const response = await new Post(body).save();

        res.json({ error: false, Post: response });

    } catch (error) {

        res.json({ error: true, message: error.message });

    }

});