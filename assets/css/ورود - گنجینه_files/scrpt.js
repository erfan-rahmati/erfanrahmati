(function () {
    const CONTAINER_SELECTOR = '.mobile-container-wrapper';
    const BREAKPOINT = 450;
    let container = null;
    let originalWrapperStyles = {};
    let originalBodyStyles = {};

    function storeOriginalStyles() {
        container = document.querySelector(CONTAINER_SELECTOR);
        if (!container) return;
        const compWrapper = window.getComputedStyle(container);
        originalWrapperStyles = {
            maxWidth: compWrapper.maxWidth,
            width: compWrapper.width,
            height: compWrapper.height,
            maxHeight: compWrapper.maxHeight,
            borderRadius: compWrapper.borderRadius,
            boxShadow: compWrapper.boxShadow,
            position: compWrapper.position,
            top: compWrapper.top,
            left: compWrapper.left,
            right: compWrapper.right,
            bottom: compWrapper.bottom
        };
        const compBody = window.getComputedStyle(document.body);
        originalBodyStyles = {
            backgroundColor: compBody.backgroundColor,
            background: compBody.background,
            margin: compBody.margin,
            padding: compBody.padding,
            height: compBody.height,
            minHeight: compBody.minHeight
        };
    }

    function applyMobileFullscreen() {
        if (!container) {
            container = document.querySelector(CONTAINER_SELECTOR);
            if (!container) return;
        }
        if (Object.keys(originalWrapperStyles).length === 0) {
            storeOriginalStyles();
        }
        // تنظیم html, body برای پر کردن صفحه
        document.documentElement.style.height = '100%';
        document.documentElement.style.margin = '0';
        document.documentElement.style.padding = '0';
        document.body.style.height = '100%';
        document.body.style.margin = '0';
        document.body.style.padding = '0';
        // حذف پس زمینه body (تا تصویر wrapper دیده شود)
        document.body.style.background = 'none';
        document.body.style.backgroundColor = 'transparent';

        // اعمال به wrapper
        container.style.maxWidth = '100%';
        container.style.width = '100%';
        container.style.height = '100%';
        container.style.maxHeight = '100%';
        container.style.borderRadius = '0';
        container.style.boxShadow = 'none';
        container.style.position = 'relative'; // یا absolute? برای پر کردن نسبی
        // اطمینان از پوشش کامل تصویر پس زمینه
        container.style.backgroundSize = 'cover';
        container.style.backgroundPosition = 'center';
    }

    function revertToDesktop() {
        if (!container) return;
        // بازگردانی استایل‌های wrapper
        for (let prop in originalWrapperStyles) {
            if (originalWrapperStyles[prop] !== 'none' && originalWrapperStyles[prop] !== 'auto') {
                container.style[prop] = originalWrapperStyles[prop];
            } else {
                container.style[prop] = '';
            }
        }
        // بازگردانی body
        document.body.style.height = originalBodyStyles.height || '';
        document.body.style.margin = originalBodyStyles.margin || '';
        document.body.style.padding = originalBodyStyles.padding || '';
        document.body.style.background = originalBodyStyles.background || '';
        document.body.style.backgroundColor = originalBodyStyles.backgroundColor || '';
        document.documentElement.style.height = '';
        document.documentElement.style.margin = '';
        document.documentElement.style.padding = '';

        // همچنین اطمینان از بازگشت border-radius اصلی wrapper (که در CSS است) - بهتر است استایل‌های inline را حذف کنیم
        // برای اطمینان، کلاس‌های CSS دوباره اعمال می‌شوند با حذف استایل‌های inline
        container.removeAttribute('style');
        // اما استایل‌های inline که برای fullscreen اضافه کردیم حذف می‌شوند، ولی باید دوباره اصلاحات را اعمال کنیم اگر بخواهیم برخی ویژگی‌ها را حفظ کنیم؟
        // بهتر است فقط استایل‌هایی که تغییر دادیم را reset کنیم و بقیه را به CSS بسپاریم.
        // روش ساده: استایل inline را پاک کنیم و سپس CSS اصلی حاکم شود.
        // اما چون قبلاً store کردیم، می‌توانیم به صورت دستی تنظیم کنیم.
        // برای سادگی، container.style.cssText = ''; ولی ممکن است برخی استایل‌های inline دیگر از دست بروند. بهتر است فقط ویژگی‌هایی که تغییر کردیم را برگردانیم.
        // دوباره فراخوانی storeOriginalStyles اگر لازم شد.
    }

    function adapt() {
        const width = window.innerWidth;
        container = document.querySelector(CONTAINER_SELECTOR);
        if (!container) return;

        if (width <= BREAKPOINT) {
            applyMobileFullscreen();
        } else {
            // اگر در حالت موبایل بودیم و الان بزرگتر شده، برگردان
            if (container.style.width === '100%' || container.style.maxWidth === '100%') {
                revertToDesktop();
            }
        }
    }

    window.addEventListener('resize', adapt);
    window.addEventListener('orientationchange', function () { setTimeout(adapt, 30); });
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', adapt);
    } else {
        adapt();
    }
})();