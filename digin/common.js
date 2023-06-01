function adjustMarqueeText() {
    const marqueeContainer = document.querySelector('.marqee');
    const marqueeList = marqueeContainer.querySelector('ul');
    const marqueeItems = marqueeList.getElementsByTagName('li');

    for (let i = 0; i < marqueeItems.length; i++) {
        const item = marqueeItems[i];
        const text = item.innerText;
        const truncatedText = text.length > 30 ? text.slice(0, 30) : text;

        item.innerText = truncatedText;
    }
}

$(function(){
    $('.btn-menu').on('click', function(){
        $('.menu-2').addClass('active')
    })
    $('.btn-close').on('click', function(){
        $('.menu-2').removeClass('active')
    })
})
