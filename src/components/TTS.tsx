'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { Volume2, VolumeX, Pause, Play, RotateCcw } from 'lucide-react';

interface TTSProps {
  text: string;
  className?: string;
  autoPlay?: boolean;
  showControls?: boolean;
}

export default function TTS({ text, className = '', autoPlay = false, showControls = true }: TTSProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isSupported, setIsSupported] = useState(false);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] = useState<SpeechSynthesisVoice | null>(null);
  const [rate, setRate] = useState(1);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    // Check if speech synthesis is supported
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      setIsSupported(true);
      
      // Load voices
      const loadVoices = () => {
        const availableVoices = speechSynthesis.getVoices();
        setVoices(availableVoices);
        
        // Try to find Turkish voice, fallback to first available
        const turkishVoice = availableVoices.find(voice => 
          voice.lang.startsWith('tr') || voice.name.toLowerCase().includes('turkish')
        );
        setSelectedVoice(turkishVoice || availableVoices[0] || null);
      };

      loadVoices();
      speechSynthesis.addEventListener('voiceschanged', loadVoices);

      return () => {
        speechSynthesis.removeEventListener('voiceschanged', loadVoices);
      };
    }
  }, []);

  const handlePlay = useCallback(() => {
    if (!isSupported || !text.trim()) return;

    // Stop any current speech
    speechSynthesis.cancel();

    // Create new utterance
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = selectedVoice;
    utterance.rate = rate;

    utterance.volume = 1;

    utterance.onstart = () => {
      setIsPlaying(true);
      setIsPaused(false);
    };

    utterance.onend = () => {
      setIsPlaying(false);
      setIsPaused(false);
    };

    utterance.onerror = () => {
      setIsPlaying(false);
      setIsPaused(false);
      console.error("Speech synthesis error");
    };

    utteranceRef.current = utterance;
    speechSynthesis.speak(utterance);
  }, [isSupported, text, selectedVoice, rate]);



  const handlePause = () => {
    if (speechSynthesis.speaking && !speechSynthesis.paused) {
      speechSynthesis.pause();
      setIsPaused(true);
    }
  };

  const handleResume = () => {
    if (speechSynthesis.paused) {
      speechSynthesis.resume();
      setIsPaused(false);
    }
  };

  const handleStop = () => {
    speechSynthesis.cancel();
    setIsPlaying(false);
    setIsPaused(false);
  };

  const handleRestart = () => {
    handleStop();
    setTimeout(handlePlay, 100);
  };

  if (!isSupported) {
    return (
      <div className={`flex items-center space-x-2 text-gray-500 ${className}`}>
        <VolumeX className="w-4 h-4" />
        <span className="text-sm">Tarayıcınız ses özelliğini desteklemiyor</span>
      </div>
    );
  }

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      {/* Main Play/Pause Button */}
      <button
        onClick={isPlaying ? (isPaused ? handleResume : handlePause) : handlePlay}
        className="flex items-center space-x-2 px-3 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
        aria-label={isPlaying ? (isPaused ? 'Devam et' : 'Duraklat') : 'Dinle'}
        disabled={!selectedVoice}
      >
        {isPlaying ? (
          isPaused ? (
            <Play className="w-4 h-4" />
          ) : (
            <Pause className="w-4 h-4" />
          )
        ) : (
          <Volume2 className="w-4 h-4" />
        )}
        <span className="text-sm font-medium">
          {isPlaying ? (isPaused ? 'Devam Et' : 'Duraklat') : 'Dinle'}
        </span>
      </button>

      {/* Additional Controls */}
      {showControls && isPlaying && (
        <>
          <button
            onClick={handleRestart}
            className="p-2 text-gray-600 hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded"
            aria-label="Baştan başlat"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          <button
            onClick={handleStop}
            className="p-2 text-gray-600 hover:text-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded"
            aria-label="Durdur"
          >
            <VolumeX className="w-4 h-4" />
          </button>
        </>
      )}

      {/* Voice Selection (Hidden by default, can be shown in settings) */}
      {showControls && voices.length > 1 && (
        <select
          value={selectedVoice?.name || ''}
          onChange={(e) => {
            const voice = voices.find(v => v.name === e.target.value);
            setSelectedVoice(voice || null);
          }}
          className="text-xs border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          aria-label="Ses seçimi"
        >
          {voices.map((voice) => (
            <option key={voice.name} value={voice.name}>
              {voice.name} ({voice.lang})
            </option>
          ))}
        </select>
      )}

      {/* Speed Control */}
      {showControls && isPlaying && (
        <div className="flex items-center space-x-1">
          <label htmlFor="speed" className="text-xs text-gray-600">Hız:</label>
          <input
            id="speed"
            type="range"
            min="0.5"
            max="2"
            step="0.1"
            value={rate}
            onChange={(e) => setRate(parseFloat(e.target.value))}
            className="w-16 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            aria-label="Okuma hızı"
          />
          <span className="text-xs text-gray-600">{rate}x</span>
        </div>
      )}
    </div>
  );
}

