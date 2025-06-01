# DigitalNomadsTaiwan 網站備份

## 備份資訊
- 備份時間: 2025年6月1日 05:30:39
- 備份版本: DNT_Website_backup_20250601_053039
- 備份內容: 完整網站文件

## 包含文件

### HTML 頁面:
- `preview.html` - 主頁面（完整網站首頁）
- `join-us.html` - 加入我們（職位招募頁面）
- `growth-journey.html` - 成長旅程（4層級成長體系）
- `application-form.html` - 申請表單（多步驟申請流程）
- `team-roadmap.html` - 團隊路線圖（發展時間軸）
- `faq-section.html` - FAQ頁面（常見問題）
- `mobile-preview.html` - 手機預覽頁面
- `preview_backup.html` - 備份頁面

### 樣式文件:
- `styles/brand.css` - 品牌CSS系統（Corporate Identity System）
- `styles/globals.css` - 全域樣式文件

### 資源文件:
- `asset/Logo.png` - DigitalNomadsTaiwan 品牌Logo

### 配置文件:
- `package.json` - 專案依賴配置
- `tailwind.config.js` - Tailwind CSS 配置
- `next.config.js` - Next.js 配置
- `postcss.config.js` - PostCSS 配置
- `tsconfig.json` - TypeScript 配置
- `README.md` - 專案說明文件

### Pages 目錄:
- `pages/index.tsx` - Next.js 首頁
- `pages/positions.tsx` - 職位頁面
- `pages/_app.tsx` - Next.js App 配置

## 功能特色
✅ **統一導航欄** - 所有頁面都有一致的導航體驗
✅ **雙語支持** - 中英文切換功能
✅ **響應式設計** - 支援桌面和手機版本
✅ **品牌一致性** - 使用統一的品牌CSS系統
✅ **互動功能** - 表單、模態框、動畫效果

## 還原說明

### 方法一：本地HTTP服務器
1. 將備份文件複製到目標目錄
2. 在終端機中進入目標目錄
3. 啟動HTTP服務器：
   ```bash
   python3 -m http.server 8000
   ```
4. 在瀏覽器中訪問：`http://localhost:8000/preview.html`

### 方法二：直接開啟文件
1. 直接在瀏覽器中開啟HTML文件
2. 注意：某些功能可能需要HTTP服務器環境

## 頁面訪問順序建議
1. **開始** → `preview.html` (主頁面)
2. **了解** → `team-roadmap.html` (路線圖)
3. **參與** → `join-us.html` (加入我們)
4. **成長** → `growth-journey.html` (成長體系)
5. **申請** → `application-form.html` (申請表單)

## 技術規格
- **前端框架**: HTML5, CSS3, JavaScript
- **樣式系統**: Tailwind CSS + 自定義品牌CSS
- **字體**: Barlow (英文), Noto Sans TC (中文)
- **圖標**: Font Awesome
- **響應式**: Mobile-first 設計
- **瀏覽器支援**: Chrome, Firefox, Safari, Edge

## 聯絡資訊
如有問題請聯絡 DigitalNomadsTaiwan 開發團隊。 