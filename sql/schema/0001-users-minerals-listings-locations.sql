CREATE TABLE users( 
		id serial PRIMARY KEY,
		username varchar(225),
		password varchar(225)
);


CREATE TABLE Minerals(
	 id serial PRIMARY KEY 
	,name    VARCHAR(225)
	,extract VARCHAR(3000)
	,image   VARCHAR(225)
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
		,title varchar(225)
		,minerals varchar(225)[]
		,address varchar(225)
		,state varchar(50)
		,latitude numeric(40)
		,longitude numeric(40)
);