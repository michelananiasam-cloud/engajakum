const { execSync } = require("child_process");

module.exports = (req, res) => {

    try {

        const resultado = execSync(
            "node --version",
            {
                encoding: "utf8"
            }
        );

        res.json({
            ok: true,
            resultado
        });

    } catch (err) {

        res.json({
            ok: false,
            erro: err.message
        });

    }

};
