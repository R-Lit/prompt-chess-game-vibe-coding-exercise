# Prompt Chess Tournament Rankings Website

A responsive web application for viewing and analyzing tournament results from a prompt-based chess game competition.

## Features

### 1. Dynamic Ranking
Sort the leaderboard by three different criteria:
- **Final Standing**: Original tournament ranking
- **Win Rate**: Percentage of games won
- **Mu Rating**: TrueSkill rating (μ) value

### 2. Pin Player Feature
- Click the pin icon (📍) next to any player to pin them to the top of the leaderboard
- The pinned player stays at the top regardless of sorting method
- Click the pin icon again or use the "Clear Pin" button to unpin

### 3. Visual Highlights
Players are automatically highlighted based on performance:
- **Gold highlight (🥇🥈🥉)**: Top 3 players with yellow border
- **Blue highlight**: Players with win rate ≥ 80% with cyan border
- **Green highlight**: Pinned player with green border

### 4. Player Details
Click "View Details" for any player to see:
- Complete statistics (rank, rating, wins, draws, losses)
- Model configuration (provider, model name, parameters)
- Full system prompt
- Step-wise prompt used during gameplay

## Tech Stack

- **Frontend**: Pure HTML5, CSS3, JavaScript (ES6+)
- **Data Processing**: js-yaml for parsing YAML configurations
- **Styling**: Modern CSS with gradients, animations, and responsive design
- **No build process required**: Just open index.html in a browser

## File Structure

```
├── index.html                 # Main website file
├── data/
│   ├── final_standings.csv    # Tournament standings data
│   ├── player_configs.json    # Player-to-config-file mapping
│   └── prompt_collection/     # YAML configuration files
├── generate_player_map.js     # Script to generate player_configs.json
└── WEBSITE_README.md          # This file
```

## How to Use

### Local Development

1. **Open the website**:
   ```bash
   # Simply open in a browser (requires a local web server for file loading)
   python3 -m http.server 8000
   # or
   npx serve
   ```
   Then navigate to `http://localhost:8000`

2. **Regenerate player mapping** (if YAML files change):
   ```bash
   node generate_player_map.js
   ```

### Features Guide

1. **Sorting**:
   - Use the "Sort by" dropdown to change ranking criteria
   - Rankings update instantly

2. **Pinning**:
   - Click 📍 icon to pin a player
   - Pinned player shows 📌 and stays at top
   - Use "Clear Pin" button to unpin

3. **View Details**:
   - Click "View Details" button for any player
   - Modal shows complete stats, model info, and prompts
   - Click X or outside modal to close

4. **Highlights**:
   - Top 3 players: Yellow/gold highlight
   - High win rate (≥80%): Blue/cyan highlight
   - Pinned player: Green highlight

## Responsive Design

The website is fully responsive and works on:
- Desktop computers (1400px+ optimal)
- Tablets (768px - 1400px)
- Mobile phones (< 768px)

## Browser Compatibility

Works on all modern browsers:
- Chrome/Edge (recommended)
- Firefox
- Safari
- Opera

## Data Format

### CSV (final_standings.csv)
```csv
Rank,Player,Rating_Mu,Rating_Sigma,Wins,Draws,Losses,Games,Win_Rate
1,mutolovincent,43.86,3.48,12,0,0,12,1.000
```

### YAML (player configs)
```yaml
agent0:
  model:
    provider: "OpenAI"
    name: "gpt-5-mini"
    params:
      temperature: 1.0
  prompts:
    system_prompt: |
      Your system prompt here
    step_wise_prompt: |
      Your step-wise prompt here
```

## Customization

### Colors
Edit the CSS gradient in `<style>`:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Highlight Thresholds
Edit the JavaScript in `renderTable()`:
```javascript
const isTop3 = player.rank <= 3;           // Change top 3 threshold
const isHighWinRate = player.win_rate >= 0.8;  // Change win rate threshold (0.8 = 80%)
```

## Performance

- Loads all 36 players instantly
- YAML configs loaded asynchronously
- Smooth animations and transitions
- Optimized for 1000+ players (if needed)

## Future Enhancements

Potential features to add:
- Search/filter by player name
- Compare multiple players side-by-side
- Export data to CSV/JSON
- Dark/light theme toggle
- Game history visualization
- Head-to-head matchup statistics

## License

MIT License - See parent directory README for details
