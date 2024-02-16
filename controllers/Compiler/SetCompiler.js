const { exec } = require('child_process');
const SetCompiler = (req, res) => {
    try {
        const { code, language } = req.body;
        if (code && language) {
            const commandMap = {
                'python': 'python -c',
                'javascript': 'node -e',
            };
            if (!commandMap.hasOwnProperty(language)) {
                return res.status(400).send('Unsupported language');
            }
            exec(`${commandMap[language]} "${code}"`, (error, stdout, stderr) => {
                if (error) {
                    console.error(`exec error: ${error}`);
                    return res.status(500).send(stderr);
                }
                res.status(200).send(stdout);
                return;
            });

        } else {

            res.status(400).send({ error: "All field require", status: 400, secure: true });
            return;
        }

    } catch (error) {
        res.status(500).send({ error: "Some technical issue", status: 500, secure: true });
        return;

    }
}

module.exports = SetCompiler
