// فقط برای نمایش نمونه؛ در حالت واقعی می‌توانید جستجو را پیاده‌سازی کنید
document.querySelector('.blog-search-form')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const query = this.querySelector('input').value.trim();
    if (query) alert('جستجو برای: ' + query + '\n(در نسخه واقعی به صفحه نتایج هدایت می‌شوید)');
});
document.querySelector('.newsletter-form')?.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('✅ ایمیل شما با موفقیت ثبت شد. از همراهی شما سپاسگزارم.');
    this.reset();
});