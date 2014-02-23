//------------------------------------------------------------
//                 iOS Specific startup code
//------------------------------------------------------------


Meteor.startup(function() {
  console.log('starting up iOS code');

  var iOS = ( navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false );
  var isIosFullscreen = iOS && window.innerHeight === screen.height;

  if (isIosFullscreen) {
    // used for fullscreen ios spec. css
    $('body').addClass('ios fullscreen');

    // Change status bar text to black, iOS bug
    $('#bar-style').attr('content', 'translucent');
  } else if (iOS) {
    // used for ios spec. css
    $('body').addClass('ios');
  }

});
   
