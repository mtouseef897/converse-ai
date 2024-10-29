// FeedbackList.tsx

import Link from "next/link";
import { FC } from "react";

interface Feedback {
  id: number;
  username: string;
  profileImg: string;
  content: string;
}

// Fetch feedbacks in this file as well
async function getFeedbacks(): Promise<Feedback[]> {
  const response = await fetch("http://localhost:3000/api/get-feedback", {
    cache: "no-store",
  });

  if (!response.ok) throw new Error("Failed to fetch feedback data");

  return response.json();
}

// Server Component: Fetch feedback data directly in the component
const FeedbackList = async () => {
  const feedbacks = await getFeedbacks(); // Fetch feedbacks on the server side

  return (
    <div className="mt-16 w-full">
      <h2 className="font-bold text-2xl mb-4 text-center">Top Feedbacks</h2>
      <ul className="flex max-md:flex-col justify-center gap-4 overflow-auto">
        {feedbacks?.slice(0, 5).map((feedback) => (
          <li
            key={feedback.id}
            className="bg-white p-8 flex flex-col items-start justify-start gap-4 max-w-sm rounded-xl shadow-md"
          >
            <span className="flex items-center justify-start gap-4">
              {feedback.profileImg && (
                <img
                  src={feedback.profileImg}
                  alt={`${feedback.username}'s profile`}
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                  }}
                />
              )}
              <strong>{feedback.username}</strong>
            </span>
            <p className="text-gray-500">{feedback.content}</p>
          </li>
        ))}
      </ul>
      <div className="text-end mt-2">
        <Link href="/feedbacks" className=" text-center w-[100px] p-4">
          View All
        </Link>
      </div>
    </div>
  );
};

// Fetching feedback data at the server side using async/await
// export async function getServerSideProps() {
//   try {
//     const response = await fetch("http://localhost:3000/api/get-feedback", {
//       cache: "no-store",
//     });

//     if (!response.ok) {
//       throw new Error("Failed to fetch feedback data");
//     }

//     const feedbacks: Feedback[] = await response.json();

//     return { props: { feedbacks } };
//   } catch (error) {
//     console.error("Error fetching feedback:", error);
//     return { props: { feedbacks: [] } }; // Handle the case where data fetch fails
//   }
// }

export default FeedbackList;
