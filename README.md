# react-poc (React + Router + Axios)

## Yêu cầu
- Node.js 18+ (khuyến nghị Node 20, xem `.nvmrc`)

## Chạy dự án
```bash
npm install
cp .env.example .env
npm run dev
```

## Tailwind CSS
Đã cấu hình Tailwind + PostCSS:
- `tailwind.config.cjs`: màu + breakpoint responsive (screens)
- `postcss.config.cjs`
- `src/styles.css`: import Tailwind directives

## Table dùng chung (AG Grid)
- Component dùng chung: `src/ui/shared/DataTable.tsx`
- Ví dụ usage: trang Users dùng `UsersGrid` -> `DataTable`

## Cấu hình gọi BE
- `VITE_API_BASE_URL`: base URL cho Axios (mặc định `/api`).
- `VITE_DEV_PROXY_TARGET`: nếu set, Vite sẽ proxy `/api/*` sang BE để tránh CORS khi dev.

Ví dụ:
```env
VITE_API_BASE_URL=http://localhost:8080
```
Hoặc dùng proxy (giữ `VITE_API_BASE_URL` trống):
```env
VITE_DEV_PROXY_TARGET=http://localhost:8080
```

## Routes có sẵn
- `/` Home: có nút gọi `GET /health`
- `/users` Users: gọi `GET /users`
- `/about` About
