<?php

namespace App\Controller;

use App\Entity\Recipe;
use App\Repository\RecipeRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Constraints\Json;

class RecipeController extends AbstractController
{
  //Affichage des recettes
  #[Route("api/recipes", name: "ListRecipe", methods: ["GET"])]
  public function listRecipe(RecipeRepository $recipeRepository, SerializerInterface $serializer): JsonResponse
  {
    $recipeList = $recipeRepository->findAll();
    $jsonRecipeList = $serializer->serialize($recipeList, 'json');
    return new JsonResponse($jsonRecipeList, Response::HTTP_OK, [], true);
  }

  #[Route("api/recipes/{id}", name: "ShowRecipe", methods: ["GET"])]
  public function detailRecipe(Recipe $recipe, SerializerInterface $serializer): JsonResponse
  {
    $jsonRecipe = $serializer->serialize($recipe, 'json');
    return new JsonResponse($jsonRecipe, Response::HTTP_OK, [], true);
  }

  //création d'une recette
  #[Route("api/recipes", name: "CreateRecipe", methods: ["POST"])]
  public function createRecipe(Request $request, SerializerInterface $serializer, EntityManagerInterface $em): JsonResponse
  {
    //récupération des données provenant du front au format JSON
    $recipe = $serializer->deserialize($request->getContent(), Recipe::class, 'json');
    //on ajoute la date de la création
    $recipe->setCreatedAt(new \DateTimeImmutable());

    //préparation de la requête
    $em->persist($recipe);
    //sauvegarde en base de données
    $em->flush();

    //conversion en JSON de la donnée
    $jsonRecipe = $serializer->serialize($recipe, 'json');

    //retourne la nouvelle ressource au format JSON
    return new JsonResponse($jsonRecipe, Response::HTTP_CREATED, [], true);
  }

  //Edition d'une recette
  #[Route("api/recipes/{id}", name: "UpdateRecipe", methods: ["PUT"])]
  public function updateRecipe(Request $request, SerializerInterface $serializer, EntityManagerInterface $em): JsonResponse
  {
    $updateRecipe = $serializer->deserialize($request->getContent(), Recipe::class, 'json');
    $updateRecipe->setUpdatedAt(new \DateTimeImmutable());
    $em->persist($updateRecipe);
    $em->flush();
    return new JsonResponse(null, Response::HTTP_NO_CONTENT);
  }
  //suppression
  #[Route("api/recipes/{id}", name: "DeleteRecipe", methods: ["DELETE"])]
  public function deleteRecipe(Recipe $recipe, EntityManagerInterface $em): JsonResponse
  {
    $em->remove($recipe);
    $em->flush();
  }
}
