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
        <div>
            <input 
                type="checkbox" 
                id="All"
                onChange={(e) => onClick(e, "All")}
                defaultChecked
            />
            <label htmlFor="All">ALL</label>
            {tagArray.map((tag) => (
                <div key={tag}>
                    <input 
                        type="checkbox"
                        id={tag}
                        onChange={(e) => onClick(e, tag)}
                        />
                    <label htmlFor={tag}>{tag}</label>
                </div>
            ))}
        </div>
    )
}