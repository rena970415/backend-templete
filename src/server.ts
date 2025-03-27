import { connectDB } from './config/db.js';
import app from './app.js';
import 'dotenv/config'; // ← dotenv 설정 간단하게 한 줄이면 OK

const PORT = process.env.PORT || 3000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
  });
});
