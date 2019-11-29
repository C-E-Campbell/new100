UPDATE users
SET setdiff = TRUE
WHERE id = $1;


UPDATE users
SET finishdate = $2
WHERE id = $1;


select finishdate
from users
WHERE id = $1;