const UserService = require("../services/UserService");
const utils = require("../utils/utils");

module.exports = {
    async doLogin(req, res) {
        if (req.body.hasOwnProperty('username')) {
            const userLogin = await UserService.getByUsername(req.body.username);
            const authenticated = await utils.comparePwd(req.body.password, userLogin.password);
            
            if (authenticated) {
                const token = utils.signJwt(userLogin._id);
                res.set('Authorization', `Bearer ${token}`);
                res.status(200).json({
                    user: userLogin,
                    token: token
                });;
            }else{
                res.status(400).send("Senha e/ou usuário incorretos");
            }
        } else {
            res.status(400).send("Objeto de requisição deve conter um atributo username");
        }
    },

    doLogout(req, res) {
        res.set('Authorization', `Bearer `);
        res.status(200).send();
    },
}