---
slug: zhoupeng/20220311/kunpeng-install
title: 鲲鹏适配安装
authors: [zhoupeng]
tags: [kunpeng, install]
---





## 安装环境

操作系统版本：openEuler 20.03

kuberneteas 版本：V1.22.7

Docker版本：20.10.9

梧桐平台版本：V5.5.0



## 安装docker 设置参数

```shell
wget https://download.docker.com/linux/static/stable/aarch64/docker-20.10.9.tgz -o /opt/tools
tar zxf docker-20.10.9.tgz && cp docker/* /user/bin

# 配置docker守护进程
cat <<EOF > /usr/lib/systemd/system/docker.service
[Unit]
Description=Docker Application Container Engine
Documentation=https://docs.docker.com
After=network-online.target firewalld.service
Wants=network-online.target
  
[Service]
Type=notify
# the default is not to use systemd for cgroups because the delegate issues still
# exists and systemd currently does not support the cgroup feature set required
# for containers run by docker
ExecStart=/usr/bin/dockerd -H tcp://0.0.0.0:2375 -H unix://var/run/docker.sock
ExecReload=/bin/kill -s HUP $MAINPID
# Having non-zero Limit*s causes performance problems due to accounting overhead
# in the kernel. We recommend using cgroups to do container-local accounting.
LimitNOFILE=infinity
LimitNPROC=infinity
LimitCORE=infinity
# Uncomment TasksMax if your systemd version supports it.
# Only systemd 226 and above support this version.
#TasksMax=infinity
TimeoutStartSec=0
# set delegate yes so that systemd does not reset the cgroups of docker containers
Delegate=yes
# kill only the docker process, not all processes in the cgroup
KillMode=process
# restart the docker process if it exits prematurely
Restart=on-failure
StartLimitBurst=3
StartLimitInterval=60s
  
[Install]
WantedBy=multi-user.target
EOF

# 设置docker开机启动
systemctl enable docker && systemctl restart docker
```



## kubeadm 安装K8s集群

#### 准备镜像

大部分镜像都有arm64版本，只有etcd需要自行根据arm64二进制程序构建镜像

```shell
wget https://github.com/etcd-io/etcd/releases/download/v3.5.0/etcd-v3.5.0-linux-arm64.tar.gz

tar zxf etcd-v3.5.0-linux-arm64.tar.gz
cd etcd-v3.5.0-linux-arm64
docker build -t registry.aliyuncs.com/google_containers/etcd:3.5.0-0 .


```

#### 配置 arm 的 yum 源

```
cat <<EOF > /etc/yum.repos.d/kubernetes.repo
[kubernetes]
name=Kubernetes
baseurl=https://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-aarch64
enabled=1
gpgcheck=1
repo_gpgcheck=1
gpgkey=http://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg http://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg
EOF

yum clean all && yum makecache

yum list kubectl --showduplicates | sort -r

```

#### 所有节点安装K8S组件

```shell
yum install -y kubelet-1.22.7 kubeadm-1.22.7 kubectl-1.22.7 kubernetes-cni-0.8.7-0.aarch64

# 设置kubelet开机启动
systemctl daemon-reload && systemctl enable kubelet && systemctl restart kubelet
```



#### 初始化集群

```
kubeadm init \
--kubernetes-version=v1.22.7 \
--apiserver-cert-extra-sans=10.96.0.1,192.168.0.169,192.168.0.21,192.168.0.22,192.168.0.23 \
--image-repository registry.aliyuncs.com/google_containers \
--pod-network-cidr=10.244.0.0/16 \
--ignore-preflight-errors=Swap \
--control-plane-endpoint "192.168.0.169:6443" \
--upload-certs \
--v=3
```

> 注意：替换apiserver-cert-extra-sans 和 control-plane-endpoint 地址为实际地址



#### 安装 sfs 存储插件

