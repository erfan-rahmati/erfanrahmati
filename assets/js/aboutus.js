// انیمیشن دایره‌های مهارت هنگام اسکرول
document.addEventListener('DOMContentLoaded', function () {
    const circles = document.querySelectorAll('.circle-fill');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const parent = entry.target.closest('.circle-progress');
                const percent = parent.getAttribute('data-percent');
                const circumference = 283;
                const offset = circumference - (circumference * percent / 100);
                entry.target.style.strokeDashoffset = offset;
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    circles.forEach(circle => observer.observe(circle));

    // مودال‌ها (ساده)
    const projectModal = document.getElementById('projectTypeModal');
    const deadlineModal = document.getElementById('deadlineModal');
    const projectTrigger = document.getElementById('projectTypeTriggerBtn');
    const deadlineTrigger = document.getElementById('deadlineTriggerBtn');
    const closeProject = document.getElementById('closeProjectModal');
    const cancelProject = document.getElementById('cancelProjectModal');
    const confirmProject = document.getElementById('confirmProjectModal');
    const closeDeadline = document.getElementById('closeDeadlineModal');
    const cancelDeadline = document.getElementById('cancelDeadlineModal');
    const confirmDeadline = document.getElementById('confirmDeadlineModal');
    const projectCheckboxes = document.querySelectorAll('.project-checkbox');
    const projectDisplay = document.getElementById('projectTypeDisplay');
    const projectHidden = document.getElementById('projectType');
    const deadlineRadios = document.querySelectorAll('input[name="deadlineRadio"]');
    const deadlineDisplay = document.getElementById('deadlineDisplay');
    const deadlineHidden = document.getElementById('deadline');
    const budgetInput = document.getElementById('budget');

    function openModal(modal) { modal.classList.add('active'); }
    function closeModal(modal) { modal.classList.remove('active'); }
    if (projectTrigger) projectTrigger.onclick = () => openModal(projectModal);
    if (deadlineTrigger) deadlineTrigger.onclick = () => openModal(deadlineModal);
    if (closeProject) closeProject.onclick = () => closeModal(projectModal);
    if (cancelProject) cancelProject.onclick = () => closeModal(projectModal);
    if (closeDeadline) closeDeadline.onclick = () => closeModal(deadlineModal);
    if (cancelDeadline) cancelDeadline.onclick = () => closeModal(deadlineModal);
    if (confirmProject) confirmProject.onclick = () => {
        let selected = [], texts = [];
        projectCheckboxes.forEach(cb => {
            if (cb.checked) {
                selected.push(cb.value);
                texts.push(cb.closest('.modal-checkbox-option')?.querySelector('.option-text')?.innerText || cb.value);
            }
        });
        if (selected.length) {
            projectDisplay.innerText = texts.join('، ');
            projectHidden.value = selected.join(',');
        } else {
            projectDisplay.innerText = 'انتخاب کنید';
            projectHidden.value = '';
        }
        closeModal(projectModal);
    };
    if (confirmDeadline) confirmDeadline.onclick = () => {
        let selectedValue = null, selectedText = null;
        deadlineRadios.forEach(radio => {
            if (radio.checked) {
                selectedValue = radio.value;
                selectedText = radio.closest('.modal-radio-option')?.querySelector('.option-text')?.innerText;
            }
        });
        if (selectedValue) {
            deadlineDisplay.innerText = selectedText;
            deadlineHidden.value = selectedValue;
        } else {
            deadlineDisplay.innerText = 'انتخاب کنید';
            deadlineHidden.value = '';
        }
        closeModal(deadlineModal);
    };
    if (budgetInput) {
        budgetInput.addEventListener('input', function (e) {
            let val = this.value.replace(/,/g, '').replace(/[^0-9]/g, '');
            if (val) this.value = parseInt(val).toLocaleString('en-US');
            else this.value = '';
        });
    }
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('✅ درخواست شما با موفقیت ثبت شد. در اسرع وقت با شما تماس می‌گیرم.');
            contactForm.reset();
            projectDisplay.innerText = 'انتخاب کنید';
            deadlineDisplay.innerText = 'انتخاب کنید';
            projectHidden.value = '';
            deadlineHidden.value = '';
            projectCheckboxes.forEach(cb => cb.checked = false);
            deadlineRadios.forEach(radio => radio.checked = false);
            if (budgetInput) budgetInput.value = '';
        });
    }
});