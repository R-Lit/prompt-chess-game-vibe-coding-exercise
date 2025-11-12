const fs = require('fs');
const path = require('path');

// Read CSV to get player names
const csv = fs.readFileSync('data/final_standings.csv', 'utf-8');
const lines = csv.trim().split('\n');
const players = [];

for (let i = 1; i < lines.length; i++) {
    if (lines[i].trim()) {
        const parts = lines[i].split(',');
        if (parts[1]) {
            players.push(parts[1].trim());
        }
    }
}

// Read YAML files
const yamlDir = 'data/prompt_collection';
const yamlFiles = fs.readdirSync(yamlDir).filter(f => f.endsWith('.yml'));

// Create mapping
const mapping = {};

players.forEach(player => {
    const lowerPlayer = player.toLowerCase();
    const matchingFile = yamlFiles.find(file => {
        const lowerFile = file.toLowerCase();
        return lowerFile.startsWith(lowerPlayer + '_') || lowerFile.startsWith(lowerPlayer);
    });

    if (matchingFile) {
        mapping[player] = `data/prompt_collection/${matchingFile}`;
    }
});

// Write mapping to JSON
fs.writeFileSync('data/player_configs.json', JSON.stringify(mapping, null, 2));
console.log('Player config mapping created successfully!');
console.log(`Mapped ${Object.keys(mapping).length} out of ${players.length} players`);
