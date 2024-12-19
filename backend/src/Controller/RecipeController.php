<?php

namespace App\Controller;

use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\Mapping\Entity;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class RecipeController extends AbstractController
{
    //Affichage des recettes
    // #[Route("api/recipe", name: "ListRecipe", method: "GET")]
    // public function RecipeList(): JsonResponse
    // {

    // }

    //création d'une recette
    #[Route("api/recipe", name: "CreateRecipe", method: "POST")]
    public function CreateRecipe(Request $request): JsonResponse
    {
        //on récupère les datas depuis le front 
        //json_decode est une fonction qui permet de décoder une chaine json
        //request équivaut à la variable globale $_POST
        //getContent() permet de récupérer le contenu de la requête
        $data = json_decode($request->getContent(), true);
        return JsonResponse($data);
        //si on as pas de données, on retourne une erreur
        if(!$data){
            //on retourne une réponse JSOn avec en premier argument le message et en second le code status
            return new JsonResponse(["error" => 'Invalid JSON'], Response::HTTP_BAD_REQUEST);
        };

        //récupération des données depuis le json si nécessaire de les traiter
        // $name = $data['name'] ?? null;

        //vérification des données avec une validation
        // if(!$name){
        //     return new JsonResponse(["error" => "Data is invalid"], Response::HTTP_BAD_REQUEST);
        // }

        //logique d'enregistrement de la nouvelle donnée
        // $recipe = new Recipe();
        
    }
}
