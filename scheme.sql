-- create user table --
create table users(
id int primary key not null auto_increment,
firstname varchar(30) not null ,
lastname varchar(30) not null,
email varchar(255) not null,
user_password  varchar(255) not null,
age int,
user_address text,
created_at timestamp default current_timestamp(),
last_active timestamp default current_timestamp(),
last_modified timestamp default current_timestamp(),
account_locked tinyint default false,
verified  tinyint default false,
role enum('user', 'preparer', 'verifier', 'authorizer', 'signatory', 'dev') not null
);