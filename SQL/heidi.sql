-- UPDATE users SET userpw='0000' WHERE id=1;
-- DELETE FROM users WHERE id=2;

CREATE TABLE `product` (
	`id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
	`prdname` VARCHAR(255) NOT NULL,
	`price` INT UNSIGNED ZEROFILL NULL,
	`content` TEXT NULL,
	`createdAt` DATETIME NOT NULL DEFAULT NOW(),
	PRIMARY KEY (`id`)
);

SELECT * FROM product;

-- test DB의 관계 샘플
USE test;
INSERT INTO employee SET eno='2021-005', NAME='홍길연';
INSERT INTO info SET eid=3, gender='M', age=32, tel='010-0000-0005';

DELETE FROM employee WHERE id=1;

USE test;
INSERT INTO pay SET eid=5, pay=8200000;
INSERT INTO pay (eid, pay) VALUES (5, 7900000);
UPDATE pay SET pay=4500000 WHERE id=10;
DELETE FROM pay WHERE id=11;

-- SELECT를 배워보자
SELECT * FROM employee; -- 모든 필드를 가져와
SELECT id, eno FROM employee; -- 작성한 필드만 가져와
SELECT COUNT(id) FROM employee; -- 행의 갯수를 가져와
SELECT * FROM employee ORDER BY id DESC; -- id 내림차순으로 가져와
SELECT * FROM employee ORDER BY id ASC; -- id 오름차순으로 가져와
SELECT * FROM employee WHERE id = 2; -- id = 2
SELECT * FROM employee WHERE id >= 3 ORDER BY id DESC; -- id > 2 큰놈을 내림차순으로 가져와
SELECT * FROM pay WHERE pay >= 3000000 AND pay < 5000000 ORDER BY pay ASC;

SELECT * FROM info WHERE tel='010'; -- tel이 010인 놈을 가져와. -> 데이터가 없다
SELECT * FROM info WHERE tel LIKE '010'; -- tel이 010인 놈을 가져와(위와 같다) -> 데이터가 없다
SELECT * FROM info WHERE tel LIKE '010%'; -- tel이 010으로 시작하는 놈을 가져와
SELECT * FROM info WHERE tel LIKE '%0001'; -- tel이 0001로 끝나는 놈을 가져와
SELECT * FROM info WHERE tel LIKE '%0000%'; -- tel이 0000을 포함하는 놈을 가져와

SELECT * FROM pay WHERE pay >= 3000000 ORDER BY pay DESC, id DESC LIMIT 3, 3;

