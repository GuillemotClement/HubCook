<?php
namespace Core;

class Router
{
  private $routes;

  function __construct()
  {
    $this->routes = require (__DIR__ . "/../routes.php");
  }

  private function basePath($path)
  {
    return __DIR__ . "/../controllers/{$path}.php";
  }

  private function getUri($uri)
  {
    $uri = parse_url($uri);
    return $uri['path'];
  }

  public function getRoute($uri)
  {
    $uri = $this->getUri($uri);
    if(array_key_exists($uri, $this->routes)){
      return require $this->basePath($this->routes[$uri]);
    }
  }
}