INSERT INTO users(username, pass, startDate, finishDate)
VALUES($1,
       $2,
       $3,
       $4)
SELECT username,
       id
FROM users
WHERE email = $3;