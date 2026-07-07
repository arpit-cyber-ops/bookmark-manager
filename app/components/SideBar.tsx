import type { Bookmark } from "../type/bookmark";

interface sideBarProps {
    bookmarks: Bookmark[];
    onClick: (e: React.ChangeEvent<HTMLInputElement>, item: string) => void;
}

export default function SideBar({ bookmarks, onClick }: sideBarProps) {
    const tagArray: string[] = [];
    for (const bookmark of bookmarks) {
        for (const tag of bookmark.tags) {
            if (!tagArray.includes(tag)) {
                tagArray.push(tag);
            }
        }
    }
    return (
        <div className=" flex flex-col gap-2">
            <div className="
            flex gap-2
            hover:bg-sky-50
            hover:scale-105
            transition-transform
            ">
                <input
                    type="checkbox"
                    id="All"
                    onChange={(e) => onClick(e, "All")}
                    defaultChecked
                    className="cursor-pointer"
                />
                <label htmlFor="All" className="cursor-pointer flex-1">ALL</label>
            </div>
            {tagArray.map((tag) => (
                <div key={tag} className="flex gap-2 hover:scale-105 transition-transform hover:bg-sky-50">
                    <input
                        type="checkbox"
                        id={tag}
                        onChange={(e) => onClick(e, tag)}
                        className="cursor-pointer"
                    />
                    <label htmlFor={tag} className="cursor-pointer flex-1">{tag}</label>
                </div>
            ))}
        </div>
    )
}