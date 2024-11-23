<?php
const BASE_PATH = __DIR__ . '/../';

require_once(BASE_PATH . "src/Core/functions.php");
require(BASE_PATH . 'vendor/autoload.php');

$router = new \Core\Router();

$routes = require(BASE_PATH . 'routes.php');


$uri = parse_url($_SERVER['REQUEST_URI'])['path'];
$method = $_POST['_method'] ?? $_SERVER['REQUEST_METHOD'];

$router->routing($uri, $method);

