import MusicPLayer from "./MusicPlayer";
import Musics from "./Musics";

export default function CardToSelectMusic() {
  return (
    <div className="bg-[#1c0d10] flex justify-center items-center ml-8">
      <div className="h-498 w-400 bg-edenColor rounded-lg p-7">
        <div className="flex flex-row justify-between">
          <h1 className="font-bold text-4xl text-[white]">Songs</h1>
        </div>

        <div className="mt-4">
          <Musics
            artistName={"Travis Scott"}
            musicName={"Mafia"}
            muisicDuration={"02:54"}
          />
        </div>
        <div className="mt-4">
          <Musics
            musicName={"HOUSTONFORNICATION"}
            artistName={"Travis Scott"}
            muisicDuration={"03:23"}
          />
          <div className="mt-4">
            <Musics
              artistName={"Don Toliver"}
              musicName={"Flocky Flocky"}
              muisicDuration={"05:55"}
            />
          </div>

          <div className="mt-4">
            <Musics
              artistName={"Eden"}
              musicName={"Reaching 2"}
              muisicDuration={"02:54"}
            />
          </div>

          <div className="mt-4">
            <Musics
              artistName={"Eden"}
              musicName={"Just Saying"}
              muisicDuration={"02:54"}
            />
          </div>

          <div className="mt-4">
            <Musics
              artistName={"Kendric Lamar"}
              musicName={"Money Trees"}
              muisicDuration={"02:54"}
            />
          </div>

          <div className="mt-4">
            <Musics
              artistName={"Drake"}
              musicName={"Fair Trade"}
              muisicDuration={"02:54"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
