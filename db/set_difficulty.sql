UPDATE users
SET setdiff = TRUE
WHERE id = $1;


UPDATE USERS
SET finish = $2
WHERE id = $1