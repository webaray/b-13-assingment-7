import Image from "next/image";

const FriendDetailsPage = async ({ params }) => {
  const { id } = params;

  const res = await fetch("http://localhost:3000/friend.json");
  
  const friends = await res.json();

  const friend = friends.find((friend) => Number(friend.id) === Number(id));

  // ✅ SAFE GUARD (IMPORTANT)
//   if (!friend) {
//     return <div className="p-6">Friend not found</div>;
//   }

  return (
    <div className="container mx-auto p-6 bg-base-200 min-h-screen">
      <div className="grid lg:grid-cols-3 gap-6">

        {/* LEFT */}
        <div className="card bg-base-100 shadow-md p-6 items-center text-center">

          {/* <Image
            src={friend.picture}
            alt={friend.name}
            width={100}
            height={100}
            className="rounded-full"
          /> */}

          {/* <h2 className="text-xl font-bold mt-3">{friend.name}</h2> */}

          <span className="badge bg-red-500 text-white mt-2">
            {friend.status}
          </span>

          <div className="flex gap-2 mt-2 flex-wrap justify-center">
            {friend.tags.map((tag, i) => (
              <span key={i} className="badge badge-outline">
                {tag}
              </span>
            ))}
          </div>

          <p className="italic text-gray-500 mt-3">
            {/* "{friend.bio}" */}
          </p>

          <p className="text-sm text-gray-400 mt-2">
            {friend.email}
          </p>
        </div>

        {/* RIGHT */}
        <div className="lg:col-span-2 space-y-6">

          <div className="grid md:grid-cols-3 gap-4">

            <div className="card bg-base-100 shadow-md p-4 text-center">
              <h2 className="text-3xl font-bold">
                {friend.days_since_contact}
              </h2>
              <p>Days Since Contact</p>
            </div>

            <div className="card bg-base-100 shadow-md p-4 text-center">
              <h2 className="text-3xl font-bold">
                {friend.goal}
              </h2>
              <p>Goal (Days)</p>
            </div>

            <div className="card bg-base-100 shadow-md p-4 text-center">
              <h2 className="text-xl font-bold">
                {friend.next_due_date}
              </h2>
              <p>Next Due</p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default FriendDetailsPage;