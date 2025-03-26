(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{437:(e,t,a)=>{Promise.resolve().then(a.bind(a,3519))},3519:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>h});var n=a(5155),s=a(2115),l=a(8777),r=a.n(l);let i={ru:{title:"Генератор ключей TuneBlade",subtitle:"Простой генератор ключей для TuneBlade. Введите ваш email для получения ключа активации.",emailLabel:"Email адрес",emailPlaceholder:"Введите ваш email",generateButton:"Сгенерировать ключ",keyLabel:"Ваш ключ:",copyButton:"Копировать",copiedText:"Скопировано!",keyHint:"Используйте этот ключ для активации TuneBlade",footer:"\xa9 2023 TuneBlade Key Generator | by CroSSer23",emailError:"Пожалуйста, введите корректный email адрес",instructionsTitle:"Инструкция по активации:",instructionsStep1:'1. Откройте TuneBlade и перейдите в меню "Настройки" (Preferences)',instructionsStep2:'2. Выберите раздел "License" в левой панели',instructionsStep3:'3. В поле "License ID" введите ваш email адрес:',instructionsStep4:'4. В поле "License Key" вставьте сгенерированный ключ и нажмите "Unlock":'},en:{title:"TuneBlade Key Generator",subtitle:"Simple key generator for TuneBlade. Enter your email to get an activation key.",emailLabel:"Email address",emailPlaceholder:"Enter your email",generateButton:"Generate Key",keyLabel:"Your key:",copyButton:"Copy",copiedText:"Copied!",keyHint:"Use this key to activate TuneBlade",footer:"\xa9 2023 TuneBlade Key Generator | by CroSSer23",emailError:"Please enter a valid email address",instructionsTitle:"Activation Instructions:",instructionsStep1:'1. Open TuneBlade and go to "Preferences"',instructionsStep2:'2. Select "License" section in the left panel',instructionsStep3:'3. Enter your email address in the "License ID" field:',instructionsStep4:'4. Paste the generated key in the "License Key" field and click "Unlock":'},zh:{title:"TuneBlade 密钥生成器",subtitle:"TuneBlade 的简单密钥生成器。输入您的电子邮件以获取激活密钥。",emailLabel:"电子邮件地址",emailPlaceholder:"输入您的电子邮件",generateButton:"生成密钥",keyLabel:"您的密钥：",copyButton:"复制",copiedText:"已复制！",keyHint:"使用此密钥激活 TuneBlade",footer:"\xa9 2023 TuneBlade 密钥生成器 | by CroSSer23",emailError:"请输入有效的电子邮件地址",instructionsTitle:"激活说明：",instructionsStep1:'1. 打开 TuneBlade 并进入"首选项"(Preferences)',instructionsStep2:'2. 在左侧面板中选择"License"部分',instructionsStep3:'3. 在"License ID"字段中输入您的电子邮件地址：',instructionsStep4:'4. 在"License Key"字段中粘贴生成的密钥，然后点击"Unlock"：'}},c=(0,s.createContext)(void 0);function o(e){let{children:t}=e,[a,l]=(0,s.useState)("ru"),r=i[a],o=(0,s.useCallback)(e=>{l(e),localStorage.setItem("locale",e)},[]);return(0,n.jsx)(c.Provider,{value:{locale:a,setLocale:o,t:r},children:t})}function d(){let e=(0,s.useContext)(c);if(void 0===e)throw Error("useLocale must be used within a LocaleProvider");return e}function u(e){let{email:t,licenseKey:a}=e,{t:s}=d();return(0,n.jsxs)("div",{className:"w-full max-w-3xl mx-auto mt-8 bg-gray-800 p-8 rounded-lg shadow-lg",children:[(0,n.jsx)("h3",{className:"text-2xl font-semibold text-gray-100 mb-6",children:s.instructionsTitle}),(0,n.jsx)("div",{className:"w-full mb-8 bg-gray-700 rounded-md overflow-hidden",children:(0,n.jsx)("img",{src:"/tuneblade-license-interface.svg",alt:"TuneBlade License Interface",className:"w-full p-3"})}),(0,n.jsxs)("div",{className:"space-y-5 text-gray-300",children:[(0,n.jsx)("div",{className:"p-3 bg-gray-700 rounded-md",children:(0,n.jsx)("p",{className:"text-base font-medium",children:s.instructionsStep1})}),(0,n.jsx)("div",{className:"p-3 bg-gray-700 rounded-md",children:(0,n.jsx)("p",{className:"text-base font-medium",children:s.instructionsStep2})}),(0,n.jsx)("div",{className:"p-3 bg-gray-700 rounded-md",children:(0,n.jsxs)("div",{className:"text-base font-medium",children:[s.instructionsStep3,(0,n.jsx)("div",{className:"mt-2 p-2 bg-gray-600 rounded text-blue-300 text-center overflow-x-auto",children:t})]})}),(0,n.jsx)("div",{className:"p-3 bg-gray-700 rounded-md",children:(0,n.jsxs)("div",{className:"text-base font-medium",children:[s.instructionsStep4,(0,n.jsx)("div",{className:"mt-2 p-2 bg-gray-600 rounded text-blue-300 text-center overflow-x-auto",children:a})]})})]})]})}function m(){let{t:e}=d(),[t,a]=(0,s.useState)(""),[l,i]=(0,s.useState)(""),[c,o]=(0,s.useState)(""),[m,x]=(0,s.useState)(!1);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"w-full max-w-2xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg",children:[(0,n.jsx)("h2",{className:"text-2xl font-bold text-gray-100 mb-6 text-center",children:e.title}),(0,n.jsxs)("form",{onSubmit:a=>{if(a.preventDefault(),!t||!t.includes("@")){o(e.emailError);return}o(""),i(function(e){let t=[1,2,5,7,9,11,12,13,15,16,17,19,21,22,24,25,26,29,30,31],a=[22,23,28,32,13,33,24,30,21,29,34,17,20,27,10,4,26,11,14,8],n=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=r().createHash("md5").update(e).digest("hex");return t?a.toUpperCase():a}(e+":fazilkapunjabcivillinestuneblade",!0),s="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";for(let e=0;e<a.length;e++){let l=a[e],r=t[e];s=s.substring(0,l)+n[r]+s.substring(l+1)}return s}(t))},className:"space-y-4",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("label",{htmlFor:"email",className:"block text-base font-medium text-gray-300 mb-2",children:e.emailLabel}),(0,n.jsx)("input",{type:"email",id:"email",value:t,onChange:e=>a(e.target.value),placeholder:e.emailPlaceholder,className:"w-full px-4 py-3 bg-gray-700 text-gray-100 rounded-md    focus:outline-none focus:ring-2 focus:ring-gray-500 text-base",required:!0}),c&&(0,n.jsx)("p",{className:"mt-2 text-sm text-red-400",children:c})]}),(0,n.jsx)("button",{type:"submit",className:"w-full bg-gray-600 hover:bg-gray-500 text-white py-3 px-4    rounded-md transition duration-200 font-medium text-base",children:e.generateButton})]}),l&&(0,n.jsxs)("div",{className:"mt-8 space-y-3",children:[(0,n.jsx)("label",{className:"block text-base font-medium text-gray-300 mb-2",children:e.keyLabel}),(0,n.jsxs)("div",{className:"relative",children:[(0,n.jsx)("input",{type:"text",readOnly:!0,value:l,className:"w-full px-4 py-3 bg-gray-700 text-gray-100    rounded-md cursor-default focus:outline-none text-base"}),(0,n.jsx)("button",{onClick:()=>{l&&(navigator.clipboard.writeText(l),x(!0),setTimeout(()=>x(!1),2e3))},className:"absolute right-2 top-1/2 transform -translate-y-1/2    text-base text-gray-400 hover:text-gray-200    px-3 py-1 focus:outline-none",children:m?e.copiedText:e.copyButton})]}),(0,n.jsx)("p",{className:"text-sm text-gray-400 text-center mt-3",children:e.keyHint})]})]}),l&&(0,n.jsx)(u,{email:t,licenseKey:l})]})}let x={ru:"Русский",en:"English",zh:"中文"};function y(){let{locale:e,setLocale:t}=d(),[a,l]=(0,s.useState)(!1);return((0,s.useEffect)(()=>{l(!0);let e=localStorage.getItem("locale");e&&["ru","en","zh"].includes(e)&&t(e)},[t]),a)?(0,n.jsx)("div",{className:"flex items-center justify-center gap-3 my-6",children:Object.keys(x).map(a=>(0,n.jsx)("button",{onClick:()=>t(a),className:"px-4 py-2 text-base rounded-md transition font-medium\n                    ".concat(e===a?"bg-gray-600 text-gray-100 shadow-md":"bg-gray-700 text-gray-400 hover:bg-gray-600 hover:text-gray-300"),children:x[a]},a))}):null}function g(){let{t:e}=d();return(0,n.jsx)("main",{className:"min-h-screen bg-gray-900 flex flex-col items-center justify-center p-6",children:(0,n.jsxs)("div",{className:"container mx-auto max-w-4xl",children:[(0,n.jsxs)("div",{className:"text-center mb-6",children:[(0,n.jsx)("h1",{className:"text-4xl font-bold text-gray-100 mb-3",children:e.title}),(0,n.jsx)("p",{className:"text-gray-400 max-w-2xl mx-auto text-lg",children:e.subtitle})]}),(0,n.jsx)(y,{}),(0,n.jsx)(m,{}),(0,n.jsx)("footer",{className:"mt-16 text-center text-gray-500 text-sm py-4",children:(0,n.jsx)("p",{children:e.footer})})]})})}function h(){return(0,n.jsx)(o,{children:(0,n.jsx)(g,{})})}}},e=>{var t=t=>e(e.s=t);e.O(0,[268,470,441,684,358],()=>t(437)),_N_E=e.O()}]);