<?php

require(__DIR__ . "/../vendor/autoload.php");

use \Core\Router;
use \Core\Utils;

$router = new Router();

$router->getRoute($_SERVER['REQUEST_URI']);




