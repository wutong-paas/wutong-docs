---
slug: fcheng/20220324/opensource-and-wutongpaas
title: 开源文化及梧桐PaaS平台开源探索
authors: fcheng
tags: [分享, 文档]
---
# 开源文化及梧桐PaaS平台开源探索
## 开源介绍
### 开源软件发展历程
![history of FOOS](https://user-images.githubusercontent.com/100248197/155274146-0d3e36b8-539f-4323-ab22-15dcc23f2837.png)
* 1982 ~ 1993 年： 自由软件，GNU的时代；
* 1994 ~ 2002 年： 开源和Linux、Apache崛起；
* 2003 ~ 2010 年： 大数据、云计算时代；
* 2011 ~    现在： 开源已经成为主流、云原生时代。
![云原生发展历程](https://user-images.githubusercontent.com/100248197/159655111-f8e26e7b-93c3-4ee9-881c-4827fb701046.png)

### 关于开源许可证
* 当你创作一件创造性的作品(如文字、图像或软件代码)时，该作品在默认情况下拥有**独家版权**。
* 法律认为，作为作品的作者，你对别人如何使用你的作品有**发言权**。一般来说，这意味着任何人都不能使用、复制、分发或修改你的作品，否则就会面临撤下、勒索或诉讼的**风险**。
* **开源软件作者**希望其他人使用、修改和共享作品。但是，由于合法的默认值仍然是专有版权，所以就需要一个明确声明这些权限的**许可证**。
* 如果你的项目**没有使用开放源码许可**，为项目做出贡献的每个人都将成为其作品的独家版权所有者。这意味着**任何人都不能使用、复制、分发或修改**他们的贡献——“任何人”也包括你。
* 今天，**开源许可已经走向了标准化**，并且易于使用。我们可以将现有的许可证直接复制-粘贴到项目中。
#### 自由软件，开源软件和免费软件对比
![自由-开源-免费-](https://user-images.githubusercontent.com/100248197/159671212-ea0e018f-bf2a-4a9f-b7ce-381487a79749.png)
#### [OSI已经批准的license](https://opensource.org/licenses/alphabetical)
#### 开源社区流行和被广泛使用的许可证
* Apache License 2.0 (Apache-2.0)
* 3-clause BSD license (BSD-3-Clause)
* 2-clause BSD license (BSD-2-Clause)
* GNU General Public License (GPL)
* GNU Lesser General Public License (LGPL)
* MIT license (MIT)
* Mozilla Public License 2.0 (MPL-2.0)
* Common Development and Distribution License 1.0 (CDDL-1.0)
* Eclipse Public License 2.0 (EPL-2.0)
![top-licenses2021](https://user-images.githubusercontent.com/100248197/159669939-276d74b8-936c-49d2-81e9-4feaa8cdaf9f.png)
#### 流行开源许可证对比
![popular-open-source-software-licenses](https://user-images.githubusercontent.com/100248197/159671403-20e24d35-16bd-48b7-b3b8-45007ac45c27.png)
### 开源组织介绍
代理制的创造，是人类文明的一大进步。开源世界也沿用了这一优秀方法，**开源非盈利基金会**应用而生。
#### 开源非盈利基金会作用
* 处理法律事务
* 向政府申请注册
* 接受社会捐赠
* 孵化开源项目
* 中立信任
* 功能还在不断扩展中
#### 国际开源组织
* [ Apache Software Foundation ](http://www.apache.org/foundation/)
* [Cloud Native Computing Foundation's (CNCF)](https://www.cncf.io/)
* [Linux Foundation](http://www.linuxfoundation.org/about)
* [More...](https://opensource.com/resources/organizations)
#### 国内开源组织
![中国开源组织](https://user-images.githubusercontent.com/100248197/159711268-49eeb6c8-79a8-49e8-a0da-2f0ae62a86b1.png)
**[开放原子开源基金会](http://www.openatom.cn/#/)**  
成立时间： 2020年6月  
2020年初，木兰宽松许可证第二版（MulanPSL v2）通过 OSI 认证，成为中国首个被国际开源社区认可的开源协议；  
2020年8月，工信部等部门联合[Gitee](https://gitee.com/)建设中国独立的开源托管平台；TiDB 开发商 PingCAP、emqttd 开发商 EMQ 等一批国内原生开源创企获得上亿元融资，中国开源产业发展进入快车道；  
2020年6月15日。中国迎来了历史上第一个开源软件基金会——**开放原子开源基金会**。开放原子开源基金会是中国首个，也是目前唯一一个以开源为主题的基金会。根据官方信息，开放原子开源基金会是一个致力于开源产业的**全球性非营利公益机构**，业务范围包括开源软件、开源硬件、开源芯片与开源内容等，为各类开源项目提供中立的知识产权托管服务，以及战略咨询、法务咨询、项目运营和品牌营销服务。基金会介绍，开源基金会是开源项目的孵化器、连接器与倍增器。通过对开源代码的开放治理以便于形成事实标准，连接产学研共建生态，为开源项目找到更多的应用场景。  
开放原子开源基金会设**理事会**、**TOC **与**秘书处**，理事会负责审议和修改基金会章程等；TOC 也即技术监督委员会是其中立的技术决策机构，负责基金会技术相关的决策，以及项目的孵化评审等；秘书处是基金会的执行机构，负责基金会日常事务等工作。至此，开源软件在国内开始受到各行各业的广泛重视。  
2021 年 3 月，国家十四五发展规划中首次提及“开源”，明确指出“支持数字技术开源社区等创新联合体发展，完善开源知识产权和法律体系，鼓励企业开放软件源代码、硬件设计和应用服务”。
### 当下开源软件繁荣景象
* 99%世界500强公司使用开源软件
* 在80%的IT部门增加开源软件的使用
* 在企业软件中有35%是基于开源软件的
* 超过5600万开发者在为从事开源项目
* GIthub上有超过1.4亿开源项目
* 每天约有10000行代码添加到Linux  
![linux-kernel](https://user-images.githubusercontent.com/100248197/159815237-5412a1bc-f763-42ff-8384-b235dc306eb5.png)  
* 服务器操作系统市场被Linux统治
![700px-Operating_systems_used_on_top_500_supercomputers svg](https://user-images.githubusercontent.com/100248197/159817122-d8ff2319-7bbc-40e6-9297-fce0a827018f.png)
* [CNCF开源项目的繁荣](https://devstats.cncf.io/)  

### 开源和云
* 在过去十年左右的时间里，随着云计算在基础设施、数据和服务等多个层次上的采用，开源的趋势也在同步发展。
* 免费和开源软件是云计算的主要驱动力
* 云提供商严重依赖开源软件，如Linux，以及虚拟化软件，如KVM和Xen
* 开源软件同时提供云提供商和云用户的主要优势是它的部署是免费的
* 一切皆为服务


### 开源的误区

## 梧桐PaaS平台探索
[梧桐PaaS平台开源策略](https://github.com/wutong-paas/wutong-tasks/issues/18)

