# Linux Basic Setting and Command

## Create Ampere Virtual Machine in Oracle Cloud

default: 1 OCPU 6 memory

## access Root user in Ubuntu

https://cloud.tencent.com/developer/article/1434461
set root password

```
sudo passwd root
```

switch to root user

```
su
```

https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-20-04
add new user **van**

```
adduser van
```

add new user to **sudo** group

```
usermod -aG sudo van
```

## setting firewall iptables & ufw

#### iptables

https://www.cnblogs.com/kex1n/p/7048267.html

check settings

```
sudo iptables -L -n
```

ensure ssh connection

```
sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT
```

clean all the rules

```
sudo iptables -F     //clean all
sudo iptables -X     //clean all customized
```

#### ufw

allow SSH connections

```
ufw allow OpenSSH
```

enable firewall

```
ufw enable
```

check ufw status

```
ufw status
```

## install Java and Jenkins for Continuous Integration and Deployment(CI/CD) --DevOps

https://www.jenkins.io/doc/book/installing/linux/
Update the repositories

```
sudo apt update
```

search of all available packages:

```
sudo apt search openjdk
```

Pick one option and install it:

```
sudo apt install openjdk-11-jdk
```

install Jenkins LTS

```
curl -fsSL https://pkg.jenkins.io/debian-stable/jenkins.io.key | sudo tee \
  /usr/share/keyrings/jenkins-keyring.asc > /dev/null
echo deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] \
  https://pkg.jenkins.io/debian-stable binary/ | sudo tee \
  /etc/apt/sources.list.d/jenkins.list > /dev/null
sudo apt-get update
sudo apt-get install jenkins
```

check Jenkins status

```
systemctl status jenkins
```

let Jenkins enable when system started

```
/lib/systemd/systemd-sysv-install enable jenkins
```

access http://DOMAINorIP:8080
get init admin password

```
cat /var/lib/jenkins/secrets/initialAdminPassword
```

## install Nginx

```
sudo apt update
sudo apt install nginx
```

let Nginx enable when system started

```
systemctl start nginx
systemctl status nginx
/lib/systemd/systemd-sysv-install enable nginx
```

modify user

```
vi /etc/nginx/nginx.conf
```

copy **default** into **cms** in /sites-available/

```
cp -i default cms
```

remove **default** add **cms** symlink in /sites-enabled/

```
cp -s ../sites-available/cms ./cms
```
