'use client';

import { useState } from 'react';
import { generateKey } from '@/utils/keyGenerator';
import { useLocale } from '@/contexts/LocaleContext';
import ActivationInstructions from './ActivationInstructions';

export default function KeyGeneratorForm() {
  const { t } = useLocale();
  const [email, setEmail] = useState('');
  const [key, setKey] = useState('');
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setError(t.emailError);
      return;
    }
    
    setError('');
    const generatedKey = generateKey(email);
    setKey(generatedKey);
  };

  const handleCopy = () => {
    if (key) {
      navigator.clipboard.writeText(key);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <>
      <div className="w-full max-w-2xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-100 mb-6 text-center">
          {t.title}
        </h2>
        
        <form onSubmit={handleGenerate} className="space-y-4">
          <div>
            <label 
              htmlFor="email" 
              className="block text-base font-medium text-gray-300 mb-2"
            >
              {t.emailLabel}
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t.emailPlaceholder}
              className="w-full px-4 py-3 bg-gray-700 text-gray-100 rounded-md 
                        focus:outline-none focus:ring-2 focus:ring-gray-500 text-base"
              required
            />
            {error && <p className="mt-2 text-sm text-red-400">{error}</p>}
          </div>
          
          <button
            type="submit"
            className="w-full bg-gray-600 hover:bg-gray-500 text-white py-3 px-4 
                      rounded-md transition duration-200 font-medium text-base"
          >
            {t.generateButton}
          </button>
        </form>
        
        {key && (
          <div className="mt-8 space-y-3">
            <label className="block text-base font-medium text-gray-300 mb-2">
              {t.keyLabel}
            </label>
            <div className="relative">
              <input
                type="text"
                readOnly
                value={key}
                className="w-full px-4 py-3 bg-gray-700 text-gray-100 
                          rounded-md cursor-default focus:outline-none text-base"
              />
              <button
                onClick={handleCopy}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 
                          text-base text-gray-400 hover:text-gray-200 
                          px-3 py-1 focus:outline-none"
              >
                {copied ? t.copiedText : t.copyButton}
              </button>
            </div>
            <p className="text-sm text-gray-400 text-center mt-3">
              {t.keyHint}
            </p>
          </div>
        )}
      </div>
      
      {/* Отображаем инструкции только после генерации ключа */}
      {key && <ActivationInstructions email={email} licenseKey={key} />}
    </>
  );
} 