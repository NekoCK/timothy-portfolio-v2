(()=>{
  const header=document.querySelector('header');
  const nav=header&&header.querySelector('nav');
  if(!header||!nav||header.querySelector('.mobile-menu-button'))return;

  const lang=(document.documentElement.lang||'en').toLowerCase();
  const labels=lang.startsWith('zh')
    ?{open:'開啟選單',close:'關閉選單'}
    :lang.startsWith('ja')
      ?{open:'メニューを開く',close:'メニューを閉じる'}
      :{open:'Open menu',close:'Close menu'};
  const button=document.createElement('button');
  button.type='button';
  button.className='mobile-menu-button';
  button.setAttribute('aria-label',labels.open);
  button.setAttribute('aria-expanded','false');
  button.setAttribute('aria-controls','mobile-menu');
  button.innerHTML='<span class="mobile-menu-icon" aria-hidden="true"></span>';
  nav.id='mobile-menu';
  header.insertBefore(button,nav);

  const media=matchMedia('(max-width:860px)');
  let open=false;
  let scrollY=0;
  const visible=el=>!!(el.offsetWidth||el.offsetHeight||el.getClientRects().length);
  const focusables=()=>[button,...nav.querySelectorAll('a[href],button:not([disabled])')].filter(visible);

  function lockPage(){
    scrollY=window.scrollY;
    document.documentElement.classList.add('mobile-menu-lock');
    document.body.style.position='fixed';
    document.body.style.top=`-${scrollY}px`;
    document.body.style.width='100%';
  }
  function unlockPage(){
    document.documentElement.classList.remove('mobile-menu-lock');
    document.body.style.position='';
    document.body.style.top='';
    document.body.style.width='';
    window.scrollTo(0,scrollY);
  }
  function setOpen(next,{restoreFocus=false}={}){
    if(!media.matches)next=false;
    if(next===open)return;
    open=next;
    header.classList.toggle('mobile-menu-open',open);
    button.setAttribute('aria-expanded',String(open));
    button.setAttribute('aria-label',open?labels.close:labels.open);
    if(open){
      lockPage();
      requestAnimationFrame(()=>{const items=focusables();(items[1]||items[0])?.focus()});
    }else{
      unlockPage();
      if(restoreFocus)button.focus();
    }
  }

  button.addEventListener('click',()=>setOpen(!open));
  nav.addEventListener('click',event=>{
    if(event.target.closest('a[href]'))setOpen(false);
  });
  document.addEventListener('pointerdown',event=>{
    if(open&&!header.contains(event.target))setOpen(false);
  });
  document.addEventListener('keydown',event=>{
    if(!open)return;
    if(event.key==='Escape'){
      event.preventDefault();
      setOpen(false,{restoreFocus:true});
      return;
    }
    if(event.key!=='Tab')return;
    const items=focusables();
    if(!items.length)return;
    const first=items[0],last=items[items.length-1];
    if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus()}
    else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus()}
  });
  media.addEventListener('change',event=>{if(!event.matches)setOpen(false)});
})();
