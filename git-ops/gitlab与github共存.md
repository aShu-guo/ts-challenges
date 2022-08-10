> gitlab与github共存

1.创建gitlab && github的私钥/公钥
```shell
ssh-keygen -t rsa -f ~/.ssh/id_rsa.gitlab -C "email"
```

2.新建config配置文件

在～/.ssh目录下执行
```shell
touch config
```
写入以下配置，指定仓库地址、私钥路径以及用户名
```shell
Host http://172.16.1.113:8789/
IdentityFile ~/.ssh/id_rsa
User xxxx@xxx.xx

Host github.com
IdentityFile ~/.ssh/id_rsa_github
User yyyy@yyy.yy
```

3.在gitlab以及github上添加不同的公钥

4.验证
```shell
ssh -T xxxx@xxx.xx

ssh -T yyyy@yyy.yy
```

5.删除之前的全局配置
```shell
git config --global --unset user.name
git config --global --unset user.email
```

为每个项目新增本地配置
```shell
# 与你的仓库用户名对应
git config user.name "yourUsername"
# 与你的仓库邮箱对应
git config user.email "yourEmail@example.com"
```

查看新增的配置
```shell
git config -l
```
