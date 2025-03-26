'use client';

import { useLocale } from '@/contexts/LocaleContext';
import { Locale } from '@/i18n/translations';
import { useEffect, useState } from 'react';

// Названия языков для отображения
const localeNames: Record<Locale, string> = {
  ru: 'Русский',
  en: 'English',
  zh: '中文'
};

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();
  const [mounted, setMounted] = useState(false);

  // Проверка, загружен ли клиент, чтобы избежать гидратации
  useEffect(() => {
    setMounted(true);
    // Загружаем сохраненный выбор языка из localStorage
    const savedLocale = localStorage.getItem('locale') as Locale | null;
    if (savedLocale && ['ru', 'en', 'zh'].includes(savedLocale)) {
      setLocale(savedLocale);
    }
  }, [setLocale]);

  // Отображаем только на клиенте
  if (!mounted) return null;

  return (
    <div className="flex items-center justify-center gap-3 my-6">
      {(Object.keys(localeNames) as Locale[]).map((loc) => (
        <button
          key={loc}
          onClick={() => setLocale(loc)}
          className={`px-4 py-2 text-base rounded-md transition font-medium
                    ${locale === loc 
                      ? 'bg-gray-600 text-gray-100 shadow-md' 
                      : 'bg-gray-700 text-gray-400 hover:bg-gray-600 hover:text-gray-300'
                    }`}
        >
          {localeNames[loc]}
        </button>
      ))}
    </div>
  );
} 