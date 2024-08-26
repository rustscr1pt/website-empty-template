var fs = require('fs');
var os = require('os');

// Form the path to the folder depending on the os platform
function form_the_path(os) {
    if (os === "win32") {
        return 'dist\\js\\scripts'
    }
    return "dist/js/scripts"
}

// Form a path for removing the file/folder depending on the os platform
function form_path_for_removing(os, directory, path) {
    if (os === "win32") {
        return `${directory}\\${path}`
    }
    else {
        return `${directory}/${path}`
    }
}

// Get current platform for passing it as an argument to functions
const current_platform = os.platform();
// Set a standalone path for actions
const standalone_path = form_the_path(current_platform);

const inner_directory = fs.readdirSync(standalone_path);
console.log(`${inner_directory.length} file-s detected : \n${inner_directory}`);
inner_directory.forEach((path) => {
    if (!path.includes("bundled")) {
        console.log(`${path} would be removed.`)
        fs.rmSync(form_path_for_removing(current_platform, standalone_path, path), {recursive: true})
    }
})

