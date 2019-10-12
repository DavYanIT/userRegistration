const UsersModel = require('./usersModel');

exports.getAllUsers = async (req, res) => {
  try {
    const users = await UsersModel.find().lean().exec();
    console.log(`Get users --- Success --- users count ${users.length}`);
    res.status(200).json({ users });
  } catch (error) {
    console.log(`Get users --- Failed --- ${error}`);
    res.sendStatus(500);
  }
}

exports.getUser = async (req, res) => {
  try {
    const user = await UsersModel.findById(req.params.id).lean().exec();
    console.log(`Get user --- Success`);
    res.status(200).json({ user });
  } catch (error) {
    console.log(`Get user --- Failed --- ${error}`);
    res.sendStatus(500);
  }
}

exports.updateUser = async (req, res) => {
  try {
    const { _id } = req.body;

    await UsersModel.updateOne({ _id }, req.body).exec();
    console.log(`Update user --- Success`);
    res.sendStatus(200);
  } catch (error) {
    console.log(`Update user --- Fail --- ${error}`);
    res.sendStatus(500);
  }
}

exports.createUser = async (req, res) => {
  try {
    const user = new UsersModel(req.body);
    await user.save();
    console.log(`Create user --- Success`);
    res.sendStatus(200);
  } catch (error) {
    const errors = [];
    if (error.errors) {
      for (const key in error.errors) {
        errors.push({
          field: key,
          message: error.errors[key].message,
        });
      }
    }
    console.log(`Create user --- Fail --- ${error}`);
    res.status(500).send({ errors });
  }
}

exports.deleteUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const deleteResult = await UsersModel.deleteOne({ _id: userId }).exec();
    if (!deleteResult.n) {
      return res.sendStatus(404);
    }

    res.sendStatus(200);
  } catch (error) {
    console.log(`Delete user --- Fail --- ${error}`);
    res.sendStatus(500);
  }
}
