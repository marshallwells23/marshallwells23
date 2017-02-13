var button = document.querySelector("#showRight");
var icon = document.querySelector("#menuIcon");
var showRight = document.querySelector('#showRight');
var closeRight = document.querySelector('#closeRight');
menuRight = document.getElementById('cbp-spmenu-s2');

// button.addEventListener("click", function(){
//   icon.classList.toggle("fa-angle-double-right");
//   icon.classList.toggle("fa-angle-double-left");
//   icon.classList.toggle("showRight");
// });

  showRight.onclick = function() {
				classie.toggle( this, 'active' );
				classie.toggle( menuRight, 'cbp-spmenu-open' );
			};
  closeRight.onclick = function() {
      				classie.toggle( this, 'active' );
      				classie.toggle( menuRight, 'cbp-spmenu-open' );
      			};
