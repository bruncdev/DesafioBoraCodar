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

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  function handleNextSong() {
    if (currentSongIndex + 1 > songs.length - 1) {
      setCurrentSongIndex(0);
      setNextSongIndex(currentSongIndex + 1);
    } else {
      setCurrentSongIndex(currentSongIndex + 1);
      setNextSongIndex(currentSongIndex + 2);
    }
  }

  function handlePreviousSong() {
    if (currentSongIndex - 1 < 0) {
      setCurrentSongIndex(songs.length - 1);
      setNextSongIndex(0);
    } else {
      setCurrentSongIndex(currentSongIndex - 1);
      setNextSongIndex(currentSongIndex);
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
        <IoIosRewind
          size={28}
          color="#fff"
          onClick={() => {
            handlePreviousSong();
          }}
        />
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
        <ReactAudioPlayer
          src={songs[currentSongIndex].path}
          ref={myAudio}
          volume={0.02}
          autoPlay={true}
          controls={false}
          onEnded={() => {
            handleNextSong();
          }}
        />
      </div>

      <div>
        <IoIosFastforward
          size={28}
          color="#fff"
          onClick={() => {
            handleNextSong();
          }}
        />
      </div>
    </>
  );
}
