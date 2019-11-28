SELECT *
FROM users
WHERE pass = $1
    AND email = $2;