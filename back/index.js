const express = require('express');
const cors = require('cors');
const {PrismaClient} = require('@prisma/client');
const {hashPassword, checkPassword} = require("./utils/brcrypt");
const {generateToken} = require("./utils/jwt");

const app = express();
const port = 3000;
const prisma = new PrismaClient()

app.use(express.json());
app.use(
    cors({
        origin: "*",
        method: ["GET", "POST", "DELETE", "PATCH", "PUT"],
    })
);

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

app.get('/cabinet', async (req, res) => {
    try {
        const cabinets = await prisma.cabinet.findMany()
        cabinets ?
            res.status(200).json(cabinets) :
            res.status(404).send("Aucun cabinet trouvé")
    } catch (e) {
        console.error(e)
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

        res.status(200).send("Cabinet supprimé avec succès")
    } catch (e) {
        console.error(e)
        res.status(500).json(e)
    }
})

app.post('/animal', async (req, res) => {
    const {description, race, poids, taille, userId, cabinetId} = req.body;

    try {
        const animal = await prisma.animal.create({
            data: {
                description,
                race,
                poids,
                taille,
                userId,
                cabinetId
            }
        })
        res.status(201).json(animal)
    } catch (e) {
        console.log(e)
        res.status(500).json(e)
    }
})

app.get('/animal', async (req, res) => {
    try {
        const animaux = await prisma.animal.findMany()
        animaux ?
            res.status(200).json(animaux) :
            res.status(404).send("Aucun animal trouvé")
    } catch (e) {
        console.error(e)
        res.status(500).json(e)
    }
})

app.get('/animal/:id', async (req, res) => {
    const {id} = req.params;

    try {
        const animal = await prisma.animal.findUnique({
            where: {id: parseInt(id)},
        })
        animal ?
            res.status(200).json(animal) :
            res.status(404).send("Aucun animal trouvé")
    } catch (e) {
        console.error(e)
        res.status(500).json(e)
    }
})

app.put('/animal/:id', async (req, res) => {
    const {id} = req.params;

    try {
        const animal = await prisma.animal.update({
            where: {id: parseInt(id)},
            data: req.body,
        })

        res.status(200).json(animal)
    } catch (e) {
        console.error(e)
        res.status(500).json(e)
    }
})

app.delete('/animal/:id', async (req, res) => {
    const {id} = req.params;

    try {
        const animal = await prisma.animal.delete({
            where: {id: parseInt(id)}
        })

        res.status(200).send("Animal supprimé avec succès")
    } catch (e) {
        console.error(e)
        res.status(500).json(e)
    }
})