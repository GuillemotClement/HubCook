<?php

function basePath($path)
{
return (BASE_PATH . "src/{$path}.php");
}

function dd($value)
{
echo '<pre>';
  var_dump($value);
  echo '</pre>';
die();
}