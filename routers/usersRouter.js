const router = require('express').Router();
//const data = require("../data.js");
const user = require("../data/data-model.js");


router.get("/", (req, res) => {
    user.findUser().then(users => {
        res.status(200).json(users);
    }).catch(error=>{
        next({statusCode: 500, errorMessage: "kullanıcılar getirilemedi",error});
    })
});

router.get("/:id", (req, res, next) => {
    const { id } = req.params;
  
    user.findUserById(id)
      .then((user) => {
        if (user) {
          res.status(200).json(user);
        } else {
          next({
            statusCode: 400,
            erorMessage: "Kullanıcı bulunamadi.",
          });
        }
      })
      .catch((error) => {
        next({
          statusCode: 500,
          errorMessage: "Kullanıcı bulunurken hata olustu.",
          error,
        });
      });
  });


router.post("/", (req, res,next) => {
    const newUser = req.body;
    if(!newUser.name){
        next({statusCode: 400, errorMessage: "kullanıcı eklemek için isim girilmeli."});
    }
    else{
        user.addUser(newUser).then(added => {
            res.status(201).json(added);
        }).catch(error=>{
            next({statusCode: 500, errorMessage: "kullanıcı eklenemedi", error});
        });
    }
});

router.patch("/:id", (req, res, next) => {
    const { id } = req.params;
    const updatedUser = req.body;
  
    if (!updatedUser.name) {
      next({
        statusCode: 400,
        errorMessage: "Kullanıcı ismi bos olamaz.",
      });
    } else {
      user.updateUser(updatedUser, id)
        .then((updated) => {
          res.status(200).json(updated);
        })
        .catch((error) => {
          next({
            statusCode: 500,
            errorMessage: "Kullanıcı duzenlenirken hata olustu.",
            error,
          });
        });
    }
  });


router.delete("/:id", (req, res, next) => {
    const { id } = req.params;
  
    user.findUserById(id)
      .then((silinecekKullanıcı) => {
        user.deleteUser(id)
          .then((deleted) => {
            if (deleted) {
              res.status(204).end();
            }
            next({
              statusCode: 400,
              errorMessage: "Silmeye calistiginiz kullanıcı sistemde mevcut degil.",
            });
          })
          .catch((error) => {
            next({
              statusCode: 500,
              errorMessage: "kullanıcı silinirken hata olustu.",
              error,
            });
          });
      })
      .catch((error) => {
        next({
          statusCode: 500,
          errorMessage: "kullanıcı bulunurken hata olustu.",
          error,
        });
      });
  });


module.exports = router;