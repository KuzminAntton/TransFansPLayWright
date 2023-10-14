const fs = require('fs').promises;
const path = require('path');

class DataHelper {
    static async readJSON(relativeFilePath) {
        const absolutePath = path.join(__dirname, relativeFilePath);
        try {
            const rawData = await fs.readFile(absolutePath, 'utf-8');
            return JSON.parse(rawData);
        } catch (error) {
            console.error('Error reading the JSON file', error);
            return null;
        }
    }

    static async generateRandomGmail() {
        const chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
        let email = '';
        for (let i = 0; i < 10; i++) {
            email += chars[Math.floor(Math.random() * chars.length)];
        }
        return email + '@gmail.com';
    }
}

export default DataHelper;
