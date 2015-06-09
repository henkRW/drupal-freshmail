<?php print t('Subscribe and get <span>10%</span> discount!'); ?>
<form class="freshmail" action="<?php print $action; ?>" method="post">
  <input class="text freshmail_input" type="email" id="email" name="email" placeholder=" <?php print t('Enter Your e-mail here') ?> "/>
  <input class="action" type="submit" value="<?php print $send; ?>" />
  <div class="freshmail-messege"></div>
</form>