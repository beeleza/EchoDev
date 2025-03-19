import PostListItem from "./PostListItem";

const PostList = () => {
    return (
        <div className="flex flex-col gap-12 mb-8">
            <span className="mt-5 font-medium text-3xl">Recents Posts</span>
            <PostListItem/>
            <PostListItem/>
            <PostListItem/>
            <PostListItem/>
            <PostListItem/>
            <PostListItem/>
            <PostListItem/>
        </div>
    )
}

export default PostList;
