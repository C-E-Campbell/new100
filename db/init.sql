CREATE TABLE users(
id SERIAL PRIMARY KEY,
username VARCHAR(500) NOT NULL,
pass VARCHAR(1000) NOT NULL,
email TEXT NOT NULL UNIQUE,
startDate VARCHAR(1000),
finishDate VARCHAR(1000),
completed BOOLEAN DEFAULT FALSE)

VALUES(ccamp290, rufus0606, charles.e.campbell1989@gmail.com, 1234, 1234, false)

CREATE TABLE completed(
id NUMBER,
movieId NUMBER
)