import React from "react";

import Marquee from "react-fast-marquee";
import useNotice from "../../hooks/useNotice";
import { Link } from "react-router-dom";

const NoticeTitle = () => {
  const [notice] = useNotice();

  return (
    <div className="p-6 rounded-lg ">
      <div className="flex items-center gap-5">
        {/* Button */}
        <button className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 transition duration-300 shadow-md">
          All Notice
        </button>

        {/* Notice Marquee */}
        <div className="flex-1 overflow-hidden border border-gray-300 rounded-md shadow-sm">
          <Marquee pauseOnHover={true} className="p-2  text-black font-medium">
            {notice.length > 0 ? (
              notice.map((noticeTitle, index) => (
                <span key={noticeTitle._id} className="inline-block mx-2">
                  <Link
                    to={`/dashboard/noticedetails/${noticeTitle._id}`}
                    className="hover:underline text-black"
                  >
                    {noticeTitle.title}
                  </Link>
                  {index < notice.length - 1 && " || "}
                </span>
              ))
            ) : (
              <span>No notices available at the moment.</span>
            )}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default NoticeTitle;
