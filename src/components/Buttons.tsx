import {
  IoIosFastforward,
  IoIosPause,
  IoIosPlay,
  IoIosRewind,
} from "react-icons/io";
import React, { useState, useRef } from "react";
import ReactAudioPlayer from "react-audio-player";

export default function Buttons() {
  const [isPlay, setIsPlay] = useState(false);
  const myAudio = useRef(null);

  function handlePLayMusic() {
    if (myAudio.current !== null) {
      myAudio.current.audioEl.current.play();
    }
  }

  function handlePauseMusic() {
    if (myAudio.current !== null) {
      myAudio.current.audioEl.current.pause();
    }
  }

  const songs = [
    {
      id: 1,
      path: "flockyflocky.mp3",
    },
    {
      id: 2,
      path: "reaching2.mp3",
    },
    {
      id: 3,
      path: "houstonfornication.mp3",
    },
    {
      id: 4,
      path: "justsaying.mp3",
    },
  ];

  return (
    <>
      <div>
        <IoIosRewind size={28} color="#fff" />
      </div>
      <div>
        {isPlay ? (
          <IoIosPause
            size={28}
            color="#fff"
            onClick={() => {
              handlePauseMusic();
              setIsPlay(!isPlay);
            }}
          />
        ) : (
          <IoIosPlay
            size={28}
            color="#fff"
            onClick={() => {
              handlePLayMusic();

              setIsPlay(!isPlay);
            }}
          />
        )}
        <ReactAudioPlayer src={songs[3].path} ref={myAudio} />
      </div>

      <div>
        <IoIosFastforward size={28} color="#fff" />
      </div>
    </>
  );
}
