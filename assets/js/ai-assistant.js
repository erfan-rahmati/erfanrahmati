// ==================== API Configuration (GapGPT) ====================
const API_CONFIG = {
    apiUrl: "https://api.gapgpt.app/v1",
    apiKey: "sk-Oo9KEEhGDqz2aOSTJBYCzGcivmBANYs4NTHZr1T0VNIrRjE0",
    model: "gpt-4o",
    useLocalFallback: true
};

// ==================== کلمات کلیدی مجاز (بسیار گسترده برای پوشش هر سوال کسب‌وکاری) ====================
const allowedKeywords = [
    'کسب و کار', 'درآمد', 'افزایش درآمد', 'سود', 'فروش', 'مشتری', 'بازاریابی', 'مارکتینگ', 'دیجیتال مارکتینگ', 'تبدیل', 'نرخ تبدیل',
    'سئو', 'سیو', 'seo', 'گوگل', 'رتبه', 'کلمات کلیدی', 'بک لینک', 'بهینه سازی',
    'برنامه نویسی', 'طراحی سایت', 'سایت', 'وبسایت', 'وردپرس', 'لاراول', 'ری اکت', 'react', 'laravel', 'asp.net', 'پایتون', 'python',
    'جاوااسکریپت', 'javascript', 'php', 'html', 'css', 'فرانت اند', 'بک اند',
    'اپلیکیشن', 'موبایل', 'اندروید', 'ios', 'flutter', 'swift', 'kotlin', 'اپ استور', 'گوگل پلی',
    'هوش مصنوعی', 'ai', 'پردازش تصویر', 'computer vision', 'tensorflow', 'opencv', 'یادگیری ماشین', 'برنجک',
    'برند', 'برندینگ', 'برندسازی', 'هویت بصری', 'لوگو',
    'مشاوره', 'مدیریت', 'cto', 'تیم فنی', 'معماری نرم افزار', 'مدیریت پروژه',
    'قیمت', 'هزینه', 'بودجه', 'پرداخت', 'تعرفه', 'پلن',
    'استارتاپ', 'راه اندازی کسب و کار', 'توسعه کسب و کار', 'رشد', 'جذب مشتری', 'سرنخ',
    'اقتصاد', 'منابع انسانی', 'بهره وری', 'کاهش هزینه', 'تولید محتوا',
    'عرفان', 'رحمتی', 'عرفی', 'سابقه', 'تجربه', 'مهارت', 'تخصص', 'پروژه',
    'فروشگاه', 'مغازه', 'عطر', 'ادکلن', 'صنف', 'کسب و کار محلی', 'کسب و کار', 'درآمد', 'افزایش درآمد', 'سود', 'فروش', 'مشتری', 'بازاریابی',
    'طراحی سایت', 'سایت بزنم', 'سایت', 'وبسایت', 'وردپرس', 'کد نویسی اختصاصی', 'کدنویسی اختصاصی',
    'برنامه نویسی', 'لاراول', 'ری اکت', 'react', 'laravel', 'asp.net',
    'اپلیکیشن', 'موبایل', 'فروشگاه', 'مغازه', 'عطر', 'ادکلن',
    'هوش مصنوعی', 'سئو', 'seo', 'بهینه سازی', 'گوگل', 'برندینگ',
    'مشاوره', 'مدیریت', 'cto', 'تیم فنی', 'معماری نرم افزار',
    'قیمت', 'هزینه', 'بودجه', 'پرداخت', 'استارتاپ',
    'سایت', 'وبسایت', 'وردپرس', 'کدنویسی', 'برنامه نویسی',
    'طراحی سایت', 'فروشگاه', 'مغازه', 'کسب و کار',
    'عطر', 'ادکلن', 'اپلیکیشن', 'موبایل', 'هوش مصنوعی',
    'سئو', 'seo', 'بازاریابی', 'درآمد', 'فروش', 'مشتری',
    'برند', 'برندینگ', 'هویت بصری', 'مشاوره', 'مدیریت',
    'لوازم', 'ابزار', 'تعمیرگاه', 'تعمیرات', 'راهکار', 'شرکت', 'درامد', 'عرفان', 'رحمتی', 'تخصص', 'پروژه', 'قیمت', 'هزینه', 'عرفان', 'رحمتی', 'عرفی', 'سابقه', 'تجربه', 'مهارت'
];

