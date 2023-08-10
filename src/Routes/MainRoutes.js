import express from 'express';

import { Post } from '../Models/Post.js';

import { PostValidation } from '../validation/ValidPost.js';
import { UserValidation } from '../validation/ValidUser.js';

export { router };

const router = express.Router();

router.get('/all-post', async (req, res) => {
    // Retorna todos os posts presentes no banco de dados

    try {

        const response = await Post.find({});

        res.json({ error: false, Posts: response });

    } catch (error) {

        res.json({ error: true, message: error.message });

    }

});

router.get('/find-post/:id', async (req, res) => {
    // Retorna um post apartir do id informado pela rota

    const id = req.params.id;

    try {

        const response = await Post.findById(id);

        res.json({ error: false, Post: response });

    } catch (error) {

        res.json({ error: true, message: error.message });

    }

});

router.post('/insert-post', async (req, res) => {
    // Criação de um novo post para o blog, salvando no banco de dados e retornando todos os dados armanezados e o id do post

    const errors = PostValidation(req.body);

    if (Object.keys(errors).length > 0) {
        return res.json({ error: true, message: errors });
    }

    try {
        const body = req.body;

        const response = await new Post(body).save();

        res.json({ error: false, Post: response });

    } catch (error) {

        res.json({ error: true, message: error.message });

    }
});

router.get('/delete-post/:id', async (req, res) => {
    // Deleta um post do banco de dados apartir do id informado pela rota

    try {

        const id = req.params.id;

        const response = await Post.findByIdAndDelete(id);

        res.json({ error: false, Post: response });

    } catch (error) {

        res.json({ error: true, message: error.message })

    }
});

router.post('/update-post/:id', async (req, res) => {
    // Atualiza um post do banco de dados apartir do id informado pela rota

    try {
        const id = req.params.id;
        const body = req.body;

        const response = await Post.findByIdAndUpdate(id, body, { new: true });

        res.json({ error: false, Post: response });

    } catch (error) {

        res.json({ error: true, message: error.message });

    }

});

//USER ROUTES

router.post('/register-user', async (req, res) => {

    const errors = UserValidation(req.body);

    if (Object.keys(errors).length > 0) {
        return res.json({ error: true, message: errors });
    }

    try{

        const body = req.body;

        const response = await new User(body).save();

        res.json({ error: false, User: response });

    }catch(error){

        res.json({ error: true, message: error.message });

    }

});

router.get('/all-user', async (req, res) => {

    try{

        const response = await User.find({});

        res.json({ error: false, Users: response });

    }catch(error){

        res.json({ error: true, message: error.message });

    }
});

router.get('/find-user/:id', async (req, res) => {

    try{

        const id = req.params.id;

        const response = await User.findById(id);

        res.json({ error: false, User: response });

    }catch(error){

        res.json({ error: true, message: error.message });

    }
});