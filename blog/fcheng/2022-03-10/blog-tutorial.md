---
slug: fcheng/20220309/blog-tutorial
title: 技术博客编制手册
authors: fcheng
tags: [手册, 博客]
---

新建一个`markdown`文件 `blog/user/datetime/blog-tutorial.md`，文件内容如下:

```md title="blog/user/datetime/blog-tutorial.md"
# 大家好
这是我的第一个 梧桐PaaS **技术博客**!
```
<!--truncate-->
这个新文档就可以通过访问 `http://localhost:3000/blog/user/datetime/blog-tutorial`进行浏览。

## 配置文档信息

在docs目录下新建文件和文件夹，对应的侧边栏会**自动建立**。可以通过在新建文件中增加元数据来定制侧边栏的显示内容和排列顺序，如下所示：

```md title="blog/user/datetime/blog-tutorial.md" {1-5}
---
slug: fcheng/20220309/blog-tutorial
title: 技术博客编制手册
authors: fcheng
tags: [手册, 博客]
---

# 大家好
这是我的第一个 **梧桐PaaS平台文档**!
```
### 说明
- **slug**: 浏览文档时的相对path，`fcheng/20220309/blog-tutorial` 对应的文档访问路径为：http://localhost:3000/blog/fcheng/20220309/blog-tutorial。slug的命名规范建议：{用户名}/{日期}/{博客文件名}
- **title**：博客标题，根据博客内容定义的博客标题，博客列表和博客标题中显示。
- **authors**: 定义的用户id，用户信息会显示在博客内容的最前面。
- **tags**: 标签列表，博客可以通过标签去筛选。

