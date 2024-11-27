CREATE DATABASE friend_store;
CREATE TABLE Friend (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    role VARCHAR(255),
    description TEXT,
    gender VARCHAR(50),
    img_url VARCHAR(2083),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
CREATE TABLE User (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL
);
CREATE TABLE Friendship (
    friendship_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    friend_id INT NOT NULL,
    friendship_date DATE NOT NULL,
    status ENUM('pending', 'accepted', 'rejected') DEFAULT 'pending',
    FOREIGN KEY (user_id) REFERENCES User(user_id) ON DELETE CASCADE,
    FOREIGN KEY (friend_id) REFERENCES Friend(id) ON DELETE CASCADE
);
INSERT INTO User (username, password, email)
VALUES
('user1', 'pass1', 'user1@example.com'),
('user2', 'pass2', 'user2@example.com');
INSERT INTO Friend (name, role, description, gender, img_url)
VALUES
('Alice', 'Best Friend', 'We have been friends since school.', 'Female', NULL),
('Bob', 'Colleague', 'Works with me at the office.', 'Male', NULL);
