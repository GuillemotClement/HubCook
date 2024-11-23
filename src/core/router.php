<?php

function getController($uri)
{
  $routes = require 'routes.php';

  $uri = parse_url($uri)['path'];

  if(array_key_exists($uri, $routes)){
    require basePath($routes[$uri]);
  }else{
    require basePath('controllers/error.controller');
  }
}

function getView($path, $data = [])
{
  extract($data);
  require basePath("views/{$path}");
}

