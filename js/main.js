$(document).ready(function() {
  $('.tabbed-content li').on('click', 'a', function(e) {
    var $tabs = $('.tabbed-content li'),
        $sections = $('.content section'),
        $currentTab = $(this).parent(),
        $currentSection = $('.content section:eq(' + $currentTab.index() + ')');
    
    if (!$currentTab.hasClass('active')) {
      /* Reset old active elements */
      $tabs.removeClass('active');
      $sections.removeClass('active');

      /* Add active classes to the selected tab and section */
      $currentTab.addClass('active');
      $currentSection.addClass('active');
    }

    e.preventDefault();
  });
});