require('dotenv').config();
const { Router } = require('express');
const { getUser, logintUser, updateUser,  } = require('../controllers/Users');
const {User} = require('../db')

const router = Router();


router.get('/',getUser);
router.get('/:idUser', getUser)
router.post('/', logintUser );

router.put('/:idUser', updateUser);

router.get('/:userId/events', async (req, res) => {
   

    try {
         const userId = req.params.userId;
         const user = await User.findByPk(userId)
            if (!user) {
                        return res.status(404).send({ message: 'User not found' });
                    }
            const events = await user.getEvents()
            res.status(200).send(events);
    } catch (error) {
        res.status(500).send({ message: 'Error fetching events' });
    }
  });
module.exports = router