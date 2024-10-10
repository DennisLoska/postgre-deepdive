/* @name findUserByName */
SELECT * FROM users WHERE name = :name!;

/* @email findUserByEmail */
SELECT * FROM users WHERE email = :email!;

/* @birthdate findUsersByBirthdate*/
SELECT name,birthdate FROM users WHERE date_trunc('day', birthdate) = '2000-01-01';

/* @year findUsersByYearOfBirth*/
SELECT name,birthdate FROM users WHERE EXTRACT(YEAR FROM birthdate) = :year;
