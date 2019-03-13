drop table if exists customer;
drop table if exists product;

create table customer(
	id serial,
	name text not null check(name <> ''),
    address text not null check(address <> ''),
    primary key (id)
);

create table product(
	id serial,
	count int, 
    description text,
    category text,
    sellPrice numeric(6,2),
    buyPrice numeric(6,2),
    supplier text,
    primary key(id)
);