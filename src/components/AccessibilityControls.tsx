'use client';

import { useState, useEffect } from 'react';
import { Settings, Type, Contrast, Volume2, VolumeX } from 'lucide-react';

export default function AccessibilityControls() {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState('normal');
  const [highContrast, setHighContrast] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  useEffect(() => {
    // Load saved preferences
    const savedFontSize = localStorage.getItem('fontSize') || 'normal';
    const savedHighContrast = localStorage.getItem('highContrast') === 'true';
    const savedSoundEnabled = localStorage.getItem('soundEnabled') !== 'false';

    setFontSize(savedFontSize);
    setHighContrast(savedHighContrast);
    setSoundEnabled(savedSoundEnabled);

    // Apply settings
    applyFontSize(savedFontSize);
    applyHighContrast(savedHighContrast);
  }, []);

  const applyFontSize = (size: string) => {
    document.documentElement.classList.remove('text-sm', 'text-base', 'text-lg', 'text-xl');
    
    switch (size) {
      case 'small':
        document.documentElement.classList.add('text-sm');
        break;
      case 'large':
        document.documentElement.classList.add('text-lg');
        break;
      case 'extra-large':
        document.documentElement.classList.add('text-xl');
        break;
      default:
        document.documentElement.classList.add('text-base');
    }
    
    localStorage.setItem('fontSize', size);
  };

  const applyHighContrast = (enabled: boolean) => {
    if (enabled) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
    localStorage.setItem('highContrast', enabled.toString());
  };

  const handleFontSizeChange = (size: string) => {
    setFontSize(size);
    applyFontSize(size);
  };

  const handleHighContrastToggle = () => {
    const newValue = !highContrast;
    setHighContrast(newValue);
    applyHighContrast(newValue);
  };

  const handleSoundToggle = () => {
    const newValue = !soundEnabled;
    setSoundEnabled(newValue);
    localStorage.setItem('soundEnabled', newValue.toString());
  };

  const resetSettings = () => {
    setFontSize('normal');
    setHighContrast(false);
    setSoundEnabled(true);
    
    applyFontSize('normal');
    applyHighContrast(false);
    localStorage.setItem('soundEnabled', 'true');
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 bg-primary text-white rounded-full shadow-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 transition-all"
        aria-label="Erişilebilirlik ayarları"
        aria-expanded={isOpen}
      >
        <Settings className="w-6 h-6 mx-auto" />
      </button>

      {/* Controls Panel */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 bg-white rounded-lg shadow-xl border border-gray-200 p-6 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-primary">Erişilebilirlik</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
              aria-label="Kapat"
            >
              ×
            </button>
          </div>

          {/* Font Size Controls */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Type className="w-5 h-5 text-primary" />
              <label className="text-sm font-medium text-gray-700">Yazı Boyutu</label>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {[
                { value: 'small', label: 'Küçük' },
                { value: 'normal', label: 'Normal' },
                { value: 'large', label: 'Büyük' },
                { value: 'extra-large', label: 'Çok Büyük' }
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleFontSizeChange(option.value)}
                  className={`px-3 py-2 text-sm rounded-lg border transition-colors ${
                    fontSize === option.value
                      ? 'bg-primary text-white border-primary'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-primary'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* High Contrast Toggle */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Contrast className="w-5 h-5 text-primary" />
                <label className="text-sm font-medium text-gray-700">Yüksek Kontrast</label>
              </div>
              <button
                onClick={handleHighContrastToggle}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                  highContrast ? 'bg-primary' : 'bg-gray-200'
                }`}
                role="switch"
                aria-checked={highContrast}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    highContrast ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Sound Toggle */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                {soundEnabled ? (
                  <Volume2 className="w-5 h-5 text-primary" />
                ) : (
                  <VolumeX className="w-5 h-5 text-primary" />
                )}
                <label className="text-sm font-medium text-gray-700">Ses Efektleri</label>
              </div>
              <button
                onClick={handleSoundToggle}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                  soundEnabled ? 'bg-primary' : 'bg-gray-200'
                }`}
                role="switch"
                aria-checked={soundEnabled}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    soundEnabled ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Reset Button */}
          <div className="pt-4 border-t border-gray-200">
            <button
              onClick={resetSettings}
              className="w-full px-4 py-2 text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-50 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Ayarları Sıfırla
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

