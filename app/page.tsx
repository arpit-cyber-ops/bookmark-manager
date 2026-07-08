"use client"
import BookmarkCard from "./components/BookmarkCard";
import { useState, useEffect } from "react";
import type { Bookmark } from "./type/bookmark";
import SideBar from "./components/SideBar";
import { POST } from "./api/bookmarks/route";


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

  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);

  useEffect(() => {
    async function fetchBookmarks(){

      const response = await fetch("/api/bookmarks");
      const data = await response.json();

      const formattedBookmarks = data.map((bookmark:any) => ({
        id: bookmark.id,
        title: bookmark.title,
        url: bookmark.url,
        tags: [bookmark.category],
        description: bookmark.description,
        createdAt: bookmark.createdAt,
        isArchived: bookmark.isArchived,
      }))

      setBookmarks(formattedBookmarks);
    }

    fetchBookmarks();
  }, []);

  async function deleteCard(deleteId: number) {
    const response = await fetch("/api/bookmarks", {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        id: deleteId,
      }),
    });
    const data = await response.json();
    setBookmarks(prev => prev.filter((bookmark) => bookmark.id !== deleteId))
  }

  // Search Bar 

  const [searchTerm, setSearchterm] = useState<string>("");

  const filteredBookmarks: Bookmark[] = bookmarks.filter((bookmark) => bookmark.title.toLowerCase().includes(searchTerm.toLowerCase()));

  // Save Button

  async function handleSave() {
    if (!formData.title.trim() || !formData.url.trim()) {
      return;
    }
    let formattedUrl = formData.url;
    if (
      !formData.url.startsWith('http://') && 
      !formData.url.startsWith('https://')
    ) {
      formattedUrl = 'https://' + formData.url;
    }

    const bookmarkToSave = {
      ...formData,
      url: formattedUrl,
    };

    const response = await fetch("/api/bookmarks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(bookmarkToSave),
    });

    const data = await response.json();

    const newBookmark: Bookmark = {
      id: data.id,
      title: data.title,
      url: data.url,
      tags: [data.category],
      description: data.description,
      createdAt: data.createdAt,
      isArchived: data.isArchived,
    };

    setBookmarks(prev => [...prev, newBookmark]);
    setFormData({
      title: "",
      url: "",
      description: "",
      category: "",
    });
    setShowForm(false);
  }

  // Side Bar - category Search

  const [selectedCategory, setSelectedCategory] = useState<string[]>(["All"]);

  const categoryFilter: Bookmark[] = [];
  for (const bookmark of bookmarks) {
    for (const tag of bookmark.tags) {
      if (selectedCategory.includes(tag)) {
        categoryFilter.push(bookmark);
      }
    }
  }

  function handleClick(e: React.ChangeEvent<HTMLInputElement>, item: string) {
    if (e.target.checked) {
      setSelectedCategory(prev => [...prev, item]);
    }
    else {
      setSelectedCategory(prev => prev.filter(i => i !== item))
    }
  };

  return (
    <div className="flex w-full h-screen border" >

      {/* Side Bar and Main Heading */}

      <div className="flex flex-col gap-4 p-4 w-75">
        <h1 className="text-xl font-bold mb-4">Bookmark Manager</h1>
        <h3>Home</h3>
        <h3>Archeived</h3>
        <hr />
        <p className="font-light">Tags</p>
        <div>
          <SideBar bookmarks={bookmarks} onClick={handleClick} />
        </div>
      </div>
      <main className="flex flex-col flex-1 border ">

      {/* Add Bookmark Button and Search Bar */}

        <div className="p-4 flex justify-between">
          <input type="text" placeholder="  Search by title..." className="border rounded-sm hover:scale-105 px-2 transition-transform" onChange={(e) => setSearchterm(e.target.value)} />
          <button className="bg-green-900 text-white w-35 h-8 rounded-md cursor-pointer hover:scale-110 transition-transform" onClick={() => setShowForm(!showForm)}>+ Add Bookmark</button>
        </div>

      {/* Form Structure */}

        {showForm && (
          <div className="m-2 flex flex-col justify-center items-center border gap-4 p-4">

            <div>
              <label htmlFor="title">Title: </label>
              <input
                className="border px-1 rounded-md"
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
                className="border px-1 rounded-md"
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
                className="border px-1 rounded-md"
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
                className="border px-1 rounded-md"
                id="category"
                type="text"
                value={formData.category}
                onChange={(e) => setFormData({
                  ...formData,
                  category: e.target.value
                })} />
            </div>

          {/* Save Button */}

            <button className="border rounded-2xl p-1.5 cursor-pointer hover:scale-110 transition-transform hover:bg-sky-100"
              onClick={handleSave}>
              Save
            </button>
          </div>
        )}

        {/* Card Structure */}

        <div className=" bg-sky-50">
          <h2 className="text-2xl font-bold m-4">All Bookmarks</h2>
          <div className="grid grid-cols-3 gap-4 p-4">
            {selectedCategory.includes("All") ? (
                filteredBookmarks.map((bookmark) => (
                  <BookmarkCard
                    key={bookmark.id}
                    bookmark={bookmark}
                    onDelete={deleteCard}
                  />
                ))
            ) : (
              categoryFilter.map((bookmark) => (
                <BookmarkCard
                    key={bookmark.id}
                    bookmark={bookmark}
                    onDelete={deleteCard}
                  />
              ))
            )
            }
          </div>
        </div>
      </main>

    </div>
  )
}
