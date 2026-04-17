"use client";
import { useEffect, useState } from "react";
import { FaPhone, FaSms, FaVideo } from "react-icons/fa";

const Timeline = () => {
  const [timeline, setTimeline] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("timeline")) || [];
    setTimeline(data);
  }, []);

  // 👉 Filter logic
  const filteredData =
    filter === "All"
      ? timeline
      : timeline.filter((item) => item.type === filter);

  // 👉 Icon based on type
  const getIcon = (type) => {
    if (type === "Call") return <FaPhone />;
    if (type === "Text") return <FaSms />;
    if (type === "Video") return <FaVideo />;
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Timeline</h1>

      {/* FILTER BUTTONS */}
      <div className="flex gap-2 mb-4">
        {["All", "Call", "Text", "Video"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`btn ${
              filter === f ? "btn-primary" : "btn-outline"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* TIMELINE LIST */}
      <div className="space-y-4">
        {filteredData.length === 0 && (
          <p className="text-gray-500">No interactions yet</p>
        )}

        {filteredData.map((friend) => (
          <div
            key={friend.id}
            className="card shadow p-4 flex gap-4"
          >
            <div className="text-xl">{getIcon(friend.type)}</div>

            <div>
              <h2 className="font-bold">{friend.name}</h2>
              <p className="text-sm text-gray-500">
                {new Date(friend.time).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;