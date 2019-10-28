# 浙江大学苹果俱乐部

本站目前部署在 <https://zju-apple.club>，并已配置了 Webhook 能够随 GitHub 自动更新网站。

## 在线编辑

本站的所有文章都使用了 Markdown 格式（[参考文档](https://www.appinn.com/markdown/)），图片建议链接外部图床（如 <https://sm.ms>）。如果需要创建新的文章，请参考以下步骤：

1. 进入 `_posts` 目录，点击右上角 Create new file 按钮
2. 将文件按照 `1970-01-01-title.md` 的格式命名，该文章的网址将成为 <https://zju-apple.club/1970/01/01/title>（因为服务器时间为 UTC，为确保文章能够发出，北京时间 08:00 前请使用前一天的日期）
3. 文章内容请使用下述模板：

```markdown
---
title: 标题
tagline: 副标题（可省略）
author: 作者
category: 分类
---

正文
```

## 本地构建

本章节介绍如何在本地构建静态网站，主要供研发团队参考：

1. 本站使用了静态网站生成工具 [Jekyll](https://jekyllrb.com)，Jekyll 4.0+ 依赖 Ruby 2.4+，安装请执行：`gem install jekyll`
2. Rakefile (Ruby Makefile) 已配置相关任务，因此新建文章可执行 `rake post title="x" [date="xxxx-xx-xx"]`，新建普通页面可执行 `rake page name="x.html"`
3. 执行 `jekyll serve` 默认会在 127.0.0.1:4000 运行一个开发服务器
4. 另外，`webhook` 目录下是为 GitHub Webhook 配置的自动拉取部署服务，使用了 Web 框架 [Sinatra](http://www.sinatrarb.com)，Sinatra 2.0+ 依赖 Ruby 2.2+
