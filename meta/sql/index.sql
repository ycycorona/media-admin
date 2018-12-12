#查询用户账号密码
select u.id, u.user_name, a.auth_type, a.token
FROM users u INNER JOIN user_auths a
WHERE u.id=a.id AND u.`status`=1 AND a.`status`=1 And u.user_name='root'
