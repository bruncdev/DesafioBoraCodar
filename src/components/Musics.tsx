import { MusicProps } from "../types/PlayerTypes";

export default function Musics(musicPlayer: MusicProps) {
  return (
    <div className="flex flex-row justify-between ">
      <div className="flex flex-col w-480">
        <div className="p-2 bg-[#fcd7ad87] rounded-xl flex items-center">
          <span className="text-md text-[black] font-semibold font-roboto">
            {musicPlayer.artistName} - {musicPlayer.musicName}
          </span>
        </div>
      </div>
    </div>
  );
}
