# Bookmark Manager

A full-stack bookmark management application built with Next.js, TypeScript, Prisma ORM, and PostgreSQL.
Save, organize, search, and filter your bookmarks through a simple and clean interface.

I built this project while learning full-stack development with Next.js. The goal was to understand how React, APIs, databases, and deployment work together in a real application.

## 🚀 Live Demo

**[https://bookmark-manager-chi-ten.vercel.app/](https://bookmark-manager-chi-ten.vercel.app/)**

## 📸 Screenshot

![Bookmark Manager](./public/screenshot.png)

## ✨ Features

- Create, read, and delete bookmarks
- Search bookmarks by title in real-time
- Filter bookmarks by multiple categories
- Persistent storage with PostgreSQL
- Form validation to prevent invalid submissions
- Loading states and error handling
- Clean UI with Tailwind CSS

## 🛠️ Tech Stack

**Frontend:**
- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- React Hooks (useState, useEffect)

**Backend:**
- Next.js Route Handlers
- Prisma ORM
- PostgreSQL

**Deployment:**
- Development: Local PostgreSQL
- Production: Vercel + Neon PostgreSQL

## 🏗️ Architecture

```text
User
   │
React UI (TypeScript)
   │
fetch()
   │
Next.js Route Handlers
   │
Prisma ORM
   │
PostgreSQL Database
```

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/arpit-cyber-ops/bookmark-manager.git
cd bookmark-manager
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
   Create a `.env` file in the root directory:
```env
DATABASE_URL="postgresql://username:password@localhost:5432/bookmark_db"
```

4. Run database migrations:
```bash
npx prisma migrate dev
```

5. Start the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📖 Usage

1. **Add a Bookmark**: Click "+ Add Bookmark", fill in title, URL, description, and category, then click "Save"
2. **Search**: Type in the search bar to filter by title
3. **Filter by Category**: Use sidebar checkboxes to filter by one or more categories
4. **Delete**: Click the trash icon to remove a bookmark
5. **Visit Link**: Click a bookmark title to open the URL

## 💡 What I Learned

- Managing state with React Hooks and lifting state up
- Building REST APIs using Next.js Route Handlers
- Using Prisma ORM with PostgreSQL
- Fetching data with async/await and useEffect
- Handling loading states and API errors
- Deploying a full-stack application with Vercel
- Understanding the request-response cycle between frontend and backend

## ⚠️ Known Issues

This project was built as part of my learning journey. There are a few known limitations:

- Search and category filters currently work independently (not combined)
- Duplicate bookmarks may appear when multiple selected categories match
- The "All" checkbox synchronization needs improvement
- No edit functionality yet
- Mobile responsiveness could be improved

These are documented as planned future improvements.

## 🚀 Future Improvements

- Combine search and category filtering
- Fix duplicate bookmark rendering
- Synchronize the "All" category checkbox
- Add edit bookmark functionality
- Complete archive feature
- Add user authentication
- Improve mobile responsiveness

---

**Note:** This project was built as part of my learning journey. While there are still improvements to be made, I chose to document them openly because documenting limitations is an important part of software development.