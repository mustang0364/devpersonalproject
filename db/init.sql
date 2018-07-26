drop table users if users exist 

create table users (
  id serial primary key
  ,auth0_id text unique not null
  ,email varchar
  ,name varchar
  ,picture_url varchar
  ,phone_number varchar(15)
)

ALTER TABLE users
ADD profile_name text

SELECT * FROM users