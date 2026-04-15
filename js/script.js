document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        this.classList.toggle('active');
    });
    
    // 生成星空效果
    function createStars() {
        const stars = document.getElementById('stars');
        const stars2 = document.getElementById('stars2');
        const stars3 = document.getElementById('stars3');
        
        let starsHTML = '';
        let stars2HTML = '';
        let stars3HTML = '';
        
        // 生成700个小星星
        for (let i = 0; i < 700; i++) {
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            starsHTML += `${x}vw ${y}vh #FFF, `;
        }
        
        // 生成200个中星星
        for (let i = 0; i < 200; i++) {
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            stars2HTML += `${x}vw ${y}vh #FFF, `;
        }
        
        // 生成100个大星星
        for (let i = 0; i < 100; i++) {
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            stars3HTML += `${x}vw ${y}vh #FFF, `;
        }
        
        // 移除最后一个逗号
        starsHTML = starsHTML.slice(0, -2);
        stars2HTML = stars2HTML.slice(0, -2);
        stars3HTML = stars3HTML.slice(0, -2);
        
        // 设置box-shadow
        stars.style.boxShadow = starsHTML;
        stars2.style.boxShadow = stars2HTML;
        stars3.style.boxShadow = stars3HTML;
    }
    
    createStars();

    // 点击导航链接时关闭移动端菜单
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        });
    });
});