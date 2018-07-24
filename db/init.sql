DROP TABLE Users;
DROP TABLE post;

create table users (
  id serial primary key
  ,auth0_id text unique not null
  ,email text not null
  ,firt_name text not null
  ,last_name text not null 
  ,picture_url text not null
  ,phone_number varchar(15)
);


create table post (
user_id INTEGER not null REFERENCES users(id)
,id serial primary key
,comment text not null
,place text not null
)

select * from users;
select * from post;

SELECT users.*, post.id as post_id, post.user_id, post.comment, post.place FROM users
JOIN post
ON(post.user_id = users.id);