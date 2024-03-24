const  Compiler = require('./Compiler');
const SetCompiler = (req, res) => {
    try {
        const { code, language,input } = req.body;
        console.log(code+" "+language+" "+input);
        if (code && language&&input) { 
            Compiler(language,code, input, (err, output) => {
                if (err) {
                    return res.status(500).json({ error: err });
                }
                res.status(200).json({ output });
            });
        } else {
            res.status(400).json({ error: "All field require", status: 400, secure: true });
            return;
        }

    } catch (error) {
        res.status(500).json({ error: "Some technical issue"+error, status: 500, secure: true });
        return;

    }
}

module.exports = SetCompiler






// function SetCompiler(code, input, callback) { 
  
// }

// const userCode = `
// #include <iostream>
// using namespace std;

// int main() {
//     int num;
//     cin >> num;
//     cout << "The square of " << num << " is: " << num * num << endl;
//     return 0;
// }`;

// const userInput = '25\n'; 

// SetCompiler(userCode, userInput, (err, output) => {
//     if (err) {
//         console.error('Compilation error:', err);
//     } else {
//         console.log('Output:', output);
//     }
// });


// module.exports = SetCompiler
