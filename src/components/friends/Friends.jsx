"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const Friends = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        fetch("/friend.json")
            .then(res => res.json())
            .then(data => setFriends(data));
    }, []);

    return (

        <div className="bg-base-200 pb-20">
            <div className='container mx-auto '>
                <h2 className='text-2xl font-semibold pb-4'>Your Friends</h2>

                <div className="grid lg:grid-cols-4 gap-4">

                    {
                        friends.map(friend => (
                            <div key={friend.id} className="card bg-base-100 shadow-sm ">
                                <figure className="px-10 pt-10">
                                    <Image
                                        src={friend.picture}
                                        alt={friend.name}
                                        width={100}
                                        height={100}
                                        className="rounded-full" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">{friend.name}</h2>
                                    <p>{friend.days_since_contact} days</p>

                                    {
                                        friend.tags.map( () =>{
                                        <p>{friend.tags}</p>
                                        })
                                    }

                                    <div className="card-actions">
                                        <button className={`badge  
                                     ${friend.status === "overdue" ? "rounded-full text-sm bg-red-500  text-white" : ""}
                                     ${friend.status === "on_track" ? "rounded-full text-sm bg-orange-500 text-white" : ""}
                                     ${friend.status === "due_soon" ? "text-sm bg-green-800 rounded-full text-white" : ""}
                                            `}>
                                            {friend.status}
                                        </button>
                                    </div>
                                </div>
                            </div>

                        ))
                    }
                </div>

            </div>

        </div>
    );
};

export default Friends;