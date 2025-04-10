const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));


// Fallback to index.html for anything else (if using client-side routing later)
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public/index.html'));
});



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});