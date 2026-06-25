// --- 1. REVEAL / CURTAIN OPEN SYSTEM LOGIC ---
function openInvitation() {
    const overlay = document.getElementById('reveal-overlay');
    const btnContainer = document.getElementById('reveal-btn-container');

    btnContainer.style.transform = 'scale(0)';

    setTimeout(() => {
        overlay.classList.add('reveal-active');

        const audio = document.getElementById('bg-audio');
        const icon = document.getElementById('music-icon');

        audio.currentTime = 44; // 44 sec se start

        icon.className = 'fa-solid fa-music animate-spin';
        audio.play();

        overlay.addEventListener('transitionend', function handler() {
            overlay.classList.remove('fixed');
            overlay.removeEventListener('transitionend', handler);
        });
    }, 900);
}

// --- 2. AUDIO BACKGROUND TOGGLE MANAGEMENT ---
function toggleMusic() {
    const audio = document.getElementById('bg-audio');
    const icon = document.getElementById('music-icon');

    if (audio.paused) {
        audio.play();
        icon.className = 'fa-solid fa-music animate-spin';
    } else {
        audio.pause();
        icon.className = 'fa-solid fa-volume-xmark';
    }
}