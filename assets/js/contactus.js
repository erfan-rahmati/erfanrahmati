// فرم تماس (فقط نمایش تستی – در پروژه واقعی به بک‌اند متصل شود)
document.getElementById('contactFormPage')?.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('✅ پیام شما با موفقیت ارسال شد. در اسرع وقت پاسخگو خواهم بود.');
    this.reset();
});