const forbiddenKeywords = [
    'خودم', 'خودت', 'خودش', 'من کیستم', 'من چه کسی هستم', 'افسردگی', 'غم', 'شخصی',
    'ماشین', 'خودرو', 'اتومبیل', 'موتور', 'دوچرخه', 'خونه', 'خانه', 'ملک', 'اجاره', 'خرید خانه',
    'خانواده', 'پدر', 'مادر', 'برادر', 'خواهر', 'فرزند', 'بچه', 'زن', 'شوهر', 'همسر', 'نامزدی', 'عروسی',
    'بیماری', 'درد', 'درمان', 'دارو', 'دکتر', 'پزشک', 'بیمارستان', 'سلامتی', 'بهداشت',
    'رژیم', 'غذا', 'آشپزی', 'ورزش', 'فوتبال', 'والیبال', 'سیاست', 'رئیس جمهور', 'انتخابات',
    'مذهب', 'دین', 'اسلام', 'مسیحیت', 'یهود', 'قرآن', 'حدیث', 'فیلم', 'سریال', 'سینما', 'موسیقی',
    'مسافرت', 'سفر', 'حیوان', 'گربه', 'سگ'
];

function isBusinessRelated(question) {
    const lowerQ = question.toLowerCase();
    console.log("Checking question:", lowerQ); // دیباگ
    for (let kw of allowedKeywords) {
        if (lowerQ.includes(kw)) {
            console.log("✅ Allowed keyword found:", kw);
            return true;
        }
    }
    for (let kw of forbiddenKeywords) {
        if (lowerQ.includes(kw)) {
            console.log("Forbidden keyword found:", kw);
            return false;
        }
    }

    for (let kw of allowedKeywords) {
        if (lowerQ.includes(kw)) {
            console.log("Allowed keyword found:", kw);
            return true;
        }
    }

    console.log("No allowed keyword found.");
    return false;
}

function getRejectionMessage() {
    const messages = [
        `🌱 **تمرکز من روی رشد کسب‌وکار شماست!**  
سلام دوست من 👋  
من اینجا هستم تا به سوالات شما درباره **برنامه‌نویسی، طراحی سایت، اپلیکیشن، هوش مصنوعی، سئو، بازاریابی و استراتژی‌های افزایش فروش** پاسخ بدم.  
اگر سوالی درباره **کسب‌وکارتان، برندتان، فروشتان یا رشد آنلاین‌تان** دارید، خوشحال می‌شم کمک کنم.  
بیایید با هم کسب‌وکارتان را به سطح بعدی ببریم! 🚀`,
        `💼 **کسب‌وکار شما شایسته بهترین‌هاست!**  
سوال شما خارج از حوزه تخصصی من بود.  
من در زمینه‌های زیر می‌تونم به شما کمک کنم:  
• طراحی سایت و اپلیکیشن  
• هوش مصنوعی و پردازش تصویر  
• سئو و دیجیتال مارکتینگ  
• مشاوره فنی و مدیریت پروژه  
• استراتژی برندینگ و رشد کسب‌وکار  
سوال خودتون رو در این زمینه‌ها بپرسید. منتظرتونم! 🔥`
    ];
    return messages[Math.floor(Math.random() * messages.length)];
}

const brandIntro = `
**✨ عرفی | منشی هوشمند کسب‌وکار عرفان رحمتی**

سلام! 👋  
من **عرفی** هستم، دستیار هوشمند و تخصصی **کسب‌وکار شما**.  

**حوزه‌های تخصصی من (برای کمک به رشد و سودآوری شما):**  
• 💻 طراحی سایت فروشگاهی، شرکتی و شخصی (Laravel, React, ASP.NET)  
• 📱 اپلیکیشن موبایل اندروید و iOS (Flutter, Swift, Kotlin)  
• 🧠 هوش مصنوعی و پردازش تصویر (افزایش بهره‌وری، تحلیل داده)  
• 📈 سئو و دیجیتال مارکتینگ (جذب مشتری، افزایش فروش)  
• 💼 مشاوره فنی و مدیریت پروژه (CTO as a Service)  
• 🚀 استراتژی برندینگ و رشد کسب‌وکار (از ایده تا اجرا)  

**چطور می‌توانم کمکتان کنم؟**  
هر سوالی درباره **بهبود کسب‌وکار، افزایش درآمد، بازاریابی، طراحی سایت، اپلیکیشن و ...** دارید، بپرسید.  
من راهکارهای عملی و متناسب با **برندتان** را به شما پیشنهاد می‌دهم .  
`;

