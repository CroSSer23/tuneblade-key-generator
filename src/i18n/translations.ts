export type Locale = 'ru' | 'en' | 'zh';

export interface Translations {
  title: string;
  subtitle: string;
  emailLabel: string;
  emailPlaceholder: string;
  generateButton: string;
  keyLabel: string;
  copyButton: string;
  copiedText: string;
  keyHint: string;
  footer: string;
  emailError: string;
  instructionsTitle: string;
  instructionsStep1: string;
  instructionsStep2: string;
  instructionsStep3: string;
  instructionsStep4: string;
}

export const translations: Record<Locale, Translations> = {
  ru: {
    title: 'Генератор ключей TuneBlade',
    subtitle: 'Простой генератор ключей для TuneBlade. Введите ваш email для получения ключа активации.',
    emailLabel: 'Email адрес',
    emailPlaceholder: 'Введите ваш email',
    generateButton: 'Сгенерировать ключ',
    keyLabel: 'Ваш ключ:',
    copyButton: 'Копировать',
    copiedText: 'Скопировано!',
    keyHint: 'Используйте этот ключ для активации TuneBlade',
    footer: '© 2023 TuneBlade Key Generator | by CroSSer23',
    emailError: 'Пожалуйста, введите корректный email адрес',
    instructionsTitle: 'Инструкция по активации:',
    instructionsStep1: '1. Откройте TuneBlade и перейдите в меню "Настройки" (Preferences)',
    instructionsStep2: '2. Выберите раздел "License" в левой панели',
    instructionsStep3: '3. В поле "License ID" введите ваш email адрес:',
    instructionsStep4: '4. В поле "License Key" вставьте сгенерированный ключ и нажмите "Unlock":'
  },
  en: {
    title: 'TuneBlade Key Generator',
    subtitle: 'Simple key generator for TuneBlade. Enter your email to get an activation key.',
    emailLabel: 'Email address',
    emailPlaceholder: 'Enter your email',
    generateButton: 'Generate Key',
    keyLabel: 'Your key:',
    copyButton: 'Copy',
    copiedText: 'Copied!',
    keyHint: 'Use this key to activate TuneBlade',
    footer: '© 2023 TuneBlade Key Generator | by CroSSer23',
    emailError: 'Please enter a valid email address',
    instructionsTitle: 'Activation Instructions:',
    instructionsStep1: '1. Open TuneBlade and go to "Preferences"',
    instructionsStep2: '2. Select "License" section in the left panel',
    instructionsStep3: '3. Enter your email address in the "License ID" field:',
    instructionsStep4: '4. Paste the generated key in the "License Key" field and click "Unlock":'
  },
  zh: {
    title: 'TuneBlade 密钥生成器',
    subtitle: 'TuneBlade 的简单密钥生成器。输入您的电子邮件以获取激活密钥。',
    emailLabel: '电子邮件地址',
    emailPlaceholder: '输入您的电子邮件',
    generateButton: '生成密钥',
    keyLabel: '您的密钥：',
    copyButton: '复制',
    copiedText: '已复制！',
    keyHint: '使用此密钥激活 TuneBlade',
    footer: '© 2023 TuneBlade 密钥生成器 | by CroSSer23',
    emailError: '请输入有效的电子邮件地址',
    instructionsTitle: '激活说明：',
    instructionsStep1: '1. 打开 TuneBlade 并进入"首选项"(Preferences)',
    instructionsStep2: '2. 在左侧面板中选择"License"部分',
    instructionsStep3: '3. 在"License ID"字段中输入您的电子邮件地址：',
    instructionsStep4: '4. 在"License Key"字段中粘贴生成的密钥，然后点击"Unlock"：'
  }
}; 