const apiKey = "470ea88864fa07fdee90a06a14d03fb2";

const apiBase = "https://api.themoviedb.org/3";

const pegandoDados = async (url) => {

  const req = await fetch(`${apiBase}${url}`)
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
        genero: 'ação',
        titulo: 'Ação',
        itens: await pegandoDados(`/discover/movie?with_generes=28&language=pt-BR&api_key=${apiKey}`)
      },

      {
        genero: 'terror',
        titulo: 'Terror',
        itens: await pegandoDados(`/discover/movie?with_generes=27&language=pt-BR&api_key=${apiKey}`)
      },

      {
        genero: 'comedia',
        titulo: 'Comedia',
        itens: await pegandoDados(`/discover/movie?with_generes=35&language=pt-BR&api_key=${apiKey}`)
      },

      {
        genero: 'drama',
        titulo: 'Drama',
        itens: await pegandoDados(`/discover/movie?with_generes=18&language=pt-BR&api_key=${apiKey}`)
      },

      {
        genero: 'Ficção',
        titulo: 'Ficção Cientifica',
        itens: await pegandoDados(`/discover/movie?with_generes=878&language=pt-BR&api_key=${apiKey}`)
      }

    ];
  }




}