<?php

namespace Core;

class Utils
{
  public function dd( $value): void
  {
    echo '<pre>';
    var_dump($value);
    echo '</pre>';
  }
}