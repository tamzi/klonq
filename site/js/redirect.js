


   // if (screen.width <= 699) {
   //     skrollr.init().destroy();
   // }

   // window.onresize = function() {
   //     if (window.innerWidth <= 700) {
   //     		skrollr.init().destroy();
   //     }
   // }


   // // DEBOUNCE FUNCTION via @http://davidwalsh.name/javascript-debounce-function
   // function debounce(a,b,c){var d;return function(){var e=this,f=arguments;clearTimeout(d),d=setTimeout(function(){d=null,c||a.apply(e,f)},b),c&&!d&&a.apply(e,f)}}

   // skrollrCheck = debounce(function() {
   //   var winWidth = window.innerWidth;
   //   if(winWidth >= 640) {
   //     // Init Skrollr
   //     skrollr.init({
   //         forceHeight: false,//disable setting height on body
   //         mobileDeceleration:0.05,
   //         render: function(data) {
   //             //Debugging - Log the current scroll position.
   //             //console.log('data.curTop: ' + data.curTop);
   //         }
   //     });
   //     skrollr.get().refresh();
   //   } else {
   //     // Destroy skrollr for screens less than 600px
   //     skrollr.init().destroy();
   //   }
   // }, 250);

   // //Initialize skrollr, but only if it exists
   // if(typeof skrollr !== typeof undefined){
   //   // INITIALIZE
   //   window.onload = skrollrCheck();
   //   window.addEventListener('resize', skrollrCheck);
   // } else {
   //   console.log('skrollr is missing.');
   // }
