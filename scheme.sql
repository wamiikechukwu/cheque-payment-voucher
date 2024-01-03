-- create user table --
create table users(
id int primary key not null auto_increment,
firstname varchar(30) not null ,
lastname varchar(30) not null,
email varchar(255) not null,
user_password  varchar(255) not null,
created_at timestamp default current_timestamp(),
last_active timestamp default current_timestamp(),
last_modified timestamp default current_timestamp(),
account_locked tinyint default false,
verified  tinyint default false,
role enum('user', 'preparer', 'verifier', 'authorizer', 'signatory', 'dev') not null
);

create table bank(
    id int primary key not null auto_increment,
    bank_name varchar(30),
    account_no init,
    description varchar(50),
    bank_type varchar(30)
);

create table cpv(
    id int primary key not null auto_increment,
    payee_name varchar(50),
    payee_addr varchar(255),
    cheque_no int,
    cheque_date timestamp default current_timestamp(),
    amount int,
    bank int,
    code int,
    account_name varchar(30),
    cpv_description text,
    amount_total int,
    cheque_type varchar(30),
    created_at timestamp default current_timestamp()
    modified_at timestamp default current_timestamp()
	FOREIGN KEY (bank) REFERENCES bank(id)
);
