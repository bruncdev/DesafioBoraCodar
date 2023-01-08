import { MusicProps } from "../types/PlayerTypes";

export default function Musics(musicPlayer: MusicProps) {
  return (
    <div className="flex flex-row justify-between gap-40">
      <div className="flex flex-col">
        <span className="text-sm">{musicPlayer.musicName}</span>
        <span className="text-xs">{musicPlayer.artistName}</span>
      </div>

      <span className="text-sm">{musicPlayer.muisicDuration}</span>
    </div>
  );
}
