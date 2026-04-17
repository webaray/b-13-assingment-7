"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Loading from "@/components/Loading";
import FriendCard from "../FriendCard";

const Friends = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        fetch("/friend.json")
            .then(res => res.json())
            .then(data => setFriends(data));
    }, []);

      if (friends.length === 0) {
    return <Loading />;
  }

    return (

        <div className="bg-base-200 pb-20">
            <div className='container mx-auto '>
                <h2 className='text-2xl font-semibold pb-4'>Your Friends</h2>

                <div className="grid lg:grid-cols-4 gap-4">

                    {
                        friends.map(friend => (
                           <FriendCard key={friend.id} friend={friend} />

                        ))
                    }
                </div>

            </div>

        </div>
    );
};

export default Friends; 