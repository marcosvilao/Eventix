const { User } = require("../db");
const fs = require("fs");
// const { isAdmin } = require('../middleware');

const getUser = async (req, res, next) => {
  const { idUser } = req.params;
  const { fullname } = req.query;
  const { dinamix } = req.query;

  try {
    if (idUser) {
      const userDetail = await User.findByPk(idUser, {
        include: [
          {
            model: Post,
            attributes: { exclude: ["userId"] },
          },
          {
            model: Comment,
            attributes: { exclude: ["userId"] },
          },
          {
            model: Like,
            attributes: { exclude: ["userId"] },
            include: [Post, Comment]
          },
          {
            model: Report,
          },
          {
            model: Favorite,
          },
        ],
      });
      return userDetail
        ? res.status(200).send(userDetail)
        : res.status(404).send("user not found");
    }
    const response = await User.findAll();

    if (fullname) {
      let userName = response.filter((el) =>
        el.full_name.toLowerCase().includes(fullname.toLowerCase())
      );
      return userName.length
        ? res.send(userName)
        : res.status(400).send("User not found");
    }
    res.json(response);
  } catch (error) {
    next(error);
  }
};

const logintUser = async (req, res, next) => {
  const { nickname, picture, name, email } = req.body;

  let arrayName = name.split(" ");
  const firstName = arrayName.shift();
  const lastName = arrayName.join(" ");

  try {
    const [user, boolean] = await User.findOrCreate({
      where: { email: email },
      defaults: {
        nick: nickname,
        image: picture,
        first_name: firstName,
        last_name: lastName,
        isAdmin: false
      },
    });

    res.json({
      user: user,
      isCreated: boolean,
    });
  } catch (error) {
    next(error)
  }
};


const updateUser = (req, res, next) => {
  const { idUser } = req.params;
  const { first_name, last_name, about, role, twitter, github, portfolio, linkedin } =
    req.body;

  return User.update(
    {
      first_name,
      last_name,
      about,
      role,
      twitter,
      github,
      portfolio,
      linkedin
    },
    {
      where: { id: idUser },
      raw: true,
    }
  )
    .then((updatedUser) => res.json({ Update: Boolean(parseInt(updatedUser)) }))
    .catch((error) => next(error));
};

const adminBanUser = async (req, res, next) => {
  const { idUser } = req.params
  try {
    const user = await User.findByPk(idUser);
    if (user.isAdmin) return res.status(403).send("No es posible banear al usuario Admin")
    const options = user.isBanned ? false : true

    await User.update({
      isBanned: options
    },
      {
        where: { id: idUser },
        raw: true
      });

    const response = options ? "Banned user" : "Unbanned user"
    console.log(user.isBanned)
    res.send(response)
  } catch (error) {
    next(error)
  }
};

const bulkCreateUsers = async () => {
  try {
    let data = fs.readFileSync(__dirname + "/../json/users.json", "utf8");
    data = JSON.parse(data);

    for (let i = 0; i < data.length; i++) {
      let arrayName = data[i].name.split(" ");
      const firstName = arrayName.shift();
      const lastName = arrayName.join(" ");

      const [admins, boolean] = await User.findOrCreate({
        where: { email: data[i].email },
        defaults: {
          nick: data[i].nickname,
          first_name: firstName,
          last_name: lastName,
          email: data[i].email,
          image: data[i].picture,
          isAdmin: data[i].isAdmin
        },
      });
      // console.log(admins)
    }
  } catch (error) {
    console.log({ errorMsg: error.message });
  }
};

module.exports = {
  getUser,
  logintUser,
  updateUser,
  adminBanUser,
  bulkCreateUsers
};
