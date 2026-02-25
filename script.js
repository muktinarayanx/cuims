// ===== SIDEBAR TOGGLE =====
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
const content = document.querySelector('.content');

menuToggle.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
        sidebar.classList.toggle('open');
    } else {
        sidebar.classList.toggle('collapsed');
        content.classList.toggle('expanded');
    }
});

// ===== RESPONSIVE SIDEBAR =====
function handleResize() {
    if (window.innerWidth <= 768) {
        sidebar.classList.add('collapsed');
        content.classList.add('expanded');
    } else {
        sidebar.classList.remove('collapsed');
        sidebar.classList.remove('open');
        content.classList.remove('expanded');
    }
}

window.addEventListener('resize', handleResize);
handleResize();

// ===== ACTIVE NAV HIGHLIGHT =====
const navItems = document.querySelectorAll('.nav-item');
navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        navItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
    });
});

// ===== SEARCH FUNCTIONALITY =====
const searchInput = document.querySelector('.search-bar input');
searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        const query = searchInput.value.trim();
        if (query) {
            // Highlight matching nav items
            navItems.forEach(item => {
                const text = item.textContent.toLowerCase();
                if (text.includes(query.toLowerCase())) {
                    item.style.background = '#fff3cd';
                    item.style.color = '#856404';
                } else {
                    item.style.background = '';
                    item.style.color = '';
                }
            });
        } else {
            navItems.forEach(item => {
                item.style.background = '';
                item.style.color = '';
            });
        }
    }
});

// ===== ANNOUNCEMENT SEARCH =====
const announcementSearch = document.querySelector('.announcement-search input');
if (announcementSearch) {
    announcementSearch.addEventListener('keyup', (e) => {
        const query = e.target.value.toLowerCase();
        const items = document.querySelectorAll('.announcement-item');
        items.forEach(item => {
            const text = item.textContent.toLowerCase();
            item.style.display = text.includes(query) ? '' : 'none';
        });
    });
}

// ===== QUICK CARD HOVER ANIMATION =====
const quickCards = document.querySelectorAll('.quick-card');
quickCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-3px)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
    });
});

// ===== DOWNLOAD BUTTON =====
const downloadBtn = document.querySelector('.download-btn');
if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
        alert('Virtual ID Card download will start shortly.');
    });
}

// ===== CURRENT YEAR IN FOOTER =====
// Add dynamic year if needed
console.log('CUIMS Student Portal loaded successfully.');
