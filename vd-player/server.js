const express = require("express");
const { execSync } = require("child_process");

const app = express();

app.use(express.json());

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

app.post("/api/stream", (req, res) => {

    try {

        const youtubeUrl =
            req.body.youtubeUrl;

        const streamUrl = execSync(
            `yt-dlp -f 18 -g "${youtubeUrl}"`,
            {
                encoding: "utf8"
            }
        ).trim();

        res.json({
            ok: true,
            stream_url: streamUrl
        });

    } catch (err) {

        res.status(500).json({
            ok: false,
            erro: err.message
        });

    }

});

const PORT =
    process.env.PORT || 3000;

app.listen(PORT, () => {

    console.log(
        `Servidor iniciado na porta ${PORT}`
    );

});
