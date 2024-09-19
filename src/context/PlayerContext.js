import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext()

const PlayerContextProvider = (props) => {



    const audioRef = useRef()
    const seekBg = useRef()
    const seekBar = useRef()

    const [track, setTrack] = useState(songsData[0])
    const [playStatus, setplayStatus] = useState(false)
    const [time, setTime] = useState({
        currentTime: { second: 0, minute: 0 },
        totalTime: { second: 0, minute: 0 }
    })

    const play = () => {
        audioRef.current.play();
        setplayStatus(true);
    }

    const pause = () => {
        audioRef.current.pause();
        setplayStatus(false);
    }

    const playWithId = async (id) => {
        await setTrack(songsData[id]);
        await audioRef.current.play()
        setplayStatus(true);
    }

    const previous = async () => {
        if (track.id > 0) {
            await setTrack(songsData[track.id - 1]);
            await audioRef.current.play()
            setplayStatus(true);
        }
    }
    const next = async () => {
        if (track.id < songsData.length - 1) {
            await setTrack(songsData[track.id + 1]);
            await audioRef.current.play()
            setplayStatus(true);
        }
    }
    const handleSeek = (e) => {
        const duration = audioRef.current.duration;
        audioRef.current.currentTime = (e.nativeEvent.offsetX / seekBg.current.offsetWidth) * duration;
    }

    useEffect(() => {
        setTimeout(() => {
            audioRef.current.ontimeupdate = () => {
                const currentTime = audioRef.current.currentTime;
                const duration = audioRef.current.duration;
                seekBar.current.style.width = ((currentTime / duration) * 100) + '%';

                setTime((prevTime) => ({
                    ...prevTime,
                    currentTime: {
                        second: Math.floor(currentTime % 60),
                        minute: Math.floor(currentTime / 60)
                    },
                    totalTime: {
                        second: Math.floor(duration % 60),
                        minute: Math.floor(duration / 60)
                    }
                }));
            };
        }, 1000);
    })

    const contexValue = {
        audioRef,
        seekBar,
        seekBg,
        track,
        playStatus,
        setplayStatus,
        time,
        setTime,
        play,
        pause,
        playWithId,
        previous,
        next,
        handleSeek
    }
    return (
        <PlayerContext.Provider value={contexValue}>
            {props.children}
        </PlayerContext.Provider>
    )
}

export default PlayerContextProvider;