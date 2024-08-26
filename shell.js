const  {exec}  = require("child_process");
exec("npx webpack ; node cleaner.js", (error, stdout, stderr) => {
    if (error) {
        console.log(`Error when executing shell_exec.js : ${error.message}`);
        return 1
    }
    if (stderr) {
        console.log(`stderr : ${stderr.message}`);
        return 1
    }
    console.log(`Successfully executed.`);
    return 0
})