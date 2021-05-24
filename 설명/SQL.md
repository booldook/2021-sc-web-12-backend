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
-- INSERT INTO 테이블명 SET 필드명1=값1, 필드명2=값2 ...
-- INSERT INTO 테이블명 (필드명1, 필드명2, 필드명3 ...) VALUES (값1, 값2, 값3 ...)
INSERT INTO users SET username='홍길동', userid='hong', userpw='1234';
INSERT INTO users (username, userid, userpw) VALUES ('홍길순', 'hong2', '1234');

-- Read: SELECT
-- 제일 복잡하다. 차차 배워나가자.
SELECT * FROM users;

-- Update: UPDATE
-- 조건절이 꼭 들어가야 한다(안그러면 박스구하러 가야한다)
-- UPDATE 테이블명 SET 필드명1=값1, 필드명2=값2 WHERE id=1;
UPDATE users SET userpw='1234' WHERE id=1;

-- Delete: DELETE
-- 조건절이 꼭 들어가야 한다(안그러면 박스구하러 가야한다)
-- DELETE FROM 테이블명 WHERE id=2;
DELETE FROM users WHERE id=2;
```