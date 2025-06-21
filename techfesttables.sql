-- Create the database
CREATE DATABASE IF NOT EXISTS tech_fest_db;
USE tech_fest_db;

-- Departments table (optional normalization)
CREATE TABLE departments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  code VARCHAR(10) UNIQUE NOT NULL COMMENT 'E.g., CSE, ECE',
  name VARCHAR(100) NOT NULL
);

-- Events table
CREATE TABLE events (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  max_participants INT DEFAULT NULL COMMENT 'NULL means unlimited'
);

-- Main registrations table
CREATE TABLE registrations (
  id INT AUTO_INCREMENT PRIMARY KEY,
  full_name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  phone VARCHAR(15) NOT NULL,
  department_id INT COMMENT 'References departments.id',
  year_of_study ENUM('1', '2', '3', '4') NOT NULL,
  experience TEXT,
  requirements TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (department_id) REFERENCES departments(id)
);

-- Junction table for events selected
CREATE TABLE registration_events (
  registration_id INT NOT NULL,
  event_id INT NOT NULL,
  PRIMARY KEY (registration_id, event_id),
  FOREIGN KEY (registration_id) REFERENCES registrations(id) ON DELETE CASCADE,
  FOREIGN KEY (event_id) REFERENCES events(id)
);
