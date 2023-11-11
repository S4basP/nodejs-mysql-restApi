create database companydb;


create table employees(
    id int(11) not null auto_increment,
    name varchar(45) default null,
    salary int(5) default  null,
    primary key (id)
);


insert into employees values 
(1, 'Joe', 1000),
(2, 'Henry', 2000),
(3, 'Jhon', 3000),
(4, 'Sam', 2500);
