import type { Bookmark } from "../type/bookmark";

interface BookmarkCardProps {
    bookmark: Bookmark;
    onDelete: (id: number) => void;
    deleting: boolean;
}

export default function BookmarkCard({ bookmark, onDelete, deleting }: BookmarkCardProps) {
    return (
        <div className="border rounded-md bg-slate-50 p-2">
            <div className="flex justify-between">
                <a href={bookmark.url} target="_blank">
                    <h3 className="text-xl">{bookmark.title}</h3>
                    <p className="text-gray-700 text-sm">{bookmark.url}</p>
                </a>
                <button disabled={deleting} onClick={() => onDelete(bookmark.id)} className="cursor-pointer">🗑️</button>
            </div>
            <hr />
            <p>{bookmark.description}</p>
            <div className="flex gap-4 p-2">
                {bookmark.tags.map((tag) => (
                    <span key={tag} className="border rounded-lg bg-sky-50 p-0.5">
                        {tag}
                    </span>
                ))}
            </div>
            <hr />
            <div className="p-1 text-xs">🗓️{bookmark.createdAt}</div>
        </div>
    )
}