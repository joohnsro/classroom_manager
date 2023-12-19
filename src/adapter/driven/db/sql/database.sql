CREATE TABLE students (
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    age int(3) NOT NULL,
    phone varchar(14) NOT NULL,
    email varchar(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE academic_histories (
    id int NOT NULL AUTO_INCREMENT,
    studentId int(11) NOT NULL,
    year int(4) NOT NULL,
    subject varchar(255) NOT NULL,
    grade varchar(3) NOT NULL,
    situation varchar(50) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE courses (
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE didactic_materials (
    id int NOT NULL AUTO_INCREMENT,
    courseId int(11) NOT NULL,
    type varchar(50) NOT NULL,
    content mediumtext NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE class_schedules (
    id int NOT NULL AUTO_INCREMENT,
    courseId int(11) NOT NULL,
    fromDate int(14) NOT NULL,
    toDate int(14) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE professors (
    id int NOT NULL AUTO_INCREMENT,
    courseId int(11) NOT NULL,
    name varchar(255) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO students (name, age, email, phone)
    VALUES ('Jonathan Oliveira', 33, 'jonathan@email.com', '+5511987654321');

INSERT INTO students (name, age, email, phone)
    VALUES ('Fulano', 25, 'fulano@email.com', '+5511912345678');

INSERT INTO academic_histories (studentId, year, subject, grade, situation)
    VALUES (1, 2023, 'DDD', 'A', 'approved');

INSERT INTO academic_histories (studentId, year, subject, grade, situation)
    VALUES (1, 2023, 'Dockerization', '-', 'in-progress');

INSERT INTO academic_histories (studentId, year, subject, grade, situation)
    VALUES (2, 2023, 'DDD', '-', 'in-progress');

INSERT INTO courses (name) 
    VALUES ('DDD');

INSERT INTO courses (name) 
    VALUES ('Dockerization');

INSERT INTO didactic_materials (courseId, type, content)
    VALUES (1, 'book', 'Implementing Domain-Driven Design, Vaughn Vernon');

INSERT INTO class_schedules (courseId, fromDate, toDate)
    VALUES (1, 1701459000, 1701464400);

INSERT INTO professors (courseId, name)
    VALUES (1, 'Vlad Cruz');