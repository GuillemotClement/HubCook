create schema hubcook;

create table user
(
    user_id       int auto_increment
        primary key,
    user_username varchar(255) not null,
    user_password varchar(255) not null,
    user_email    varchar(255) not null,
    constraint user_pk_2
        unique (user_username),
    constraint user_pk_3
        unique (user_email)
);