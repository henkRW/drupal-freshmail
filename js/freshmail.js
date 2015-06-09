(function($) {
  Drupal.behaviors.freshmail = {
    attach: function(context, settings) {
      $('form.freshmail').submit(function() {
        $form = $(this);
        $form.addClass('loading');
        var _url = $form.attr('action')
        $input = $form.find('input[type=email]');
        $btn = $form.find('button');
        $input.attr('disabled', 'disabled');
        $btn.attr('disabled', 'disabled');
        var _data = {
          email: $input.val()
        }
        $.post(_url, _data)
        .done(function(data) {
            if (data.status) {
              if (data.status == 'OK') {
                $form.find('.freshmail-messege').show();
                $form.find('.freshmail-messege').text(Drupal.t('E-mail został poprawnie dodany. Prosimy o sprawdzenie skrzynki w celu potwierdzenia adresu.'));
              } else {
                $form.find('.freshmail-messege').show();
                $form.find('.freshmail-messege').text(data.status);
              }
            } else if (data.error_message) {
              $form.find('.freshmail-messege').show();
              $form.find('.freshmail-messege').text(data.error_message);
              alert(data.error_message);
            }
            $input.removeAttr('disabled');
            $btn.removeAttr('disabled');
            $form.removeClass('loading');
        })
        .fail(function(data) {
           console.log('freshmail fail',data);
           $input.removeAttr('disabled');
           $btn.removeAttr('disabled');
           $form.removeClass('loading');
        })
        return false;
      });
    }
  }
})(jQuery);