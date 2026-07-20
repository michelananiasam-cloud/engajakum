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
