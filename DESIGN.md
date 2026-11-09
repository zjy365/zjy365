---
name: zjy365 · Fold 主页
description: 白纸、真实项目纸样与专属朱红金属夹组成的个人作品集。
colors:
  paper: "#fff"
  ink: "#1b1b1b"
  secondary: "#565653"
  rule: "#d9d9d5"
  accent: "#ec4936"
  accent-ink: "#bf3c2b"
typography:
  display:
    fontFamily: "Instrument Serif, serif"
    fontSize: "190px"
    fontWeight: 400
    lineHeight: "190px"
    letterSpacing: "-0.045em"
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "15px"
  label:
    fontFamily: "IBM Plex Mono, monospace"
    fontSize: "11px"
spacing:
  gutter: "64px"
---

# Design System: zjy365 · Fold

## Overview

这是用户批准并已落地的 A / Fold 主页，视觉中心是 zjy365 大标题、真实项目纸样和 Z·365 弹片夹。以纸面编辑排版容纳软件作品，个性集中于纸样局部，阅读与访问始终清楚。作用域仅为主页，不把此风格强加给已有博客。

权威设计源为 [Paper A 画板](https://app.paper.design/file/01M5YNM32P21JQKE81MJG1WE10/p-4-0)。实现精确值见 `src/app/page.module.css`，结构见 `page.tsx`，交互见 `project-samples.tsx`。项目、头像和联系资料继续以 `src/data/resume.tsx` 为事实源，产品边界见 `PRODUCT.md`。用户最新要求减少箭头，此规则优先于 Paper 中重复的装饰箭头。导航、社交、列表与回顶使用纯文字，在悬停或聚焦时显示细下划线；Selected、Email 和 Open project 保留轻下划线。手机导航仍写明 Say hello。

## Colors

白纸和墨色承载正文，次级灰用于简介，细灰线分隔章节。朱红只强调标题句点、夹子和当前标签；小字链接使用更深的 accent-ink，以保证对比度。关于区采用略暖的浅色纸面，不引入第二套强调色。

## Typography

Instrument Serif 用于大标题、章节标题与局部斜体；Manrope 负责可读正文、导航和项目名；IBM Plex Mono 用于别名与年份。三种字体均通过 Next/font 自托管，避免将品牌字体扩散成所有文本的装饰。

## Layout

桌面容器最大宽 1440px，左右留白使用 gutter；首屏上方为姓名与简介，下方为左侧介绍、右侧纸样。更多项目、About 和联系区顺序向下展开。首页暂时移除 Notes 导航与 About 区文章入口，避免跳转至旧视觉风格；既有博客路由、内容和 SEO 元数据保留。断点为 1199、899、639px，留白依次缩为 40、32、24px。手机将纸样放在介绍正文之前，补充当前项目说明，保留明确入口；项目列表改为标题、年份和说明纵排，不靠整体缩小桌面稿适配。

## Elevation & Depth

纸样以细边框、柔和投影和前后叠放形成厚度。桌面前纸初始旋转 −4°、后纸 7°；指针轻透视最大约 ±1.5°，离开复位。手机缩小倾角。深度服务于纸样关系，不扩展为全屏 WebGL 场景。

## Shapes

主结构以直角纸张和细分隔线为主，头像为圆形。专属夹子使用透明 WebP 静态渲染素材 `public/images/z-365-clip.webp`（768×512，约 49KB），由批准的 PNG 压缩而来，并非实时 Three.js 模型。

## Components

关于区在短简介下直接列出 React、TypeScript、Next.js、Electron、Expo、Agent Harness、MCP。使用横向纯文字列表，窄屏自然换行；不加分类标签、表格或徽章容器。

四个精选项目为 Aster、ScrollExport、vfx-ui、ReplyWink。鼠标悬停、点击或聚焦标签切换；方向键循环，Home/End 到首尾，采用 tablist/tabpanel 和明确焦点环。纸样本身直达项目，切换动画为 380ms，不自动轮播。夹子仅用已有 Framer Motion 实现水平 ±20px 拨动回弹及点击轻摆，触摸保留纵向滚动。减少动态时取消动画、透视和拖动，项目功能仍可用。WeChat 通过原生可展开区域显示二维码，CSS 加号展开后变减号，装饰标记不参与辅助技术朗读。

## Do's and Don'ts

保持真实截图、完整项目与联系入口，不虚构指标；没有公开链接的项目保留文字。保持克制的文字入口，避免恢复重复装饰箭头。

验证使用 `pnpm build`、`pnpm exec tsc --noEmit` 和修改文件的 ESLint 检查；浏览器检查项目切换、键盘操作、微信、减少动态与无 JavaScript 降级。生产采用 Next.js 静态导出。