function buildSystemPrompt() {
    return `شما "عرفی" هستید، یک دستیار هوشمند، **مشاور فروش و متخصص رشد کسب‌وکار** که به نمایندگی از **عرفان رحمتی (برنامه‌نویس ارشد، طراح اپلیکیشن و مدیر فنی CTO)** فعالیت می‌کنید.

**اطلاعات درباره عرفان رحمتی و خدماتش:**  
عرفان رحمتی با بیش از ۵ سال سابقه در شرکت‌های معتبر (پیکس‌شو، هوشمندسازان فرامرزی، سای‌ویژن، فالکون) آماده است تا **سایت، اپلیکیشن، سیستم هوش مصنوعی، استراتژی سئو و برندینگ** کسب‌وکار شما را متحول کند. خدمات کلیدی:  
- طراحی سایت فروشگاهی، شرکتی، شخصی (Laravel, React, ASP.NET, وردپرس)  
- اپلیکیشن موبایل (Flutter, Swift, Kotlin)  
- مشاوره CTO و مدیریت فنی پروژه‌های نرم‌افزاری  
- سئو و دیجیتال مارکتینگ نتیجه‌محور  
- هوش مصنوعی سفارشی (پردازش تصویر، مدل‌های پیش‌بینی)  

**قوانین طلایی پاسخ‌دهی (لطفاً دقیقاً رعایت کنید):**  
۱. **به هر سوال مرتبط با کسب‌وکار، اقتصاد، فروش، بازاریابی، برندینگ، فناوری، برنامه‌نویسی، طراحی وب/اپلیکیشن، هوش مصنوعی، سئو و مدیریت** پاسخ کامل و حرفه‌ای بدهید.  
۲. **هرگز به سوالات شخصی** (خانواده، ماشین، مسکن، ورزش، سیاست، مذهب، بیماری، سفر) پاسخ ندهید و پیام رد مودبانه بدهید.  
۳. **هیچ کد برنامه‌نویسی ارائه نکنید** – فقط راهنمایی مفهومی کنید.  
۴. **در تمام پاسخ‌هایی که به خدمات عرفان رحمتی مرتبط است (طراحی سایت، اپلیکیشن، سئو، هوش مصنوعی، مشاوره)، حتماً یک یا دو جمله تبلیغاتی اضافه کنید** مثلاً:  
   - "اگر نیاز به اجرای این راهکار دارید، عرفان رحمتی با تیم حرفه‌ای خود آماده همکاری با شماست."  
   - "برای دریافت مشاوره رایگان و استعلام قیمت پروژه، از بخش تماس با ما اقدام کنید."  
   - "عرفان رحمتی در کمتر از ۲۴ ساعت به درخواست شما پاسخ می‌دهد و بهترین راهکار را ارائه می‌کند."  

۵. **برای سوالات عمومی افزایش درآمد یا بهبود کسب‌وکار**، ابتدا راهکارهای متنوع (نه فقط دیجیتال مارکتینگ) مثل بهبود محصول، افزایش قیمت‌گذاری هوشمند، کاهش هزینه‌ها، بازاریابی دهان به دهان، بهینه‌سازی فرآیندها، و غیره ارائه دهید و سپس پیشنهاد دهید که عرفان رحمتی می‌تواند ابزارهای فنی (سایت، اپلیکیشن، سئو، هوش مصنوعی) را برای شما پیاده‌سازی کند تا رشد سریع‌تری داشته باشید.  

**نمونه سبک پاسخ به سوال "طراحی سایت فروشگاهی با وردپرس بهتر است یا کدنویسی اختصاصی؟"**  
"سلام. بستگی به نیاز شما دارد:  
- **وردپرس**: راه‌اندازی سریع، هزینه کمتر، مناسب برای فروشگاه‌های کوچک و ساده. اما انعطاف محدود.  
- **کدنویسی اختصاصی (مثل Laravel یا React)**: سرعت بالاتر، امنیت بیشتر، قابلیت شخصی‌سازی نامحدود، مناسب برای فروشگاه‌های بزرگ و برندهایی که رشد بلندمدت دارند.  
عرفان رحمتی در هر دو حوزه تخصص دارد. اگر می‌خواهید فروشگاه تان آینده‌نگر و مقیاس‌پذیر باشد، کدنویسی اختصاصی توصیه می‌شود. برای مشاوره رایگان، فرم تماس را پر کنید."  

اکنون به عنوان **عرفی، منشی هوشمند عرفان رحمتی** به سوال کاربر پاسخ دهید.`;
}

