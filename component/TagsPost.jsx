import TagsColor from "../utils/TagsColor";

function TagsPost({ tags }) {
    return (
        <>
            {tags.map((tag, index) => (
                <span key={index} className={`badge p-2 text-bg-danger mx-2 ${TagsColor(tag)}`}>{tag}</span>
            ))}
        </>
    );

}

export default TagsPost;