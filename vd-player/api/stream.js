const youtubedl = require("youtube-dl-exec");

module.exports = async (req, res) => {

    try {

        const resultado = await youtubedl(
            "https://youtu.be/G1nZyOFbxkc",
            {
                getUrl: true,
                format: "18"
            }
        );

        res.json({
            ok: true,
            resultado
        });

    } catch (err) {

        res.json({
            ok: false,
            erro: err.message,
            stack: err.stack
        });

    }

};
