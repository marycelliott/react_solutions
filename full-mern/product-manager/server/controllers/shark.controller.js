const { Shark } = require("./../models/shark.model");
const User = require("./../models/user.model");

module.exports = {
  getAll: (req, res) => {
    Shark.find()
      .then((sharks) => res.json(sharks))
      .catch((err) => res.json(err));
  },
  getOne: (req, res) => {
    console.log(req.params);
    Shark.findById(req.params.id) // findOne({_id: req.params.id})
      .then((shark) => res.json(shark))
      .catch((err) => res.json(err));
  },
  create: (req, res) => {
    let _shark;
    let _id = req.body.userId;
    console.log(_id);
    Shark.create(req.body)
      .then((newShark) => {
        _shark = newShark;
        User.findOne({ _id: _id }).then((user) => {
          user.hasSharks.push(_shark);
          console.log(user);
          user.save().then((user) => res.json(user));
        });
      })
      .catch((err) => res.json(err));
  },
  update: (req, res) => {
    Shark.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })
      .then((updatedShark) => res.json(updatedShark))
      .catch((err) => res.json(err));
  },
  delete: (req, res) => {
    Shark.findByIdAndRemove(req.params.id)
      .then((deleted) => res.json(deleted))
      .catch((err) => res.json(err));
  },
  createUser: (req, res) => {
    console.log("I'M IN THE CONTROLLER");
    User.create(req.body)
      .then((newUser) => res.json(newUser))
      .catch((err) => res.json(err));
  },
};
