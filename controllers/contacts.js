const Contact = require('../models/Contact');

// get all contacts
exports.listContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (ere) {
    console.error(err);
    res.status(500).json({ error: [{ msg: 'Server error' }] });
  }
};

// create a contact
exports.creteContact = async (req, res) => {
  const { name, phoneNumber } = req.body;
  try {
    // create contact
    const newContact = new Contact({ name, phoneNumber });

    // save it and return it back
    const savedContact = await newContact.save();

    res.json(savedContact);
  } catch (err) {
    console.error(err);
    res.status(500).json({ errors: [{ msg: 'Server error' }] });
  }
};
