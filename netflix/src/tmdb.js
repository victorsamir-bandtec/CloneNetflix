import { Suspense } from "react";

const apiKey = "470ea88864fa07fdee90a06a14d03fb2";

const apiBase = "https://api.themoviedb.org/3";

//   - originais netflix
//   - recomendados
//   - Suspense
//   - comedia
//   - drama
//   - aventura


const pegandoDados = async (url) => {

  const req = await fetch(`${apiBase} ${url}`)
  const json = await req.json();

  return json;
}


export default {

  getHomeList: async () => {
    return [

      {
        genero: 'originais',
        titulo: 'Originais da Netflix',
        itens: await pegandoDados(
          `/discover/tv?with_network-213&language=pt-BR&api_key=${apiKey}`)
      },

      {
        genero: 'recomendados',
        titulo: 'Recomendados para você',
        itens: await pegandoDados(`/trending/all/week?language=pt-BR&api_key=${apiKey}`)
      },

      {
        genero: 'aventura',
        titulo: 'Aventura',
        itens: []
      },

      {
        genero: 'terror',
        titulo: 'Terror',
        itens: []
      },

      {
        genero: 'comedia',
        titulo: 'Comedia',
        itens: []
      },

      {
        genero: 'drama',
        titulo: 'Drama',
        itens: []
      },

      {
        genero: 'suspense',
        titulo: 'Suspense',
        itens: []
      }

    ];
  }




}