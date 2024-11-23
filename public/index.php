<?php
const BASE_PATH = __DIR__ . '/../';

require_once (BASE_PATH . "src/core/functions.php");
require basePath('core/router');



getController($_SERVER['REQUEST_URI']);