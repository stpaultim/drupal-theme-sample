<?php

/**
 * @file
 * TODO: Enter file description here.
 */

/**
 * Form builder.
 */
function w6_paths_settings_form($form, &$form_state) {
  $form['w6_paths_variable_foo'] = array(
    '#type' => 'textfield',
    '#title' => t('Foo'),
    '#default_value' => variable_get('w6_paths_variable_foo', 42),
    '#required' => TRUE,
  );

  return system_settings_form($form);
}