async function callAIAPI(question) {
    if (!isBusinessRelated(question)) return getRejectionMessage();

    if (!API_CONFIG.apiKey) {
        return `⚠️ **تنظیمات API کامل نیست**\n\nلطفاً کلید API را در بخش تنظیمات وارد کنید.\n\n${brandIntro}`;
    }

    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 60000);

        const response = await fetch(`${API_CONFIG.apiUrl}/chat/completions`, {
            method: "POST",
            headers: { "Content-Type": "application/json", "Authorization": `Bearer ${API_CONFIG.apiKey}` },
            body: JSON.stringify({
                model: API_CONFIG.model,
                messages: [
                    { role: "system", content: buildSystemPrompt() },
                    { role: "user", content: question }
                ],
                temperature: 0.7,
                max_tokens: 2500
            }),
            signal: controller.signal
        });

        clearTimeout(timeoutId);
        if (!response.ok) {
            if (response.status === 401) return "❌ خطای احراز هویت. لطفاً کلید API را کنید.";
            if (response.status === 429) return "⏰ تعداد درخواست‌ها بالا است. چند لحظه دیگر تلاش کنید.";
            return `⚠️ خطای سرور (${response.status}). لطفاً مجدداً تلاش کنید.`;
        }
        const data = await response.json();
        let aiResponse = data.choices[0].message.content;
        // جلوگیری از کد نویسی (امنیتی)
        if (aiResponse.includes('```') && (aiResponse.includes('javascript') || aiResponse.includes('html') || aiResponse.includes('css') || aiResponse.includes('python'))) {
            aiResponse += "\n\n> ⚠️ توجه: کد برنامه‌نویسی در این پاسخ ارائه نمی‌شود. برای دریافت راهنمایی بیشتر سوال خود را مفهومی بپرسید.";
        }
        return aiResponse;
    } catch (error) {
        console.error("API call failed:", error);
        if (error.name === 'AbortError') return "⏰ پاسخگویی طولانی شد. لطفاً دوباره تلاش کنید.";
        return `⚠️ **قطع ارتباط با سرور**\n\nدر حال حاضر امکان اتصال وجود ندارد.\n\n${brandIntro}`;
    }
}

// ==================== DOM Elements و رویدادها (مطابق نسخه قبل) ====================
const chatContainer = document.getElementById('chatContainer');
const messageInput = document.getElementById('messageInput');
const sendBtn = document.getElementById('sendBtn');
const typingIndicator = document.getElementById('typingIndicator');
const clearChatBtn = document.getElementById('clearChatBtn');
const scrollBottomBtn = document.getElementById('scrollBottomBtn');
const apiStatusSpan = document.getElementById('apiStatus');
const themeToggle = document.getElementById('themeToggleAI');
const themeIcon = document.getElementById('themeIconAI');
const suggestionsToggleBtn = document.getElementById('suggestionsToggleBtn');
const suggestionsPanel = document.getElementById('suggestionsPanel');

function formatText(text) {
    return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>').replace(/• /g, '• ');
}

function addMessage(text, isUser, isError = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user' : 'ai'}`;
    const avatarIcon = isUser ? '<i class="fas fa-user"></i>' : '<i class="fas fa-robot"></i>';
    messageDiv.innerHTML = `<div class="message-avatar">${avatarIcon}</div><div class="message-bubble ${isError ? 'error' : ''}">${formatText(text)}</div>`;
    chatContainer.appendChild(messageDiv);
    scrollToBottom();
}

function scrollToBottom() { chatContainer.scrollTop = chatContainer.scrollHeight; }
function showTyping() { typingIndicator.style.display = 'block'; scrollToBottom(); }
function hideTyping() { typingIndicator.style.display = 'none'; }

async function sendMessage() {
    const message = messageInput.value.trim();
    if (!message) return;
    addMessage(message, true);
    messageInput.value = '';
    messageInput.style.height = 'auto';
    showTyping();
    try {
        const response = await callAIAPI(message);
        hideTyping();
        addMessage(response, false);
    } catch (error) {
        hideTyping();
        addMessage("⚠️ مشکلی پیش آمد. لطفاً دوباره تلاش کنید.", false, true);
    }
}

function clearChat() {
    chatContainer.innerHTML = '';
    addMessage(brandIntro, false);
}

