const express = require('express');
const {PrismaClient} = require('@prisma/client');
const {hashPassword, checkPassword} = require("./utils/brcrypt");
const {generateToken} = require("./utils/jwt");

const app = express();
const port = 3000;
const prisma = new PrismaClient()

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Serveur en écoute sur http://localhost:${port}`);
});

app.post('/register', async (req, res) => {
    const {firstName, lastName, email, password} = req.body;
    const hashedPassword = hashPassword(password)

    try {
        const user = await prisma.user.create({
            data: {
                firstName,
                lastName,
                email,
                password: hashedPassword,
            }
        })
        res.status(201).json(user)
    } catch (e) {
        res.status(500).json(e)
    }
});

app.post('/login', async (req, res) => {
    const {email, password} = req.body;

    try {
        const user = await prisma.user.findUnique({
            where: {email},
        })

        if (user && checkPassword(password, user.password)) {
            const token = await generateToken(user)
            res.status(200).json({token})
        } else {
            res.send({message: "Email ou mot de passe incorrect"});
        }
    } catch (e) {
        res.status(500).json(e)
    }
});

app.post('/cabinet', async (req, res) => {
    const {nom, adresse} = req.body;

    try {
        const cabinet = await prisma.cabinet.create({
            data: {
                nom,
                adresse
            }
        })
        res.status(201).json(cabinet)
    } catch (e) {
        res.status(500).json(e)
    }
})

app.get('/cabinet/:id', async (req, res) => {
    const {id} = req.params;

    try {
        const cabinet = await prisma.cabinet.findUnique({
            where: {id: parseInt(id)},
        })
        cabinet ?
            res.status(200).json(cabinet) :
            res.status(404).send("Aucun cabinet trouvé")
    } catch (e) {
        console.error(e)
        res.status(500).json(e)
    }
})

app.put('/cabinet/:id', async (req, res) => {
    const {id} = req.params;

    try {
        const cabinet = await prisma.cabinet.update({
            where: {id: parseInt(id)},
            data: req.body,
        })

        res.status(200).json(cabinet)
    } catch (e) {
        console.error(e)
        res.status(500).json(e)
    }
})

app.delete('/cabinet/:id', async (req, res) => {
    const {id} = req.params;

    try {
        const cabinet = await prisma.cabinet.delete({
            where: {id: parseInt(id)}
        })

        res.status(200).json(cabinet)
    } catch (e) {
        console.error(e)
        res.status(500).json(e)
    }
})