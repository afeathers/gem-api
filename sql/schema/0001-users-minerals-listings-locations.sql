CREATE TABLE users( 
		id serial PRIMARY KEY,
		username varchar(225),
		password varchar(225)
);


CREATE TABLE Minerals(
	 id serial PRIMARY KEY 
	,name    text
	,extract text
	,image   text
);


CREATE TABLE Listings(
		id serial PRIMARY KEY
		,title varchar(225)
		,price INT
		,image varchar(225)
		,content varchar(3000)
		,link varchar(225)
		,active boolean
);

CREATE TABLE Locations(
		id serial PRIMARY KEY
		,title text
		,minerals text
		,address text
		,state text
		,latitude numeric
		,longitude numeric
);