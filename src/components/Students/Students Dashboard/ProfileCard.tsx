"use client";
import Image from "next/image";
import avatar from "@/assets/avatars/3d_avatar_3.png";

const ProfileCard = () => {
  return (
    <div className="bg-[#1A1C46] text-white p-6 rounded-lg w-full max-w-md">
      <div className="flex flex-col gap-4">
        {/* Top section with avatar and basic info */}
        <div className="flex items-center gap-4">
          <div className="relative">
          <Image
  src={avatar}
  alt="Student"
  width={60}
  height={60}
  className="rounded-full"
/>
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
          </div>
          <div>
            <div className="text-xs text-[#3D5EE1] mb-1">#AZ09877</div>
            <h3 className="text-lg font-semibold">Maria Shekh</h3>
            <p className="text-sm text-gray-300">Class: III</p>
            <p className="text-sm text-gray-300">Roll No: 777</p>
          </div>
        </div>

        {/* Bottom section with exam status and edit button */}
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-2">
            <span className="text-sm">Monthly Exam</span>
            <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">Pass</span>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-600 transition-colors">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;