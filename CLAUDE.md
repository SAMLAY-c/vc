# 项目运行说明

## 启动方式

由于CORS策略限制，不能直接打开 `index.html` 文件。需要通过HTTP服务器访问。

### 正确的启动方式

1. 启动本地服务器：
```bash
cd career.chenggao.top
python -m http.server 8000
```

2. 在浏览器中访问：http://localhost:8000

### 错误方式
❌ 不要直接双击打开 `index.html` 文件
❌ 不要使用 `file:///` 协议访问

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