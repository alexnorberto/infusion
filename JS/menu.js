function Menu(config){
    this.nav = ( typeof config.nav === 'string') ? document.querySelector(config.nav) : config.nav;
    this.btn = ( typeof config.btn === 'string') ? document.querySelector(config.btn) : config.btn;
    
    this.wid = config.wid || false;
    
    
    
    var _opened = false;
    var _this = this;
    
    //this.btn.removeAttribute('style');
    if (window.innerWidth < _this.wid) {
        this.btn.style.display = "block";
               closeMenu();
    }
    
    this.btn.addEventListener('click',toggleMenu);
    
    
    if (this.wid){
        window.addEventListener('resize', e =>{
           
            
            
           if (window.innerWidth > _this.wid){
               _this.nav.removeAttribute('style');
               this.btn.style.display = "none";
               _opened = true;
           } else if(!_this.nav.getAttribute('style')) {
               this.btn.style.display = "block";
               closeMenu();
           } else {
               this.btn.style.display = "block";
           }
        });    
    }
    
    
    function toggleMenu(){
        if (_opened) { closeMenu(); 
        } else { openMenu(); }
    }
    
    function openMenu(){    
        
        var _style = { maxHeight: '100vh', overflow: 'hidden' };
        
        setStyle(_style);
        //_this.nav.classList.remove('hide');
        _opened = true;
    }
    
    function setStyle(_style){
        //Pega as chaves do objeto _style e percorre cada um (x), atribuindo-as ao nav
        Object.keys(_style).forEach( x => {
            //atrb X do nav recebe o atrib X do _style
            _this.nav.style[x] = _style[x];
        }
        
        )
        //_this.nav.style = stl;       
    }
    
    function closeMenu(){
        var _style = { maxHeight: 0, overflow: 'hidden' };
        
        setStyle(_style);
        //_this.nav.classList.add('hide');        
        _opened = false;
    }

}