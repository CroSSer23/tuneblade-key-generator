'use client';

import KeyGeneratorForm from '@/components/KeyGeneratorForm';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { LocaleProvider, useLocale } from '@/contexts/LocaleContext';

// Компонент с содержимым страницы
function PageContent() {
  const { t } = useLocale();

  return (
    <main className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-gray-100 mb-3">
            {t.title}
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            {t.subtitle}
          </p>
        </div>
        
        <LanguageSwitcher />
        
        <KeyGeneratorForm />
        
        <footer className="mt-16 text-center text-gray-500 text-sm py-4">
          <p>{t.footer}</p>
        </footer>
      </div>
    </main>
  );
}

// Обертка с провайдером локализации
export default function Home() {
  return (
    <LocaleProvider>
      <PageContent />
    </LocaleProvider>
  );
}