```shell
helm repo add nfs-subdir-external-provisioner https://kubernetes-sigs.github.io/nfs-subdir-external-provisioner/
mkdir sfs-charts
helm show values nfs-subdir-external-provisioner/nfs-subdir-external-provisioner > ./sfs-charts/values.yaml

# 修改values文件以下配置
repository: devhub.devcloud.talkweb.com.cn/sig-storage/nfs-subdir-external-provisioner-arm64:v4.0.2
nfs.server：172.16.1.46  # 实际的sfs地址
nfs.path：/
storageClass.name：sfs

# 安装插件
helm install nfs-subdir-external-provisioner -f ./sfs-charts/values.yaml nfs-subdir-external-provisioner/nfs-subdir-external-provisioner
```



#### 挂载sfs文件系统

```shell
# 挂载目录
mount -t nfs -o vers=3,nolock 192.168.0.99:/  /mnt/sfs_turbo

#fstab 配置
192.168.0.99:/ /mnt/sfs_turbo nfs vers=3,timeo=600,nolock 0 0
```



## 梧桐PAAS安装 

#### 安装console

目前没有对应arm平台的 allinone 镜像，因此console安装在X86平台

```shell
helm repo add wutong-paas https://openchart.goodrain.com/goodrain/rainbond
# 下载console
helm pull rainbond/rainbond-console
# 配置value.yaml 按实际情况调整以下配置(默认allinone模式)
pvc:
redis:
mysql:
```



#### 接入K8S集群（安装rbd组件）

提前下载对应镜像，目前镜像大部分在官网仓库可找到，只有nfs-provisioner存储插件镜像需要自编译

