var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });


let subNav = document.getElementById('subNav'); 
let sponsorBtn = document.getElementById('sponsorBtn');

function triggerSubNav(){ 
  if(window.pageYOffset > 1900){
    subNav.classList.remove('position-sticky','top-0','zIndexTop');
		// 當 window.pageYOffset > 1900 條件成立時，
    // 移除 subNav 的 'position-sticky','top-0','zIndexTop' 三個 class 
  }else{
    subNav.classList.add('position-sticky','top-0','zIndexTop');
	 //  當 window.pageYOffset > 1900 條件不成立時，
    // 把 subNav 加上 'position-sticky','top-0','zIndexTop' 三個 class 
  }
}
window.addEventListener("scroll",triggerSubNav);

function triggerSponsorBtn(){
  if(window.pageYOffset > 400 && window.pageYOffset < 1800){
    sponsorBtn.classList.remove('d-none');
  }else{
    sponsorBtn.classList.add('d-none');
  }
}
window.addEventListener("scroll",triggerSponsorBtn);

