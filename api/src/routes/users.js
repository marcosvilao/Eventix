require('dotenv').config();
const { Router } = require('express');
const { getUser, logintUser, updateUser,  } = require('../controllers/Users');

const router = Router();


router.get('/',getUser);
router.get('/:idUser', getUser)
router.post('/', logintUser );

router.put('/:idUser', updateUser);

module.exports = router