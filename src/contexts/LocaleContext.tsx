'use client';

import { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import { Locale, translations, Translations } from '@/i18n/translations';

interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('ru');
  
  // Получаем переводы для текущего языка
  const t = translations[locale];
  
  // Мемоизированная функция изменения языка
  const changeLocale = useCallback((newLocale: Locale) => {
    setLocale(newLocale);
    // Сохраняем выбор пользователя в localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('locale', newLocale);
    }
  }, []);
  
  return (
    <LocaleContext.Provider value={{ locale, setLocale: changeLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

// Хук для использования локализации
export function useLocale() {
  const context = useContext(LocaleContext);
  if (context === undefined) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context;
} 