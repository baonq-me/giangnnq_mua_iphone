# 🎉 Chúc mừng người mua iPhone 17 Pro

Một trang web chúc mừng được xây dựng bằng React + TypeScript + Vite, thiết kế đẹp mắt với giao diện gradient và hiệu ứng trang trí.

![Trang web chúc mừng](public/screenshot.png)

## 📋 Mục lục

- [Tính năng](#tính-năng)
- [Công nghệ sử dụng](#công-nghệ-sử-dụng)
- [Cài đặt](#cài-đặt)
- [Phát triển](#phát-triển)
- [Build](#build)
- [Triển khai (Deploy)](#triển-khai-deploy)
  - [Deploy với PM2](#deploy-với-pm2)
  - [Deploy với Docker](#deploy-với-docker)
- [Cấu trúc project](#cấu-trúc-project)

## ✨ Tính năng

- Giao diện gradient đẹp mắt với hiệu ứng trang trí
- Responsive design với Tailwind CSS
- Build nhanh với Vite
- Hỗ trợ TypeScript

## 🛠 Công nghệ sử dụng

| Công nghệ     | Vai trò                          |
| ------------- | -------------------------------- |
| React 18      | Thư viện UI chính                |
| TypeScript    | Type-safe JavaScript             |
| Vite 5        | Build tool & dev server          |
| Tailwind CSS  | Utility-first CSS framework      |
| PostCSS       | Xử lý CSS                      |

## 📦 Cài đặt

### Yêu cầu hệ thống

- [Node.js](https://nodejs.org/) >= 18.x
- npm >= 9.x

### Các bước cài đặt

```bash
# Clone repository (nếu có)
git clone <repository-url>
cd new

# Cài đặt dependencies
npm install
```

## 🚀 Phát triển

Chạy server development với hot-reload:

```bash
npm run dev
```

Truy cập: [http://localhost:5173](http://localhost:5173)

## 📦 Build

Build production:

```bash
npm run build
```

File build sẽ được tạo trong thư mục `dist/`.

Xem trước bản build:

```bash
npm run preview
```

## 🌐 Triển khai (Deploy)

### Deploy với PM2

PM2 được sử dụng để chạy Node.js server và giữ ứng dụng luôn chạy trong production:

```bash
# Cài đặt PM2 toàn cục
npm install -g pm2

# Build project
npm run build

# Khởi động server bằng server.js
pm2 start server.js --name "iphone17pro"

# Xem logs
pm2 logs iphone17pro

# Xem trạng thái
pm2 status

# Tự động khởi động lại khi server restart
pm2 startup
pm2 save
```

Hoặc sử dụng script có sẵn:

```bash
chmod +x deploy-pm2.sh
./deploy-pm2.sh
```

#### Quản lý ứng dụng

```bash
# Dừng ứng dụng
pm2 stop iphone17pro

# Khởi động lại ứng dụng
pm2 restart iphone17pro

# Xóa ứng dụng khỏi PM2
pm2 delete iphone17pro

# Xem danh sách tất cả processes
pm2 list
```

### Deploy với Docker

Build và chạy ứng dụng bằng Docker:

```bash
# Build image
docker build -t iphone17pro .

# Chạy container (mặc định port 8888)
docker run -d -p 8888:8888 --name iphone17pro --restart unless-stopped iphone17pro
```

Tùy biến port qua biến môi trường:

```bash
docker run -d -p 3000:3000 -e PORT=3000 --name iphone17pro --restart unless-stopped iphone17pro
```

Hoặc sử dụng Docker Compose:

```bash
# Build và khởi động
docker compose up -d --build

# Xem logs
docker compose logs -f iphone17pro

# Dừng ứng dụng
docker compose down
```

## 📂 Cấu trúc project

```
deploy-pm2.sh          # Script deploy với PM2
docker-compose.yml     # Docker Compose configuration
Dockerfile             # Docker build configuration
index.html             # HTML entry point
package.json           # Dependencies & scripts
postcss.config.js      # PostCSS configuration
server.js              # Node.js production server
tailwind.config.js     # Tailwind CSS configuration
tsconfig.json          # TypeScript configuration
vite.config.ts         # Vite configuration
public/                # Static assets
├── screenshot.png     # Ảnh chụp màn hình
└── iphone17pro.jpg    # Ảnh iPhone 17 Pro
src/                   # Source code
├── App.tsx            # Component chính
├── index.css          # Global styles
└── main.tsx           # App entry point
```

## 📜 Scripts

| Lệnh            | Mô tả                      |
|-----------------|----------------------------|
| `npm run dev`   | Chạy server development    |
| `npm run build` | Build production           |
| `npm run preview` | Xem trước bản build      |

## 👤 Tác giả

Project được tạo để chúc mừng người mua iPhone 17 Pro 🎊

---

Made with ❤️ using React + Vite + Tailwind CSS
