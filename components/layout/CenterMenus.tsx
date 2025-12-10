import AddPost from '../domain/post/AddPost';
import AllPosts from '../domain/post/AllPosts';

export default function CenterMenus({ searchParams }: {
    searchParams?: { cursor?: string }
}) {
    const hasCursor = Boolean(searchParams?.cursor);

    return (
        <div className="flex flex-col gap-4">
            {!hasCursor && <AddPost />}

            <AllPosts />
        </div>
    )
}
