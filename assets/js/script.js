// ==================== DARK/LIGHT MODE (یکپارچه) ====================
const themeToggle = document.getElementById('themeToggle');
const mobileThemeToggle = document.getElementById('mobileThemeToggle');
const themeIcon = document.getElementById('themeIcon');
const mobileThemeIcon = document.getElementById('mobileThemeIcon');

function setTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.remove('light');
        document.body.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        if (themeIcon) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
        if (mobileThemeIcon) {
            mobileThemeIcon.classList.remove('fa-moon');
            mobileThemeIcon.classList.add('fa-sun');
        }
    } else {
        document.body.classList.remove('dark');
        document.body.classList.add('light');
        localStorage.setItem('theme', 'light');
        if (themeIcon) {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
        if (mobileThemeIcon) {
            mobileThemeIcon.classList.remove('fa-sun');
            mobileThemeIcon.classList.add('fa-moon');
        }
    }
}

// اعمال تم ذخیره شده
if (localStorage.getItem('theme') === 'dark') {
    setTheme('dark');
} else {
    setTheme('light');
}

// رویداد کلیک برای دکمه دسکتاپ
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        if (document.body.classList.contains('light')) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    });
}

// رویداد کلیک برای دکمه موبایل
if (mobileThemeToggle) {
    mobileThemeToggle.addEventListener('click', () => {
        if (document.body.classList.contains('light')) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    });
}

// ==================== اسکرول نرم برای لینک‌های داخلی ====================
document.addEventListener('DOMContentLoaded', function () {
    // انتخاب تمام لینک‌هایی که به بخش‌های همان صفحه اشاره دارند (شروع با #)
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            // گرفتن مقدار href (مثل #homeID یا #contactFormSection)
            const targetId = this.getAttribute('href');

            // اگر لینک فقط "#" بود یا خالی بود، نادیده بگیر
            if (targetId === '#' || targetId === '') return;

            // پیدا کردن المنت هدف در صفحه
            const targetElement = document.querySelector(targetId);

            // اگر المنت وجود داشت
            if (targetElement) {
                event.preventDefault(); // جلوگیری از رفتار پیش‌فرض مرورگر

                // اسکرول نرم به سمت المنت هدف
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                    inline: 'nearest'
                });

                // (اختیاری) تغییر آدرس بار مرورگر بدون ریلود شدن صفحه
                history.pushState(null, null, targetId);
            }
        });
    });
});

// ==================== اسکرول نرم با offset برای هدر ثابت ====================
document.addEventListener('DOMContentLoaded', function () {
    // ارتفاع هدر ثابت (مقدار را بر اساس هدر خود تنظیم کنید)
    const headerHeight = document.querySelector('.header')?.offsetHeight || 80;

    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            const targetId = this.getAttribute('href');
            if (targetId === '#' || targetId === '') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                event.preventDefault();
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                history.pushState(null, null, targetId);
            }
        });
    });
});

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

// ==================== HAMBURGER MENU LOGIC ====================
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileNav = document.getElementById('mobileNav');
const mobileOverlay = document.getElementById('mobileOverlay');
const closeMobileNav = document.getElementById('closeMobileNav');

function openMobileMenu() {
    if (mobileNav) mobileNav.classList.add('open');
    if (mobileOverlay) mobileOverlay.classList.add('active');
    if (hamburgerBtn) hamburgerBtn.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
    if (mobileNav) mobileNav.classList.remove('open');
    if (mobileOverlay) mobileOverlay.classList.remove('active');
    if (hamburgerBtn) hamburgerBtn.classList.remove('active');
    document.body.style.overflow = '';
}

if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', openMobileMenu);
}
if (closeMobileNav) {
    closeMobileNav.addEventListener('click', closeMobileMenu);
}
if (mobileOverlay) {
    mobileOverlay.addEventListener('click', closeMobileMenu);
}

// بستن منو با کلیک روی لینک‌ها
document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
});

// بستن منو در هنگام بزرگ شدن صفحه
window.addEventListener('resize', function () {
    if (window.innerWidth > 1024) {
        closeMobileMenu();
    }
});

// ==================== اسکریپت شمارنده (Counter) برای آمار ====================
document.addEventListener('DOMContentLoaded', function () {
    const counters = document.querySelectorAll('.counter');
    let animated = false;

    function startCounters() {
        if (animated) return;
        animated = true;

        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            let current = 0;
            const increment = target / 50;
            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    counter.innerText = Math.floor(current);
                    setTimeout(updateCounter, 30);
                } else {
                    counter.innerText = target;
                }
            };
            updateCounter();
        });
    }

    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    startCounters();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        observer.observe(statsSection);
    }
});

// ==================== BACK TO TOP BUTTON LOGIC ====================
const backToTopBtn = document.getElementById('backToTop');

