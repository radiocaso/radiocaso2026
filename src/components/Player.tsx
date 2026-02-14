import { useRef, useState, useEffect } from "react";
import { useInitialData } from "@/hooks/useInitialData";

export default function Player() {
  const playerRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [data, setData] = useState<{
    artist: string;
    title: string;
  } | null>(null);

  const { data: initialData } = useInitialData();

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (playerRef.current) {
      playerRef.current.volume = parseFloat(event.target.value);
    }
  };

  const currentAudio = { url: initialData?.configuracionDeTransmision };

  useEffect(() => {
    if (playerRef.current) {
      if (isPlaying) {
        playerRef.current.play();
      } else {
        playerRef.current.pause();
      }
    }
  }, [isPlaying]);

  const fetchData = () => {
    fetch("https://www.radiojar.com/api/stations/34efk49zvncwv/now_playing/")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.error("Error fetching data: ", err);
      });
  };

  // Fetch the data on mount and then every 15 seconds
  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="flex h-full items-center justify-start gap-4 border-t border-white/20 p-4">
        <button
          className="w-20 border bg-white p-1 text-black uppercase"
          onClick={handlePlay}
        >
          {isPlaying ? "pausa" : "play"}
        </button>

        {data ? (
          <div>
            {data.artist} - <span className="italic">{data.title}</span>
          </div>
        ) : (
          <div>sonando ahora x RADIO CASo</div>
        )}

        <div className="size-2 animate-pulse rounded-full bg-red-500" />

        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          defaultValue="1"
          className="ml-auto h-0.5 w-35 cursor-pointer appearance-auto rounded bg-white accent-white"
          onChange={handleVolumeChange}
        />
      </div>

      {currentAudio?.url && (
        <audio src={currentAudio.url} ref={playerRef}></audio>
      )}
    </>
  );
}
