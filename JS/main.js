(function(){
    var $body = document.querySelector('body');
    $body.classList.remove('no-js');
    $body.classList.add('js');
    
    //var $menu = document.querySelector('#header_btnMenu');
    //$menu.removeAttribute('style');
    
    var menu = new Menu({
        nav: "#header_nav",
        btn: "#header_btnMenu",
        wid: 1023 //media query width enabled
    });
    
    var carouselImgs = new Carousel({
        container: '#carouselImgs',
        itens: '#carouselImgs figure',
        btnprev: '#carouselImgs .btnprev',
        btnnext: '#carouselImgs .btnnext'
    });
    
    var carouselMsgs = new Carousel({
        container: '#section5',
        itens: '#section5 figure',
        btnprev: '#section5 .prev',
        btnnext: '#section5 .next'
    });
        
})()