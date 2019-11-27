UPDATE users
SET completed = true
WHERE id = $1;