import UserCard from "../components/Cards/UserCard";
import useGetFeed from "../hooks/useGetFeed";
import { useGlobalStore } from "../store/useStore";

const Feed = () => {
    useGetFeed();
    const { feed } = useGlobalStore();

    return (
        <div className="flex-1 h-full flex flex-col items-center justify-center overflow-hidden relative my-10 mx-3">
            {feed?.length === 0 ? (
                <div className="text-center">
                    <h2 className="sm:text-3xl text-2xl font-bold">No New Users Found!</h2>
                    <img
                        loading="lazy"
                        src="/assets/empty-feed.svg"
                        alt="user-not-found"
                        className="block mx-auto w-96"
                    />
                </div>
            ) : (
                <div className="grid place-items-center">
                    {feed?.map((user, index) => (
                        <UserCard
                            key={index}
                            user={user}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Feed;
