# Linux常用指令
查看端口 `netstat -ntlp`
`:wq` 保存修改并结束
`ZZ`  结束
`i`    编辑模式开始输入
# nginx安装卸载
## 安装
安装 `yum install -y nginx`
启动 `nginx`
测试配置文件是否正确 `nginx -t`
重启 `nginx -s reload`
查看进程 `ps -ef | grep nginx`
关闭服务 `nginx -s stop` or `kill -9 pid`
## 卸载
停止 `service nginx stop`
删除自动启动 `chkconfig nginx off`
删除本地文件
`rm -rf /usr/sbin/nginx`
`rm -rf /etc/nginx`
`rm -rf /etc/init.d/nginx`
yum清理 `yum remove nginx`
## 更改默认配置后
修改配置 `cd /etc/nginx`  `vim nginx.conf`
如果是根目录文件  修改配置 `user: root`  (默认是`user: nginx`)
## 目录说明
目录                               说明
/etc/nginx/                        所有相关配置文件目录
/etc/nginx/nginx.conf              nignx主配置文件
/etc/nginx/conf.d/                 独立的nginx服务配置文件目录
/var/log/nginx/                    nginx日志目录
/var/log/nginx/access.log          访问日志（ip/浏览器信息/处理时间/请求URL）
/var/log/nginx/error.log           错误日志（服务器和请求处理中的错误信息）
/usr/share/nginx/html              默认站点位置

