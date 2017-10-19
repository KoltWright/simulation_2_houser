INSERT INTO users
(username, password)
VALUES(${username}, ${password});

SELECT id, username FROM users
WHERE username = ${username} AND
password = ${password};
