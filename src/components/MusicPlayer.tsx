import Image from "next/image";
import { IoIosRewind, IoIosFastforward, IoIosPlay } from "react-icons/io";

export default function MusicPLayer() {
  return (
    <div className="w-full h-screen bg-[#1c0d10] flex justify-center items-center">
      <div className="h-498 w-266 flex justify-center bg-edenColor py-12 rounded-lg">
        <div>
          <Image
            className="rounded-lg"
            src="/assets/eden.png"
            alt=""
            width={189}
            height={189}
          />

          <h1 className="font-bold text-2xl mt-6 font-roboto text-[#E1E1E6]">
            Just Saying
          </h1>

          <h2 className="font-medium text-lg mt-1 font-roboto text-[#e1e1e6ae]">
            EDEN
          </h2>

          <div className="flex justify-center space-x-4 gap-8 mt-8">
            <div>
              <IoIosRewind size={28} color="#fff" />
            </div>
            <div>
              <IoIosPlay size={28} color="#fff" />
            </div>

            <div>
              <IoIosFastforward size={28} color="#fff" />
            </div>
          </div>

          <div className="w-full bg-[#d9d9d968] h-2 mt-8 rounded-lg">
            <div className="w-32 bg-[#D9D9D9] h-2 rounded-lg"></div>

            <div className="flex justify-between">
              <span className="text-sm mt-1 text-[#e1e1e6ae]">03:20</span>
              <span className="text-sm mt-1 text-[#e1e1e6ae]">00:12</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
