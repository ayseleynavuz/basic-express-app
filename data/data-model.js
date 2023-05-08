const db = require("./db-config");

module.exports = {
  findUser,
  findUserById,
  addUser,
  updateUser,
  deleteUser
};


function findUser() {
  return db("users");
}


function findUserById(id) {
    return db("users").where({ id }).first();
}
  

function addUser(newUser) {
    return db("users").insert(newUser, "id").then(([id]) => {
        return db("users").where({ id }).first();
    });
}


function updateUser(updatedUser, id) {
    return db("users")
      .update(updatedUser)
      .where({ id })
      .then((updated) => {
        if (updated) {
          return db("users").where({ id }).first();
        }
      });
  }

function deleteUser(id) {
    return db("users").del().where({ id });
}



