<?php

namespace Core;

class Utils
{
  /**
   * Affiche la valeur contenu dans la variable
   * @param mixed $value la valeur à afficher
   * @return void affiche le contenu de la variable
   */
  public static function dd(mixed $value): void
  {
    echo '<pre>';
    var_dump($value);
    echo '</pre>';
  }


}