const express = require("express");
const { execSync } = require("child_process");

const app = express();

app.get("/", (req, res) => {

    res.json({
        ok: true,
        ambiente: "railway"
    });

});

app.get("/python", (req, res) => {

    try {

        const resultado = execSync(
            "python3 --version",
            {
                encoding: "utf8"
            }
        );

        res.send(resultado);

    } catch (err) {

        res.status(500).send(
            err.message
        );

    }

});

app.get("/yt", (req, res) => {

    try {

        const resultado = execSync(
            "yt-dlp --version",
            {
                encoding: "utf8"
            }
        );

        res.send(resultado);

    } catch (err) {

        res.status(500).send(
            err.message
        );

    }

});

const PORT =
    process.env.PORT || 8080;

app.listen(PORT, () => {

    console.log(
        `Servidor iniciado na porta ${PORT}`
    );

});
