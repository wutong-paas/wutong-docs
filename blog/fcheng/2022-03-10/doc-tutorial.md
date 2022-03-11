---
slug: fcheng/20220309/doc-tutorial
title: 产品文档编制手册
authors: fcheng
tags: [手册, 文档]
---
## 新建产品文档

新建一个`markdown`文件 `docs/intro.md`，文件内容如下:

```md title="docs/intro.md"
# 大家好

这是我的第一个 **梧桐PaaS平台文档**!
```
<!--truncate-->

这个新文档就可以同过访问 `http://localhost:3000/docs/intro`进行浏览。

## 配置侧边栏信息

在docs目录下新建文件和文件夹，对应的侧边栏会**自动建立**。可以通过在新建文件中增加元数据来定制侧边栏的显示内容和排列顺序，如下所示：

```md title="docs/intro.md" {1-5}
sidebar_label: 产品介绍
title: 梧桐PaaS产品介绍
sidebar_position: 1
slug: intro
description: 云原生应用开发和交付的最佳实践，简单易用。

# 大家好

这是我的第一个 **梧桐PaaS平台文档**!
```
- **sidebar_label**：侧边栏显示内容
- **title**：文档标题
- **sidebar_position**: 文档在侧边栏的排序
- **slug**: 浏览文档时的相对path，`slug: intro` 对应的文档访问路径为：http://localhost:3000/docs/intro
- **description**: 文档的描述信息
