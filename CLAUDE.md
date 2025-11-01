# 项目运行说明

## 启动方式

这是一个基于Vite的React项目，需要使用开发服务器运行。

### 正确的启动方式

1. 进入项目目录并安装依赖：
```bash
cd career.chenggao.top
npm install
```

2. 启动开发服务器：
```bash
npm run dev
```

3. 在浏览器中访问：http://localhost:5174（如果5173端口被占用，Vite会自动选择下一个可用端口）

### 错误方式
❌ 不要直接双击打开 `index.html` 文件
❌ 不要使用 `file:///` 协议访问
❌ 不要使用 `python -m http.server`（无法正确处理React路由和模块）

## 项目结构

- `career.chenggao.top/` - 主要网站文件
- `assets/` - 编译后的CSS和JS文件
- `images/` - 图片资源（SVG格式为主）
- `standalone-preview.html` - 预览文件

## 添加图片

### 推荐方式
1. 将图片放入 `images/` 目录
2. 使用相对路径引用：`<img src="images/your-image.jpg" />`

### 支持格式
- JPG/PNG - 照片和复杂图像
- SVG - 简单图形和图标（推荐）
- WebP - 现代格式，文件更小

## 技术栈
- React 应用
- Vite 构建
- 单页面应用（SPA）