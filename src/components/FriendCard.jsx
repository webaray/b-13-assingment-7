import Image from 'next/image';
import Link from 'next/link';

const FriendCard = ({ friend }) => {

    return (
        <Link href={`https://b-13-next-assingment-7.vercel.app//friend/${Number(friend.id)}`}>

            <div className="card bg-base-100 shadow-sm hover:shadow-lg transition cursor-pointer">

                <figure className="px-10 pt-10">
                    <Image
                        src={friend.picture}
                        alt={friend.name}
                        width={100}
                        height={100}
                        className="rounded-full"
                    />
                </figure>

                <div className="card-body items-center text-center">
                    <h2 className="card-title">{friend.name}</h2>
                    <p>{friend.days_since_contact} days</p>

                    {/* FIXED TAGS */}
                    <div className="flex gap-2 flex-wrap justify-center">
                        {
                            friend.tags.map((tag, index) => (
                                <span key={index} className="badge bg-base-300 text-base-content badge-outline">
                                    {tag}
                                </span>
                            ))
                        }
                    </div>

                    <div className="card-actions">
                        <button className={`badge  
                            ${friend.status === "overdue" ? "bg-red-500 text-white" : ""}
                            ${friend.status === "on_track" ? "bg-orange-500 text-white" : ""}
                            ${friend.status === "due_soon" ? "bg-green-800 text-white" : ""}
                        `}>
                            {friend.status}
                        </button>
                    </div>
                </div>

            </div>

        </Link>
    );
};

export default FriendCard;