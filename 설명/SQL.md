# SQL 학습
## 1. Database
### database 명령어
```sql
-- database 만들기
CREATE TABLE shop DEFAULT CHARACTER SET utf8;

-- database 보기
SHOW databases;

-- database 사용하기
USE shop;
```

### table 명령어
```sql
-- table 만들기
CREATE TABLE `test` (
	`id` int(11) NOT NULL,
	`name` varchar(255) NOT NULL, 
	PRIMARY KEY (`id`)
) DEFAULT CHARSET=utf8;

CREATE TABLE `users2` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`username` VARCHAR(255) NOT NULL,
	`userid` VARCHAR(255) NOT NULL,
	`userpw` VARCHAR(255) NOT NULL,
	PRIMARY KEY (`id`)
) COLLATE='utf8mb4_0900_ai_ci';

-- table 보기
SHOW TABLES;

-- table 삭제
DROP TABLE tablename;
```

### record 명령어
```sql
-- CRUD
-- Create : INSERT
-- INSERT INTO 테이블명 SET 필드명=값, 필드명=값 ...
INSERT INTO users SET username='홍길동', userid='hong', userpw='1234';
INSERT INTO users (username, userid, userpw) VALUES ('홍길순', 'hong2', '1234');

-- Read: SELECT
SELECT * FROM users;

-- Update: UPDATE

-- Delete: DELETE
```