if (backToTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ==================== MODAL LOGIC ====================
// بررسی وجود عناصر قبل از استفاده
const projectModal = document.getElementById('projectTypeModal');
const projectTriggerBtn = document.getElementById('projectTypeTriggerBtn');
const closeProjectModal = document.getElementById('closeProjectModal');
const cancelProjectModal = document.getElementById('cancelProjectModal');
const confirmProjectModal = document.getElementById('confirmProjectModal');
const projectCheckboxes = document.querySelectorAll('.project-checkbox');
const projectDisplay = document.getElementById('projectTypeDisplay');
const projectHidden = document.getElementById('projectType');

const deadlineModal = document.getElementById('deadlineModal');
const deadlineTriggerBtn = document.getElementById('deadlineTriggerBtn');
const closeDeadlineModal = document.getElementById('closeDeadlineModal');
const cancelDeadlineModal = document.getElementById('cancelDeadlineModal');
const confirmDeadlineModal = document.getElementById('confirmDeadlineModal');
const deadlineRadios = document.querySelectorAll('input[name="deadlineRadio"]');
const deadlineDisplay = document.getElementById('deadlineDisplay');
const deadlineHidden = document.getElementById('deadline');

const budgetInput = document.getElementById('budget');

// باز کردن مودال‌ها
if (projectTriggerBtn && projectModal) {
    projectTriggerBtn.addEventListener('click', () => {
        projectModal.classList.add('active');
    });
}

if (deadlineTriggerBtn && deadlineModal) {
    deadlineTriggerBtn.addEventListener('click', () => {
        deadlineModal.classList.add('active');
    });
}

// بستن مودال نوع پروژه
function closeProjectModalFunc() {
    if (projectModal) projectModal.classList.remove('active');
}

if (closeProjectModal) closeProjectModal.addEventListener('click', closeProjectModalFunc);
if (cancelProjectModal) cancelProjectModal.addEventListener('click', closeProjectModalFunc);

// بستن مودال مدت زمان
function closeDeadlineModalFunc() {
    if (deadlineModal) deadlineModal.classList.remove('active');
}

if (closeDeadlineModal) closeDeadlineModal.addEventListener('click', closeDeadlineModalFunc);
if (cancelDeadlineModal) cancelDeadlineModal.addEventListener('click', closeDeadlineModalFunc);

// کلیک خارج از مودال
if (projectModal) {
    projectModal.addEventListener('click', (e) => {
        if (e.target === projectModal) closeProjectModalFunc();
    });
}
if (deadlineModal) {
    deadlineModal.addEventListener('click', (e) => {
        if (e.target === deadlineModal) closeDeadlineModalFunc();
    });
}

// تأیید نوع پروژه
if (confirmProjectModal) {
    confirmProjectModal.addEventListener('click', () => {
        const selected = [];
        const selectedTexts = [];
        projectCheckboxes.forEach(cb => {
            if (cb.checked) {
                selected.push(cb.value);
                const parent = cb.closest('.modal-checkbox-option');
                if (parent) {
                    const textSpan = parent.querySelector('.option-text');
                    if (textSpan) selectedTexts.push(textSpan.innerText);
                }
            }
        });

        if (selected.length === 0) {
            if (projectDisplay) projectDisplay.innerText = 'انتخاب کنید';
            if (projectHidden) projectHidden.value = '';
        } else {
            if (projectDisplay) projectDisplay.innerText = selectedTexts.join('، ');
            if (projectHidden) projectHidden.value = selected.join(',');
        }
        closeProjectModalFunc();
    });
}

// تأیید مدت زمان
if (confirmDeadlineModal) {
    confirmDeadlineModal.addEventListener('click', () => {
        let selectedValue = null;
        let selectedText = null;
        deadlineRadios.forEach(radio => {
            if (radio.checked) {
                selectedValue = radio.value;
                const parent = radio.closest('.modal-radio-option');
                if (parent) {
                    const textSpan = parent.querySelector('.option-text');
                    if (textSpan) selectedText = textSpan.innerText;
                }
            }
        });

        if (selectedValue) {
            if (deadlineDisplay) deadlineDisplay.innerText = selectedText;
            if (deadlineHidden) deadlineHidden.value = selectedValue;
        } else {
            if (deadlineDisplay) deadlineDisplay.innerText = 'انتخاب کنید';
            if (deadlineHidden) deadlineHidden.value = '';
        }
        closeDeadlineModalFunc();
    });
}

// بودجه با جداکننده سه رقم
function formatNumberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

if (budgetInput) {
    budgetInput.addEventListener('input', function (e) {
        let value = this.value.replace(/,/g, '');
        value = value.replace(/[^0-9]/g, '');
        if (value) {
            this.value = formatNumberWithCommas(parseInt(value, 10));
        } else {
            this.value = '';
        }
    });
}

// ارسال فرم
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const fullname = document.getElementById('fullname')?.value || '';
        const phone = document.getElementById('phone')?.value || '';
        const projectType = document.getElementById('projectType')?.value || '';
        const deadline = document.getElementById('deadline')?.value || '';
        const budget = document.getElementById('budget')?.value || '';
        const description = document.getElementById('description')?.value || '';

        if (!fullname || !phone || !projectType || !deadline || !description) {
            alert('❌ لطفاً تمام فیلدهای required را پر کنید!');
            return;
        }

        const formData = { fullname, phone, projectType, deadline, budget, description };
        console.log('فرم ارسال شد:', formData);

        alert('✅ درخواست شما با موفقیت ثبت شد.\nدر اسرع وقت با شما تماس می‌گیرم.');

        // ریست فرم
        contactForm.reset();
        if (projectDisplay) projectDisplay.innerText = 'انتخاب کنید';
        if (deadlineDisplay) deadlineDisplay.innerText = 'انتخاب کنید';
        if (projectHidden) projectHidden.value = '';
        if (deadlineHidden) deadlineHidden.value = '';

        projectCheckboxes.forEach(cb => cb.checked = false);
        deadlineRadios.forEach(radio => radio.checked = false);
        if (budgetInput) budgetInput.value = '';
    });
}