```
docker pull registry.cn-hangzhou.aliyuncs.com/goodrain/rainbond-operator:v2.2.0-arm64
docker tag registry.cn-hangzhou.aliyuncs.com/goodrain/rainbond-operator:v2.2.0-arm64 registry.cn-hangzhou.aliyuncs.com/goodrain/rainbond-operator:v2.2.0
docker pull registry.cn-hangzhou.aliyuncs.com/goodrain/rbd-chaos:v5.5.0-release-arm64
docker tag registry.cn-hangzhou.aliyuncs.com/goodrain/rbd-chaos:v5.5.0-release-arm64  registry.cn-hangzhou.aliyuncs.com/goodrain/rbd-chaos:v5.5.0-release
docker pull registry.cn-hangzhou.aliyuncs.com/goodrain/rbd-node:v5.5.0-release-arm64
docker tag registry.cn-hangzhou.aliyuncs.com/goodrain/rbd-node:v5.5.0-release-arm64 registry.cn-hangzhou.aliyuncs.com/goodrain/rbd-node:v5.5.0-release
docker pull registry.cn-hangzhou.aliyuncs.com/goodrain/rbd-gateway:v5.5.0-release-arm64
docker tag registry.cn-hangzhou.aliyuncs.com/goodrain/rbd-gateway:v5.5.0-release-arm64 registry.cn-hangzhou.aliyuncs.com/goodrain/rbd-gateway:v5.5.0-release
docker pull gcr.io/google-containers/etcd-arm64:3.3.17
docker tag gcr.io/google-containers/etcd-arm64:3.3.17 registry.cn-hangzhou.aliyuncs.com/goodrain/etcd:v3.3.18
docker pull registry.cn-hangzhou.aliyuncs.com/goodrain/metrics-scraper:v1.0.4
docker tag registry.cn-hangzhou.aliyuncs.com/goodrain/metrics-scraper:v1.0.4-arm64 registry.cn-hangzhou.aliyuncs.com/goodrain/metrics-scraper:v1.0.4
docker pull registry.cn-hangzhou.aliyuncs.com/goodrain/rbd-api:v5.5.0-release-arm64
docker tag registry.cn-hangzhou.aliyuncs.com/goodrain/rbd-api:v5.5.0-release-arm64 registry.cn-hangzhou.aliyuncs.com/goodrain/rbd-api:v5.5.0-release
docker pull registry.cn-hangzhou.aliyuncs.com/goodrain/rbd-eventlog:v5.5.0-release-arm64
docker tag registry.cn-hangzhou.aliyuncs.com/goodrain/rbd-eventlog:v5.5.0-release-arm64 registry.cn-hangzhou.aliyuncs.com/goodrain/rbd-eventlog:v5.5.0-release
docker pull registry.cn-hangzhou.aliyuncs.com/goodrain/metrics-server:v0.3.6-arm64
docker tag registry.cn-hangzhou.aliyuncs.com/goodrain/metrics-server:v0.3.6-arm64 registry.cn-hangzhou.aliyuncs.com/goodrain/metrics-server:v0.3.6
docker pull registry.cn-hangzhou.aliyuncs.com/goodrain/rbd-monitor:v5.5.0-release-arm64
docker tag registry.cn-hangzhou.aliyuncs.com/goodrain/rbd-monitor:v5.5.0-release-arm64 registry.cn-hangzhou.aliyuncs.com/goodrain/rbd-monitor:v5.5.0-release
docker pull registry.cn-hangzhou.aliyuncs.com/goodrain/rbd-mq:v5.5.0-release-arm64
docker tag registry.cn-hangzhou.aliyuncs.com/goodrain/rbd-mq:v5.5.0-release-arm64 registry.cn-hangzhou.aliyuncs.com/goodrain/rbd-mq:v5.5.0-release
docker pull registry.cn-hangzhou.aliyuncs.com/goodrain/kubernetes-dashboard:v2.0.1-3-arm64
docker tag registry.cn-hangzhou.aliyuncs.com/goodrain/kubernetes-dashboard:v2.0.1-3-arm64 registry.cn-hangzhou.aliyuncs.com/goodrain/kubernetes-dashboard:v2.0.1-3
docker pull registry.cn-hangzhou.aliyuncs.com/goodrain/rbd-resource-proxy:v5.5.0-release-arm64
docker tag registry.cn-hangzhou.aliyuncs.com/goodrain/rbd-resource-proxy:v5.5.0-release-arm64 registry.cn-hangzhou.aliyuncs.com/goodrain/rbd-resource-proxy:v5.5.0-release
docker pull registry.cn-hangzhou.aliyuncs.com/goodrain/rbd-webcli:v5.5.0-release-arm64
docker tag registry.cn-hangzhou.aliyuncs.com/goodrain/rbd-webcli:v5.5.0-release-arm64 registry.cn-hangzhou.aliyuncs.com/goodrain/rbd-webcli:v5.5.0-release
docker pull registry.cn-hangzhou.aliyuncs.com/goodrain/rbd-worker:v5.5.0-release-arm64
docker tag registry.cn-hangzhou.aliyuncs.com/goodrain/rbd-worker:v5.5.0-release-arm64 registry.cn-hangzhou.aliyuncs.com/goodrain/rbd-worker:v5.5.0-release
docker pull swr.cn-southwest-2.myhuaweicloud.com/wutong/nfs-provisioner:v1.0.0-stable
docker tag swr.cn-southwest-2.myhuaweicloud.com/wutong/nfs-provisioner:v1.0.0-stable registry.cn-hangzhou.aliyuncs.com/goodrain/nfs-provisioner
docker pull registry:2.6.2
docker tag registry:2.6.2 registry.cn-hangzhou.aliyuncs.com/goodrain/registry:2.6.2
docker pull mysql:8.0-oracle
docker tag mysql:8.0-oracle registry.cn-hangzhou.aliyuncs.com/goodrain/rbd-db:8.0.19
docker pull prom/mysqld-exporter:latest
docker tag prom/mysqld-exporter:latest registry.cn-hangzhou.aliyuncs.com/goodrain/mysqld-exporter
docker pull rancher/metrics-server:v0.3.6-arm64
docker tag rancher/metrics-server:v0.3.6-arm64 registry.cn-hangzhou.aliyuncs.com/goodrain/metrics-server:v0.3.6
docker pull kubernetesui/metrics-scraper:v1.0.4
docker tag kubernetesui/metrics-scraper:v1.0.4 registry.cn-hangzhou.aliyuncs.com/goodrain/metrics-scraper:v1.0.4
```

#### 最后console 界面导入集群
![image](https://user-images.githubusercontent.com/23066464/158973160-a543f09e-a6b3-4dfc-b79f-5f82150ce8ed.png)


