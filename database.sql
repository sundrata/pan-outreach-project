CREATE TABLE "person" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "admin" BOOLEAN,
    "creation_date" DATE,
    "active" BOOLEAN,
    "school_name" VARCHAR(500)
);

CREATE TABLE "sheet_music" (
	"id" SERIAL PRIMARY KEY,
	"url" varchar(200),
	"instrument" varchar(200),
	"name" varchar(200),
	"difficulty" varchar(200)
);

CREATE TABLE "category" (
	"id" SERIAL PRIMARY KEY,
	"name" varchar(200)
);

CREATE TABLE "lesson_plan" (
    "id" SERIAL PRIMARY KEY,
    "url" varchar(200),
    "name" varchar(200),
    "category_id" integer REFERENCES category(id)
);
