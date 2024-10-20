/* @name findUserByName */
SELECT * FROM users WHERE name = :name!;

/* @name findUserByEmail */
SELECT * FROM users WHERE email = :email!;

/* @name findUsersByBirthdate*/
SELECT name,birthdate FROM users WHERE date_trunc('day',birthdate) = :birthdate;

/* @name findUsersByYearOfBirth*/
SELECT name,birthdate FROM users WHERE EXTRACT(YEAR FROM birthdate) = :year;
