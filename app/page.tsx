"use client"
import initialBookmark from "./data/bookmark"
import BookmarkCard from "./components/BookmarkCard";
import { useState } from "react";

interface form {
  title: string,
  url: string,
  description: string,
  category: string
}

export default function App() {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [formData, setFormData] = useState<form>({
    title: "",
    url: "",
    description: "",
    category: ""
  });
  const [bookmarks, setBookmarks] = useState(initialBookmark);
  function deleteCard(deleteId: number) {
    setBookmarks(bookmarks.filter((bookmark) => bookmark.id !== deleteId))
  }
  function handleSave() {
    if (!formData.title.trim() || !formData.url.trim()) {
      return;
    }
    let formattedUrl = formData.url;
    if (!formData.url.startsWith('http://') && !formData.url.startsWith('https://')) {
      formattedUrl = 'https://' + formData.url;
    }
    setBookmarks([...bookmarks, {
      id: bookmarks.length + 1,
      title: formData.title,
      url: formattedUrl,
      tags: [formData.category],
      description: formData.description,
      createdAt: ""
    }]);
    setFormData({
      title: "",
      url: "",
      description: "",
      category: "",
    });
    setShowForm(false);
  }
  return (
    <div className="flex w-full h-screen border" >
      <div className="flex flex-col gap-4 p-4 w-75">
        <h1 className="text-xl font-bold mb-4">Bookmark Manager</h1>
        <h3>Home</h3>
        <h3>Archeived</h3>
      </div>
      <main className="flex flex-col flex-1 border ">
        <div className="p-4 flex justify-between">
          <input type="text" placeholder="  Search by title..." className="border rounded-sm" />
          <button className="bg-green-900 text-white w-35 h-8 rounded-sm cursor-pointer" onClick={() => setShowForm(!showForm)}>+ Add Bookmark</button>
        </div>
        {showForm && (
          <div className="m-2 flex flex-col justify-center items-center border gap-4 p-4">

            <div>
              <label htmlFor="title">Title: </label>
              <input
                className="border"
                id="title"
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({
                  ...formData,
                  title: e.target.value
                })} />
            </div>

            <div>
              <label htmlFor="url">URL: </label>
              <input
                className="border"
                type="text"
                id="url"
                value={formData.url}
                onChange={(e) => setFormData({
                  ...formData,
                  url: e.target.value
                })} />
            </div>

            <div>
              <label htmlFor="description">Description: </label>
              <input
                className="border"
                id="description"
                type="text"
                value={formData.description}
                onChange={(e) => setFormData({
                  ...formData,
                  description: e.target.value
                })} />
            </div>

            <div>
              <label htmlFor="category">Category: </label>
              <input
                className="border"
                id="category"
                type="text"
                value={formData.category}
                onChange={(e) => setFormData({
                  ...formData,
                  category: e.target.value
                })} />
            </div>

            <button className="border rounded-2xl p-0.5 cursor-pointer"
              onClick={handleSave}>
              Save
            </button>
          </div>
        )}
        <div className=" bg-sky-50">
          <h2 className="text-2xl font-bold m-4">All Bookmarks</h2>
          <div className="grid grid-cols-3 gap-4 p-4">
            {bookmarks.map((bookmark) => (
              <BookmarkCard
                key={bookmark.id}
                bookmark={bookmark}
                onDelete={deleteCard}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
