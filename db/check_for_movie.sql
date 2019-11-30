SELECT *
FROM completed
WHERE id = $1
    AND movieid = $2;