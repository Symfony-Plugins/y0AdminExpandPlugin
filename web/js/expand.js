/*
 * y0AdminExpandPlugin
 */

jQuery(function() {
  // bind to click event on expand inside sf_admin_list
  jQuery('.sf_admin_list').delegate('.expand', 'click', function(event) {
    // don't follow link target
    event.preventDefault();

    var $this = jQuery(this), $row = $this.closest('tr');

    if ($this.data('expansion'))
    {
      // remove expansion from DOM
      $this.data('expansion').remove();

      // remove internal data and classes
      $this.removeData('expansion').removeClass('expand-load').removeClass('expand-open');
    }
    else
    {
      // add class and internal data
      $this.addClass('expand-load').data('expansion', jQuery('<tr>', {
            // copy source row class "sf_admin_row [odd|even]"
            class: $row.attr('class') + ' expansion',
            html: jQuery('<td>', {
                // copy item class "sf_admin_action_%key%"
                class: $this.closest('li').attr('class'),
                // take full table span
                colspan: $row.children().length
            }).load($this.attr('href'), function() {
              // change css link on load
              $this.removeClass('expand-load').addClass('expand-open');
            })
      }).insertAfter($row)); // below source
    }
  });
});

