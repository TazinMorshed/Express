const getAllUsers = (req, res) => {
  res.send("hello from getAllUsers");
};

const getOneUsers = (req, res) => {
  res.send("hello from getOneUsers");
};

const createUsers = (req, res) => {
  res.send("hello from createUsers");
};

const updateUsers = (req, res) => {
  res.send("hello from updateUsers");
};

const deleteUsers = (req, res) => {
  res.send("hello from deleteUsers");
};

const showResult = (req, res) => {
  const name = req.body.name;
  res.send(name);
};
module.exports = {
  showResult,
  getAllUsers,
  getOneUsers,
  createUsers,
  updateUsers,
  deleteUsers,
};
