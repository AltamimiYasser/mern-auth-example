const router = require('express').Router();

const { listContacts, creteContact } = require('../controllers/contacts');
const auth = require('../middleware/auth');

// get all contacts
router.get('/', auth, listContacts);

// create a contact
router.post('/', auth, creteContact);

module.exports = router;