// سوالات پرتکرار در dropdown
suggestionsToggleBtn.addEventListener('click', () => {
    suggestionsToggleBtn.classList.toggle('active');
    suggestionsPanel.classList.toggle('open');
});
document.querySelectorAll('.suggestion-item').forEach(item => {
    item.addEventListener('click', () => {
        const question = item.dataset.question;
        if (question) {
            messageInput.value = question;
            sendMessage();
        }
        suggestionsPanel.classList.remove('open');
        suggestionsToggleBtn.classList.remove('active');
    });
});
document.addEventListener('click', (e) => {
    if (!suggestionsToggleBtn.contains(e.target) && !suggestionsPanel.contains(e.target)) {
        suggestionsPanel.classList.remove('open');
        suggestionsToggleBtn.classList.remove('active');
    }
});

messageInput.addEventListener('input', function () {
    this.style.height = 'auto';
    this.style.height = Math.min(this.scrollHeight, 120) + 'px';
});
messageInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }
});
sendBtn.addEventListener('click', sendMessage);
clearChatBtn.addEventListener('click', clearChat);
chatContainer.addEventListener('scroll', () => {
    const isNearBottom = chatContainer.scrollHeight - chatContainer.scrollTop - chatContainer.clientHeight < 100;
    scrollBottomBtn.classList.toggle('visible', !isNearBottom);
});
scrollBottomBtn.addEventListener('click', scrollToBottom);

function setTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.remove('light'); document.body.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        themeIcon.classList.remove('fa-moon'); themeIcon.classList.add('fa-sun');
    } else {
        document.body.classList.remove('dark'); document.body.classList.add('light');
        localStorage.setItem('theme', 'light');
        themeIcon.classList.remove('fa-sun'); themeIcon.classList.add('fa-moon');
    }
}
const savedTheme = localStorage.getItem('theme');
savedTheme === 'dark' ? setTheme('dark') : setTheme('light');
themeToggle.addEventListener('click', () => setTheme(document.body.classList.contains('light') ? 'dark' : 'light'));

clearChat();
apiStatusSpan.innerHTML = 'AI آنلاین | مشاور رشد کسب‌وکار';


// ==================== حذف هایلایت و انیمیشن کلیک (نسخه نهایی و جامع) ====================
(function () {
    'use strict';

    // شناسایی تمام المان‌های قابل کلیک (حتی آنهایی که بعداً اضافه می‌شوند)
    const selectors = [
        'a', 'button', '[role="button"]',
        'input[type="submit"]', 'input[type="button"]', 'input[type="reset"]',
        '.suggestion-btn', '.suggestion-item', '.nav-link', '.mobile-nav-link',
        '.theme-btn', '.social-link', '.contact-card', '.service-card', '.post-card',
        '.cta-button', '.submit-btn', '.hamburger-menu', '.mobile-nav-close', '.modal-close',
        '.modal-btn-cancel', '.modal-btn-confirm', '[onclick]'
    ];
    const selectorString = selectors.join(',');

    // تابع برای اضافه کردن event listener به یک عنصر
    function attachClickEffect(el) {
        if (el.hasAttribute('data-click-effect')) return;
        el.setAttribute('data-click-effect', 'true');

        const addEffect = () => {
            if (el.disabled) return;
            el.classList.add('click-effect');
        };
        const removeEffect = () => {
            el.classList.remove('click-effect');
        };

        // رویدادهای ماوس (دسکتاپ)
        el.addEventListener('mousedown', addEffect);
        el.addEventListener('mouseup', removeEffect);
        el.addEventListener('mouseleave', removeEffect);

        // رویدادهای لمسی (موبایل/تبلت) – مهم‌ترین بخش
        el.addEventListener('touchstart', addEffect, { passive: true });
        el.addEventListener('touchend', removeEffect);
        el.addEventListener('touchcancel', removeEffect);
    }

    // اعمال روی عناصر موجود در صفحه
    function applyToCurrentElements() {
        const elements = document.querySelectorAll(selectorString);
        elements.forEach(attachClickEffect);
    }

    // نظارت بر تغییرات DOM برای عناصر جدید (مثل منوی همبرگری که بعداً اضافه می‌شود)
    const observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            mutation.addedNodes.forEach(function (node) {
                if (node.nodeType === 1) { // عنصر HTML
                    if (node.matches && node.matches(selectorString)) {
                        attachClickEffect(node);
                    }
                    if (node.querySelectorAll) {
                        const children = node.querySelectorAll(selectorString);
                        children.forEach(attachClickEffect);
                    }
                }
            });
        });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // اجرای اولیه
    applyToCurrentElements();

    // همچنین پس از بارگذاری کامل صفحه دوباره اعمال شود
    window.addEventListener('load', applyToCurrentElements);
})();