const express = require('express');
const router = express.Router();
// Add a simple route to handle the root URL ("/")
router.get('/', (req, res) => {
    res.send('Server is up and running.');
  });

module.exports=router;