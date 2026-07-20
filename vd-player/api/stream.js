const fs = require("fs");

module.exports = (req, res) => {

    res.json({
        ok: true,
        arquivos: fs.readdirSync(process.cwd())
    });

};
