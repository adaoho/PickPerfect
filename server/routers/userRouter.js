const UserStatic = require("../controllers/userStatic");
const router = require("express").Router();

router.post("/login", UserStatic.userLogin);
router.post("/register", UserStatic.userRegister);
router.post("/google-login", UserStatic.userGoogleLogin);
router.post("/github-login", UserStatic.userGithubLogin);
router.post("/facebook-login", UserStatic.userFacebookLogin);

module.exports = router;
