const express = require('express');
const cors = require('cors');
const app = express();
const { faker } = require('@faker-js/faker');





// Autoriser les requêtes provenant de tous les domaines
app.use(cors({
  origin: 'http://localhost:3000'
}));


// Générer des données de manière aléatoire
function generateData() {
  const data = [];
  for (let i = 1; i <= 100; i++) {
    const id = i;
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const address = faker.address.streetAddress();
    const phoneNumber = faker.phone.phoneNumber();
    data.push({
      id,
      firstName,
      lastName,
      address,
      phoneNumber,
    });
  }
  return data;
}

// Endpoint pour récupérer les données aléatoires
app.get('/data', (req, res) => {
  const data = generateData();
  res.json(data);
});

// Démarrer le serveur
const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
