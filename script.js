// 1. 导航条滚动变色（动态效果）
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#1a2530'; // 滚动后变深
    } else {
        navbar.style.backgroundColor = '#2c3e50'; // 初始颜色
    }
});

// 2. 个人照片hover放大（动态效果）
const profilePhoto = document.querySelector('.profile-photo');
profilePhoto.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.1)'; // 放大1.1倍
});
profilePhoto.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)'; // 恢复原大小
});

// 3. 平滑滚动（点击导航跳转无卡顿）
document.querySelectorAll('#navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
