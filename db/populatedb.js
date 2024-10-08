const pool = require("./pool");

async function initializeDatabase() {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS messages (
        id SERIAL PRIMARY KEY,
        username VARCHAR(255),
        text VARCHAR(255),
        date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        CONSTRAINT unique_message UNIQUE (username, text)
      );
    `);
  } catch (err) {
    console.error("Error initializing database:", err);
  }
}

module.exports = { initializeDatabase };
