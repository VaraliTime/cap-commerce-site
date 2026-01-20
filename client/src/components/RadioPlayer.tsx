import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Radio, AlertCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const STATIONS = [
  { name: 'NRJ', url: 'https://streaming.nrjaudio.fm/oumvmk8fnozc?origine=fluxradios' },
  { name: 'RTL2', url: 'https://streaming.radio.funradio.fr/rtl2-1-44-128' },
  { name: 'Skyrock', url: 'https://icecast.skyrock.net/s/natio_mp3_128k' }
];

export const RadioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStation, setCurrentStation] = useState(STATIONS[0]);
  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const handlePlay = async () => {
    if (audioRef.current) {
      try {
        setError(null);
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (err) {
        console.error("Audio play error:", err);
        setError("Erreur de lecture");
        setIsPlaying(false);
      }
    }
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        handlePlay();
      }
    }
  };

  const changeStation = (station: typeof STATIONS[0]) => {
    setCurrentStation(station);
    setError(null);
    if (audioRef.current) {
      audioRef.current.src = station.url;
      audioRef.current.load();
      handlePlay();
    }
  };

  return (
    <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-3 py-1 shadow-sm">
      <audio 
        ref={audioRef} 
        src={currentStation.url} 
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
        onError={() => setError("Lien mort")}
      />
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm" className="h-8 gap-2 px-2 text-gray-700 hover:text-emerald-600">
            {error ? (
              <AlertCircle size={16} className="text-red-500" />
            ) : (
              <Radio size={16} className={isPlaying ? "animate-pulse text-emerald-600" : ""} />
            )}
            <span className="text-xs font-bold hidden sm:inline">
              {error ? error : currentStation.name}
            </span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-40">
          {STATIONS.map((station) => (
            <DropdownMenuItem 
              key={station.name}
              onClick={() => changeStation(station)}
              className={currentStation.name === station.name ? "bg-emerald-50 text-emerald-700 font-bold" : ""}
            >
              {station.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <div className="h-4 w-[1px] bg-gray-300 mx-1"></div>

      <Button 
        variant="ghost" 
        size="icon" 
        className="h-8 w-8 text-gray-600 hover:text-emerald-600"
        onClick={togglePlay}
      >
        {isPlaying ? <Pause size={16} fill="currentColor" /> : <Play size={16} fill="currentColor" />}
      </Button>

      <Button 
        variant="ghost" 
        size="icon" 
        className="h-8 w-8 text-gray-600 hover:text-emerald-600 hidden sm:flex"
        onClick={() => setIsMuted(!isMuted)}
      >
        {isMuted || volume === 0 ? <VolumeX size={16} /> : <Volume2 size={16} />}
      </Button>
      
      <input 
        type="range" 
        min="0" 
        max="1" 
        step="0.01" 
        value={isMuted ? 0 : volume} 
        onChange={(e) => {
          setVolume(parseFloat(e.target.value));
          setIsMuted(false);
        }}
        className="w-16 h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-emerald-600 hidden md:block"
      />
    </div>
  );
};
