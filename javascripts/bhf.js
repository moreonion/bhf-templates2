$(window).load(function(){
  // two column layout
  if ($('.eaRightColumnContent').length && $('.eaLeftColumnContent').length) {
    sortTwoColumn();
    $('body').addClass('twocolumn');

    // button placement
    if ($('#main .below-form').length) {
      $('#main .below-form').first().parent().before($('.eaSubmitResetButtonGroup'));
    } else {
      $('.eaSubmitResetButtonGroup').appendTo($('#main .en_right_wrapper').last());
    }
  }

  // enable Picker and Selector
  // see http://www.benplum.com/formstone/
  if (typeof $.fn.selecter == 'function') {
    $('select').selecter();
  }
  if (typeof $.fn.picker == 'function') {
    $('input[type=radio], input[type=checkbox]').picker();
  }
  // add a class for picker labels higher than the handle
  $('.picker-label').each(function(){
    var label = $(this);
    var handle = label.siblings('.picker-handle');
    if (label.height() > 25){
      label.parent().addClass('multiline');
    }
  });

  // move validation icon next to label
  // and the error message below the label
  $('.eaErrorMessage').each(function() {
    var self = $(this);
    var label = self.siblings('.eaFormElementLabel');
    var field = self.siblings('.eaFormField');
    var icon = $('.eaValidationIcon', label.parent());
    icon.appendTo(label);
    self.appendTo(field);
  });

  // add class to field, where error occured
  $(window).on('DOMSubtreeModified', '.eaErrorMessage', function(e) {
    var self = $(e.target);
    if (!self.is(':empty')) {
      self.parent().not('form').addClass('validationError');
    }
  });

  // add classes indicating last element above
  // and first element below the actual form fields
  if ($('.eaRightColumnContent .eaFormField, .eaRightColumnContent .eaMessageContent').length) {
    $('.en_right_wrapper .above-form').last().addClass("last");
    $('.en_right_wrapper .below-form').first().addClass("first");
  }
  $('.en_right_wrapper .above-form, .en_right_wrapper .no-form').first().addClass("first");

  // add "show more" link functionality
  function showMore ($toggle, $target) {
    $toggle.on('click', function(e) {
      if ($target.length > 0) {
        $target.slideDown('fast', function(){
          $toggle.hide();
        });
      }
      e.preventDefault();
      return false;
    });
  }
  // toggle background info
  $('#background-info').hide();
  $('.info-toggle').css('display', 'block');
  showMore($('.info-toggle'), $('#background-info'));

  // toggle intro text on mobile
  showMore($('.show-intro'), $('#intro-copy'));


  // config settings for
  // pgbar / thermometer / counter
  function thermoConfig(el) {
    var campaignId = $('input[name="ea.campaign.id"]').val();
    if (!campaignId) {
      return null;
    }
    var $el = $(el);
    var config = {};
    var defaults = {
      campaignId: campaignId, // reload on every page, not saved
      '$el': $el, // reload on every page, not saved
      start: 0, // overridable by config copy block
      target: 250, // overridable by config copy block
      service: 'EaEmailAOTarget' // overridable by config copy block
    };

    // config overridable here
    var dataAttrs = {};
    var thermometerDataTarget = $el.data('target');
    if (typeof thermometerDataTarget !== 'undefined') {
      var parsedTarget = parseInt(thermometerDataTarget, 10);
      if (!isNaN(parsedTarget) && parsedTarget > 0) {
        dataAttrs['target'] = parsedTarget;
      }
    }
    var thermometerDataStart = $el.data('start');
    if (typeof thermometerDataStart !== 'undefined') {
      var parsedStart = parseInt(thermometerDataStart, 10);
      if (!isNaN(parsedStart) && parsedStart > 0) {
        dataAttrs['start'] = parsedStart;
      }
    }
    var thermometerDataService = $el.data('service');
    if (typeof thermometerDataService !== 'undefined') {
      if (thermometerDataService == 'NetDonor' || thermometerDataService == 'EaEmailAOTarget') {
        dataAttr['service'] = thermometerDataService;
      }
    }
    config = $.extend(defaults, dataAttrs);
    return config;
  }
  // get pgbar config, initialize it
  var thConfig = thermoConfig('.pgbar-thermometer');
  thConfig['$el'].eActivistThermometer({
    token: "43c85a23-dad8-4fc0-bda5-bba7d824d0a7",
    campaignId: thConfig['campaignId'],
    target: parseInt(thConfig['target'], 10),
    initialValue: parseInt(thConfig['start'], 10),
    service: thConfig['service'],
    targetDataColumn: 'participatingSupporters'
  });

  // sticky header
  var sticky = new Waypoint.Sticky({
    element: $('#sticky-target')[0],
    offset: -150
  });
  var waypointhidden = new Waypoint({
    element: $('#sticky-target')[0],
    offset: -50,
    handler: function (direction) {
      if (direction == "down") {
        $(this.element).addClass("down")
        $(this.element).removeClass("up")
      } else if (direction == "up")  {
        $(this.element).removeClass("down")
        $(this.element).addClass("up")
      }
    }
  });
});
