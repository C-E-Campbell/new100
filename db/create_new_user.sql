INSERT INTO users(username, pass, email, startDate, finishDate)
VALUES($1,
       $2,
       $3,
       $4,
       $5);


SELECT username,
       id,
       startDate,
       finishDate
FROM users
WHERE email = $3;