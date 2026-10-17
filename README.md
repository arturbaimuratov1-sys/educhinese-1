# EduChinese — демо-лендинг (Актобе)

Статичный сайт без сборки и backend: `index.html` + `styles.css` + `app.js` + `site-content.js`.
Открыть: двойной клик по `index.html` или `npx serve .` / любой статичный сервер.

## Что править
- **Тексты, контакты, фото, демо-заметки** — `site-content.js` (объект `SITE_CONTENT`, с комментариями).
- **Разметка секций** — `index.html` (якоря: `#for-whom #programs #steps #materials #teachers #reviews #faq #lead`).
- **Цвета/шрифты/отступы** — CSS-переменные вверху `styles.css`.

## Честные правила демо
- Настоящий WhatsApp/телефон — только подтверждённый, только в `site-content.js`. Пока пусто — форма работает в демо-режиме и никуда ничего не отправляет.
- Цены, стаж, число учеников, отзывы, сертификаты не выдумывать. Демо-примеры помечены бейджами «Пример демо» / «Демо».
- Фото — иллюстративные Pexels с подписью автора, не выдавать за преподавателей.
- Стоимость разработки (60–80 тыс. тенге) на сайте не указывается.

## Дизайн-система
- Фон `#FFFBF0`, текст `#14342B`, CTA `#C24E0C` (AA), декор `#E86A1C`, зелёные плашки `#1D5C4D/#12372A`.
- Шрифты (кириллица): Nunito (заголовки), Manrope (текст), Caveat (рукописные пометки).
- Радиусы: карточки 24px, кнопки 16px, пилюли 999px. Тень `0 12px 32px rgba(20,52,43,.08)`.
- Компоненты-адаптации: Magic-UI `marquee` → CSS-бегущая строка; 21st `accordion` → доступный `button+aria-expanded`; hero — собственная композиция (фото + SVG 学).

## Проверка
- Ширины 360/390/768/1440, клавиатура (Tab/Enter), `prefers-reduced-motion`, консоль без ошибок.
- Скриншоты: см. отчёт агента в чате (desktop + mobile).

## Публикация на Cloudflare Pages (через GitHub)
1. Закоммить и запушить этот каталог в `https://github.com/arturbaimuratov1-sys/educhinese-1`
   (ветка `main`, корень репозитория = корень сайта: `index.html` рядом с README).
2. Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git →
   выбрать `educhinese-1` → Framework preset: **None** → Build command: **пусто** →
   Build output directory: **`/`** (или `.`) → Save and Deploy.
3. Сборка не нужна: сайт полностью статичный (HTML+CSS+JS, без npm).
   Проверка после деплоя: открыть `https://<project>.pages.dev`, пройти форму и FAQ.
4. Свой домен (позже): Pages → Custom domains → Setup a custom domain.
