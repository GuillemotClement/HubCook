<?php

function basePath($path): string
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

function isActive($uri)
{
  return $_SERVER['REQUEST_URI'] === $uri;
}

function getView($path, $data = [])
{
  extract($data);
  require basePath("views/{$path}");
}