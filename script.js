document.addEventListener('DOMContentLoaded', function() {
    var thumbnails = document.querySelectorAll('.thumbnail-row img');
    var mainImage = document.querySelector('.main-image img');//选取类名为.main-image的元素下的第一个img标签，并将其存储在变量mainImage中

    thumbnails.forEach(function(thumbnail) {
        thumbnail.addEventListener('click', function() {
            mainImage.src = this.src;
        });// 使用forEach方法遍历thumbnails数组中的每一个元素（即每一个缩略图），为每一个缩略图添加一个点击事件监听器，当缩略图被点击时，主图将显示与被点击的缩略图相同的图片
    });
});//该事件在初始HTML文档被完全加载和解析完成后触发，而不需要等待样式表、图片和子框架的加载。这意味着代码会在页面的DOM完全可用后立即执行