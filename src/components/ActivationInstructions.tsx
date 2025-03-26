'use client';

import { useLocale } from '@/contexts/LocaleContext';

interface ActivationInstructionsProps {
  email: string;
  licenseKey: string;
}

export default function ActivationInstructions({ email, licenseKey }: ActivationInstructionsProps) {
  const { t } = useLocale();

  return (
    <div className="w-full max-w-3xl mx-auto mt-8 bg-gray-800 p-8 rounded-lg shadow-lg">
      <h3 className="text-2xl font-semibold text-gray-100 mb-6">
        {t.instructionsTitle}
      </h3>
      
      {/* Изображение интерфейса */}
      <div className="w-full mb-8 bg-gray-700 rounded-md overflow-hidden">
        <img
          src="./tuneblade-license-interface.svg"
          alt="TuneBlade License Interface"
          className="w-full p-3"
        />
      </div>
      
      {/* Пошаговые инструкции */}
      <div className="space-y-5 text-gray-300">
        <div className="p-3 bg-gray-700 rounded-md">
          <p className="text-base font-medium">{t.instructionsStep1}</p>
        </div>
        
        <div className="p-3 bg-gray-700 rounded-md">
          <p className="text-base font-medium">{t.instructionsStep2}</p>
        </div>
        
        <div className="p-3 bg-gray-700 rounded-md">
          <div className="text-base font-medium">
            {t.instructionsStep3}
            <div className="mt-2 p-2 bg-gray-600 rounded text-blue-300 text-center overflow-x-auto">
              {email}
            </div>
          </div>
        </div>
        
        <div className="p-3 bg-gray-700 rounded-md">
          <div className="text-base font-medium">
            {t.instructionsStep4}
            <div className="mt-2 p-2 bg-gray-600 rounded text-blue-300 text-center overflow-x-auto">
              {licenseKey}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 