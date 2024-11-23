<?php

namespace Core;

class Router
{
  protected $routes = [];

  private function addRoute($path, $controller, $method)
  {
    $this->routes[] = compact('path', 'controller', 'method');
  }

  public function get($path, $controller)
  {
    $this->addRoute($path, $controller, 'GET');
  }

  public function post($path, $controller)
  {
    $this->addRoute($path, $controller, 'POST');
  }

  public function delete($path, $controller)
  {
    $this->addRoute($path, $controller, 'DELETE');
  }

  public function put($path, $controller)
  {
    $this->addRoute($path, $controller, 'PUT');
  }
  public function patch($path, $controller)
  {
    $this->addRoute($path, $controller, 'PATCH');
  }

  private function getPath($uri)
  {
    return parse_url($uri)['path'];
  }
  public function routing($uri, $method)
  {
    foreach ($this->routes as $route) {
      if($route['path'] === $uri && $route['method'] === strtoupper($method)){
        return require basePath("controllers/{$route['controller']}");
      }
    }
    $this->abort();
  }

  protected function abort($code = 404)
  {
    http_response_code($code);
    require basePath('views/error.view');
    die();
  }
}
