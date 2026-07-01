import type { Bookmark } from "../type/bookmark";

const bookmarks: Bookmark[] = [
  {
    id: 1,
    title: "React Documentation",
    url: "https://react.dev",
    description:
      "Official documentation for learning React, hooks, and modern React patterns.",
    tags: ["React", "Frontend"],
    createdAt: "2026-06-30",
  },
  {
    id: 2,
    title: "Next.js",
    url: "https://nextjs.org",
    description:
      "Build production-ready React applications with routing, server components, and more.",
    tags: ["Next.js", "React"],
    createdAt: "2026-06-28",
  },
  {
    id: 3,
    title: "MDN Web Docs",
    url: "https://developer.mozilla.org",
    description:
      "Comprehensive reference for HTML, CSS, JavaScript, and Web APIs.",
    tags: ["HTML", "CSS", "JavaScript"],
    createdAt: "2026-06-25",
  },
  {
    id: 4,
    title: "Tailwind CSS",
    url: "https://tailwindcss.com",
    description:
      "A utility-first CSS framework for building modern user interfaces quickly.",
    tags: ["Tailwind", "CSS"],
    createdAt: "2026-06-22",
  },
];

export default bookmarks;