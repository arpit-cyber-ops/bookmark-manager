import bookmarks from "./data/bookmark"
import BookmarkCard from "./components/BookmarkCard";

export default function App() {
  return (
    <div className="flex w-full h-screen border" >
      <div className="flex flex-col gap-4 p-4 w-75">
        <h1 className="text-xl font-bold mb-4">Bookmark Manager</h1>
        <h3>Home</h3>
        <h3>Archeived</h3>
      </div>
      <main className="flex flex-col flex-1 border ">
        <div className="p-4 flex justify-between border">
          <input type="text" placeholder="  Search by title..." className="border rounded-sm" />
          <button className="bg-green-900 text-white w-35 h-8 rounded-sm">+ Add Bookmark</button>
        </div>
        <div className=" bg-sky-50">
          <h2 className="text-2xl font-bold m-4">All Bookmarks</h2>
          <div className="grid grid-cols-3 border gap-4 p-4">
            {bookmarks.map((bookmark) => (
              <BookmarkCard
                key={bookmark.id}
                bookmark={bookmark}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
