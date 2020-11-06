function Carousel(config){
    this.container = ( typeof config.container === 'string') ? document.querySelector(config.container) : config.container;
    this.itens = ( typeof config.itens === 'string') ? this.container.querySelectorAll(config.itens) : config.itens;
    this.btnprev = ( typeof config.btnprev === 'string') ? this.container.querySelector(config.btnprev) : config.btnprev;
    this.btnnext = ( typeof config.btnnext === 'string') ? this.container.querySelector(config.btnnext) : config.btnnext;
    
    let _this = this;
    let _show = "show";
    let _iStart = 0;
    const _iMax = _this.itens.length - 1;
    let _current = _this.itens[_iStart];
    
    setShow(_current);
    
    _this.btnnext.addEventListener('click',nextImg);
    _this.btnprev.addEventListener('click',prevImg);    
    
    function nextImg(){
        if (_this.itens[_iStart + 1]) { 
            _iStart++;
        } else {
            _iStart = 0;
        } 
        _current = _this.itens[_iStart];
        setShow(_current);
    }  
    
    function prevImg(){
        if (_this.itens[_iStart - 1]) {
            _iStart--;
        } else {
            _iStart = _iMax;
        }
        _current = _this.itens[_iStart];
        setShow(_current);
    }   
    
        function setShow(item){
        for (let i = 0; i <= _iMax; i++) {
            if (_this.itens[i].classList.contains(_show)) {
                _this.itens[i].classList.remove(_show);       
            }
            _this.itens[i].classList.add("notshow");
            console.log('i '+ i + " - " + _this.itens[i].classList);
        }
        item.classList.remove("notshow");
        item.classList.add(_show);
        console.log(" - " + item.classList);
    }
    


    function Show(item){
        for (let i = 0; i <= _iMax; i++) {
            console.log('i '+ i);
            _this.itens[i].style.visibility = "hidden"; 
            console.log('V '+ _this.itens[i].style.visibility.valueOf());
        }
        item.style.visibility = "visible";
    }
    
}