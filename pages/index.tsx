import MusicPLayer from "../src/components/MusicPlayer";

export default function Home() {
  return (
    <div className="flex flex-row">
      <MusicPLayer musicName={"Just saying"} artistName={"EDEN"} />
    </div>
  );
}
