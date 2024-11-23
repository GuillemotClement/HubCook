<?php
//$router contient l'objet Router de index.php
$router->get('/', 'homepage.controller');

$router->get('/recipes', 'recipes/index');