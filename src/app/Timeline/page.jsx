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

  const filteredData =
    filter === "All"
      ? timeline
      : timeline.filter((item) => item.type === filter);

  const getIcon = (type) => {
    if (type === "Call") {
      return (
        <div className="w-8 h-8 rounded-md bg-gray-100 flex items-center justify-center text-gray-600">
          <FaPhone className="text-sm" />
        </div>
      );
    }

    if (type === "Text") {
      return (
        <div className="w-8 h-8 rounded-md bg-gray-100 flex items-center justify-center text-gray-500">
          <FaSms className="text-sm" />
        </div>
      );
    }

    if (type === "Video") {
      return (
        <div className="w-8 h-8 rounded-md bg-gray-100 flex items-center justify-center text-gray-700">
          <FaVideo className="text-sm" />
        </div>
      );
    }

    return null;
  };

  const formatDate = (time) => {
    return new Date(time).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-[#f3f4f6] py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Timeline</h1>

        <div className="mb-6">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="select select-sm w-[220px] bg-white border border-gray-200 text-gray-600 focus:outline-none"
          >
            <option value="All">All</option>
            <option value="Call">Call</option>
            <option value="Text">Text</option>
            <option value="Video">Video</option>
          </select>
        </div>

        <div className="space-y-3">
          {filteredData.length === 0 ? (
            <div className="bg-white border border-gray-200 rounded-md p-4 text-sm text-gray-500">
              No interactions yet
            </div>
          ) : (
            filteredData.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-gray-200 rounded-md px-4 py-3 flex items-start gap-3"
              >
                <div className="mt-1">{getIcon(item.type)}</div>

                <div>
                  <h2 className="text-sm text-gray-800">
                    <span className="font-semibold">{item.type}</span>{" "}
                    <span className="text-gray-500">with</span>{" "}
                    <span className="text-gray-700">{item.name}</span>
                  </h2>

                  <p className="text-xs text-gray-400 mt-1">
                    {formatDate(item.time)}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      
<div className=" container mx-auto justify-center
flex mt-10">
  <button
  onClick={() => {
    localStorage.removeItem("timeline");
    setTimeline([]);
  }}
  className="btn btn-error btn-sm mb-4 text-white"
>
  Clear Timeline
</button>
</div>

    </div>
  );
};

export default Timeline;