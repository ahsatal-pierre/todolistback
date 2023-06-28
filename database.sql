CREATE TABLE tasks (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  status ENUM('pending', 'completed') NOT NULL DEFAULT 'pending'
);

INSERT INTO tasks (title, description) VALUES
  ('Task 1', 'Description for Task 1'),
  ('Task 2', 'Description for Task 2'),
  ('Task 3', 'Description for Task 3'),
  ('Task 4', 'Description for Task 4'),
  ('Task 5', 'Description for Task 5'),
  ('Task 6', 'Description for Task 6'),
  ('Task 7', 'Description for Task 7'),
  ('Task 8', 'Description for Task 8'),
  ('Task 9', 'Description for Task 9'),
  ('Task 10', 'Description for Task 10');
