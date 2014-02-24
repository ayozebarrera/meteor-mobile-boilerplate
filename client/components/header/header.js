Template.header.helpers({
  
});

Template.header.events({
  
});

Template.header.rendered = function() {
  adjustCenterHeaderMargins();
};


/** Adjusts the margins of the center text container on
 *  the header. This allows the text to overflow and still
 *  be centered with buttons of different widths.
 * @api private
 */
function adjustCenterHeaderMargins() {
  var buttons = $('.hdr-btn'),
      leftW = buttons.first().width(),
      rightW = buttons.last().width();

  $('.hdr-middle').css({
    'margin-left': '-' + leftW + 'px',
    'margin-right':'-' + rightW + 'px'
  });
}


// Global Button Events, these fire anywhere they're included. I usually
// trigger events from the page template but some buttons like back are nice
// to listen globally. May want to break out into another file if you have many

Template.backButton.events({
  'click': function() {
    history.back();
  }
});

