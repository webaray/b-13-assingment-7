"use client";

import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const ActionButtons = ({ friend }) => {
  const router = useRouter();

  const handleAction = (type) => {
    const newActivity = {
      id: Date.now(),
      friendId: friend.id,
      name: friend.name,
      type,
      time: new Date().toISOString(),
    };

    const existing = JSON.parse(localStorage.getItem("timeline")) || [];
    const updated = [newActivity, ...existing];

    localStorage.setItem("timeline", JSON.stringify(updated));

    toast.success(`${type} added to timeline`);

    // router.push("/timeline");
  };

  return (
    <div className="grid grid-cols-3 gap-3 mt-4">
      <button onClick={() => handleAction("call")} className="btn flex flex-col h-20">
       📞  Call
      </button>

      <button onClick={() => handleAction("text")} className="btn flex flex-col h-20">
        💬 Text
      </button>

      <button onClick={() => handleAction("video")} className="btn flex flex-col h-20">
        🎥 Video
      </button>
    </div>
  );
};

export default ActionButtons;