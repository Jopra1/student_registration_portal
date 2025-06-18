mysql> CREATE TABLE students (
    ->     student_id INT AUTO_INCREMENT PRIMARY KEY,
    ->     full_name VARCHAR(100) NOT NULL,
    ->     email VARCHAR(100) UNIQUE NOT NULL,
    ->     phone VARCHAR(15) NOT NULL,
    ->     department ENUM('CE', 'CSE', 'ECE', 'EEE', 'ME') NOT NULL,
    ->     year_of_study ENUM('1', '2', '3', '4') NOT NULL,
    ->     registration_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    -> );
Query OK, 0 rows affected (0.23 sec)

mysql> CREATE TABLE events (
    ->     event_id INT AUTO_INCREMENT PRIMARY KEY,
    ->     event_name VARCHAR(100) NOT NULL,
    ->     category ENUM('Music', 'Dance', 'Drama', 'Art', 'Photography', 'Fashion') NOT NULL,
    ->     description TEXT,
    ->     max_participants INT,
    ->     event_date DATE,
    ->     event_time TIME,
    ->     venue VARCHAR(100)
    -> );
Query OK, 0 rows affected (0.04 sec)

mysql> CREATE TABLE registrations (
    ->     registration_id INT AUTO_INCREMENT PRIMARY KEY,
    ->     student_id INT,
    ->     event_id INT,
    ->     experience TEXT,
    ->     special_requirements TEXT,
    ->     registration_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ->     FOREIGN KEY (student_id) REFERENCES students(student_id),
    ->     FOREIGN KEY (event_id) REFERENCES events(event_id)
    -> );
Query OK, 0 rows affected (0.07 sec)

mysql> CREATE TABLE teams (
    ->     team_id INT AUTO_INCREMENT PRIMARY KEY,
    ->     team_name VARCHAR(100),
    ->     event_id INT,
    ->     leader_id INT,
    ->     FOREIGN KEY (event_id) REFERENCES events(event_id),
    ->     FOREIGN KEY (leader_id) REFERENCES students(student_id)
    -> );
Query OK, 0 rows affected (0.08 sec)

mysql> CREATE TABLE team_members (
    ->     team_id INT,
    ->     student_id INT,
    ->     role VARCHAR(50),
    ->     PRIMARY KEY (team_id, student_id),
    ->     FOREIGN KEY (team_id) REFERENCES teams(team_id),
    ->     FOREIGN KEY (student_id) REFERENCES students(student_id)
    -> );
