const { exec } = require('child_process');
const fs = require('fs');

function Compiler(language, code, input, callback) {
    code = code.toString();
    const fileName = language === 'java' ? `Main.${language}` : `temp.${language}`;
    fs.writeFile(fileName, code, (err) => {
        let languageCompilerMode = `g++  ${fileName} -o compiled_code`;
        let runCommand = `compiled_code`;
        if (String(language) === "c") {
            languageCompilerMode = `gcc  ${fileName} -o compiled_code`;
            runCommand = `compiled_code`;
        } else if (String(language) === "py") {
            languageCompilerMode = `python ${fileName}`;
        } else if (String(language) === "java") {
            languageCompilerMode = `javac ${fileName}`;
            runCommand = `java Main`;
        }
        if (err) {
            return callback(err);
        }
        if (language === "cpp" || language === "c" || language === "java") {
            const compileCommand = `${languageCompilerMode}`;
            exec(compileCommand, (error, stdout, stderr) => {
                if (error) {
                    fs.unlink(fileName, (err) => {
                        if (err) console.error(err);
                    });
                    return callback(stderr);
                }
                const childProcess = exec(runCommand, (error, stdout, stderr) => {
                    fs.unlink(fileName, (err) => {
                        if (err) console.error(err);
                    });

                    if (error) {
                        return callback(stderr);
                    }

                    callback(null, stdout);
                });

                childProcess.stdin.write(input);
                childProcess.stdin.end();
            });
        } else if (language === 'py') {
            const compileCommand = `${languageCompilerMode}`;
            const childProcess = exec(compileCommand, (error, stdout, stderr) => {
                fs.unlink(fileName, (err) => {
                    if (err) console.error(err);
                });

                if (error) {
                    return callback(stderr);
                }

                callback(null, stdout);
            });

            childProcess.stdin.write(input);
            childProcess.stdin.end();
        }
    });
}

module.exports = Compiler ;
