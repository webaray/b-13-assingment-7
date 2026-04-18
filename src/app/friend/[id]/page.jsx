import ActionButtons from "@/components/ActionButtons";
import Image from "next/image";

const FriendDetailsPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch("https://b-13-next-assingment-7.vercel.app/friend.json");
  const data = await res.json();
  const friend = data?.find((f) => Number(f.id) === Number(id));

  console.log(friend);

  // ✅ SAFE GUARD — return early if friend not found
  if (!friend) {
    return <div className="p-6">Friend not found</div>;
  }

  return (
    <div className="container mx-auto p-6 bg-base-200 jusctify-center py-10">

      <div className="grid lg:grid-cols-3 gap-6">

        {/* LEFT SIDE PROFILE */}
        <div className="card bg-base-100 shadow-md p-6 items-center text-center">

          <Image
            src={friend.picture}
            alt={friend.name}
            width={100}
            height={100}
            className="rounded-full"
          />

          <h2 className="text-xl font-bold mt-3">{friend.name}</h2>

          {/* STATUS */}
          <span className="badge bg-red-500 text-white mt-2">
            {friend.status}
          </span>

          {/* TAG */}
          <span className="badge bg-green-200 text-green-800 mt-2">
            {friend.tags[0]}
          </span>

          <p className="italic text-gray-500 mt-3">
            "{friend.bio}"
          </p>

          <p className="text-sm text-gray-400 mt-2">
            Preferred: {friend.email}
          </p>

            {/* ACTION BUTTONS */}
          <div className="space-y-3 mt-5">

            <button className="btn w-full justify-start">
              Snooze 2 Weeks
            </button>

            <button className="btn w-full justify-start">
              Archive
            </button>

            <button className="btn w-full justify-start text-red-500">
              Delete
            </button>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="lg:col-span-2 space-y-6">

          {/* STATS */}
          <div className="grid md:grid-cols-3 gap-4">

            <div className="card bg-base-100 shadow-md p-4 text-center">
              <h2 className="text-3xl font-bold">
                {friend.days_since_contact}
              </h2>
              <p className="text-gray-500">Days Since Contact</p>
            </div>

            <div className="card bg-base-100 shadow-md p-4 text-center">
              <h2 className="text-3xl font-bold">
                {friend.goal}
              </h2>
              <p className="text-gray-500">Goal (Days)</p>
            </div>

            <div className="card bg-base-100 shadow-md p-4 text-center">
              <h2 className="text-2xl font-bold">
                {friend.next_due_date}
              </h2>
              <p className="text-gray-500">Next Due</p>
            </div>

            

          </div>

          {/* RELATIONSHIP GOAL */}
          <div className="card bg-base-100 shadow-md p-6 flex justify-between items-center">
            <div>
              <h3 className="font-semibold text-lg">Relationship Goal</h3>
              <p className="text-gray-500">
                Connect every <span className="font-bold">{friend.goal_days} days</span>
              </p>
            </div>

            <button className="btn btn-sm">Edit</button>
          </div>

        

          {/* QUICK CHECK-IN */}
          <div className="card bg-base-100 shadow-md p-6">
            <h3 className="font-semibold text-lg mb-4">Quick Check-In</h3>

            <ActionButtons friend={friend} />
            
          </div>

        </div>
      </div>
    </div>
  );
};

export default FriendDetailsPage;