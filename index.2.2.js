const fs = require('fs');
const path = require('path');
const util = require('util');

const readdir = util.promisify(fs.readdir);
const stat = util.promisify(fs.stat);

const searchDirectory = async (dir) => {
    try {
        const files = await readdir(dir);

        for (const file of files) {
            const fullPath = path.join(dir, file);
            
            try {
                const fileStat = await stat(fullPath);

                if (fileStat.isDirectory()) {
                    await searchDirectory(fullPath);
                }
                else if (path.extname(fullPath) === '.js') {
                    console.log(fullPath);
                }
            } catch (err) {
                console.error(`Error reading file status: ${fullPath}`, err);
            }
        }
    } catch (err) {
        console.error(`Error reading directory: ${dir}`, err);
    }
};

const startDir = path.join(__dirname, 'test'); 

searchDirectory(startDir);