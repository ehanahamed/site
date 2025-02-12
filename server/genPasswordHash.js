import prompt from "prompt";
import bcrypt, { hash } from "bcrypt";

prompt.message = "";
prompt.start()
prompt.get(
    {
        properties: {
            password: {
                hidden: true,
                replace: "*"
            }
        }
    },
    function (error, result) {
        if (error) {
            console.error(error);
            process.exit(1);
        }
        bcrypt.hash(result.password, 10).then(function (hashedPassword) {
            console.log("\x1b[32mhashed password: \x1b[0m" + hashedPassword);
        });
    }
);
