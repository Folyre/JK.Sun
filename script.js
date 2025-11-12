// 等待页面加载完毕
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.navbar a');

    // 为每个导航链接添加平滑滚动效果
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // 阻止默认跳转
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            // 平滑滚动到目标区域
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 简单的导航栏高亮效果（可根据需要扩展更复杂的效果）
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#575757';
        });
        link.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '';
        });
    });
});
