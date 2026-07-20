const fs = require("fs");
const path = require("path");

module.exports = (req, res) => {

    const projeto =
        path.join(
            process.cwd(),
            "vd-player"
        );

    res.json({
        cwd: process.cwd(),
        existeProjeto: fs.existsSync(projeto),
        arquivosProjeto:
            fs.existsSync(projeto)
                ? fs.readdirSync(projeto)
                : []
    });

};
