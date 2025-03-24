import {Router} from 'express';

const userRoutes = Router();

userRoutes.get('/', (req, res) => res.send({title: 'Get all users'}));

userRoutes.get('/:id', (req, res) => res.send({title: 'Get user details'}));

userRoutes.post('/', (req, res) => res.send({title: 'Create new user'}));

userRoutes.put('/:id', (req, res) => res.send({title: 'Update user'}));

userRoutes.delete('/:id', (req, res) => res.send({title: 'Delete user'}));

export default userRoutes;

