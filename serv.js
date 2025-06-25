const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');
const app = express();
app.use(cors());

const dbConfig = {
  host: 'localhost',
  user: 'youruser',
  password: 'yourpass',
  database: 'your_db_name'
};

// Tech Fest registrations
app.get('/api/techfest-registrations', async (req, res) => {
  const userEmail = req.query.email || 'john@example.com';
  const conn = await mysql.createConnection(dbConfig);
  const [rows] = await conn.execute(`
    SELECT r.registration_id AS id, 'Tech Fest' AS fest, e.event_name AS event, e.event_date AS date, e.venue,
           s.department, s.year_of_study AS year, r.experience, r.special_requirements AS requirements,
           r.registration_time AS regDate,
           'https://cdn-icons-png.flaticon.com/512/2721/2721296.png' AS img
    FROM registrations r
    JOIN students s ON r.student_id = s.student_id
    JOIN events e ON r.event_id = e.event_id
    WHERE s.email = ?
  `, [userEmail]);
  res.json(rows);
});

// Cultural Fest registrations
app.get('/api/culturalfest-registrations', async (req, res) => {
  const userEmail = req.query.email || 'john@example.com';
  const conn = await mysql.createConnection(dbConfig);
  const [rows] = await conn.execute(`
    SELECT r.registration_id AS id, 'Cultural Fest' AS fest, e.event_name AS event, e.event_date AS date, e.venue,
           e.category, s.year_of_study AS year, r.experience, r.special_requirements AS requirements,
           r.registration_time AS regDate,
           'https://cdn-icons-png.flaticon.com/512/3595/3595455.png' AS img
    FROM registrations r
    JOIN students s ON r.student_id = s.student_id
    JOIN events e ON r.event_id = e.event_id
    WHERE s.email = ?
      AND e.category IS NOT NULL
  `, [userEmail]);
  res.json(rows);
});

// Cancel registration
app.delete('/api/registration/:id', async (req, res) => {
  const conn = await mysql.createConnection(dbConfig);
  await conn.execute('DELETE FROM registrations WHERE registration_id = ?', [req.params.id]);
  res.json({ success: true });
});

app.listen(3001, () => console.log('API running on http://localhost:3001'));
