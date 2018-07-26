INSERT INTO users(auth0_id, email, profile_name, picture) values (${auth0_id}, ${email}, ${profile_name}, ${picture})
RETURNING *;
