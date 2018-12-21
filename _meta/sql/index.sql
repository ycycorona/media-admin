#查询用户账号密码

select u.user_name, u.avatar, u.nick_name, u.status AS status_user, a.id_user, a.auth_type, a.identifier, a.token, a.status AS status_auth
FROM
users AS u
INNER JOIN
(select * FROM user_auths a
WHERE a.auth_type='passwd' AND a.identifier='root') AS a
ON u.id=a.id

select u.user_name, u.avatar, u.nick_name, u.status AS status_user, a.id_user, a.auth_type, a.identifier, a.token, a.status AS status_auth
FROM
users AS u
INNER JOIN
user_auths AS a
ON u.id=a.id AND a.identifier='root'


SELECT `s.name` AS "Student name" FROM `students` `s`

SELECT `s`.`name` AS "Student name" FROM `students` `s`
