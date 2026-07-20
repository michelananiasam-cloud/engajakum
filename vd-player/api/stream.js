const youtubedl = require("youtube-dl-exec");

module.exports = async (req, res) => {

    try {

        res.json({
            ok: true,
            carregou: true,
            tipo: typeof youtubedl
        });

    } catch (err) {

        res.json({
            ok: false,
            erro: err.message
        });

    }

};
