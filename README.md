# Blog-Nuxt-4 | [Демонстрация проекта](https://blog-nuxt4.netlify.app/)

Этот проект представляет собой **блог**, разработанный в рамках тестового задания.

## Технологии

- **Nuxt:** 4.1.1
- **Vue:** 3.5 (Composition API)
- **TypeScript**
- **Vue Router:** 4.5.1
- **Vite:** 7.1.5
- **TailwindCSS:** 3.4.3
- **Sass:** 1.92.1

## Функционал

1.  **Верстка:** Реализована верстка шаблона блога по [макету в Figma](https://www.figma.com/file/YuLYXnZmLk1U5sKAYjQ0Qy/).
2.  **API:** Настроено взаимодействие с [тестовым API](https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/).
3.  **Модуль блога:**
    - Вывод списка статей.
    - Фронтенд-пагинация для навигации по статьям.
    - Динамические страницы для просмотра отдельных статей.

---

## Установка и запуск

### 1. Установка зависимостей

Убедитесь, что у вас установлен `npm`, `pnpm`, `yarn` или `bun`.

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

### 2. Запуск сервера для разработки

Команда запустит сервер для разработки по адресу `http://localhost:3000`.

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

### 3. Сборка для продакшена

Сборка приложения для развертывания на хостинге.

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

### 4. Локальный просмотр продакшн-сборки

Эта команда позволяет локально запустить и протестировать продакшн-версию вашего приложения.

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Для получения дополнительной информации о развертывании проекта ознакомьтесь с [официальной документацией Nuxt](https://nuxt.com/docs/getting-started/deployment).