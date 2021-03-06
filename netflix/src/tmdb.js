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
        genero: 'netflix',
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
        genero: 'acao',
        titulo: 'Ação',
        itens: await pegandoDados(`/discover/movie?with_genres=28&language=pt-BR&api_key=${apiKey}`)
      },

      {
        genero: 'terror',
        titulo: 'Terror',
        itens: await pegandoDados(`/discover/movie?with_genres=27&language=pt-BR&api_key=${apiKey}`)
      },

      {
        genero: 'comedia',
        titulo: 'Comedia',
        itens: await pegandoDados(`/discover/movie?with_genres=35&language=pt-BR&api_key=${apiKey}`)
      },

      {
        genero: 'drama',
        titulo: 'Drama',
        itens: await pegandoDados(`/discover/movie?with_genres=18&language=pt-BR&api_key=${apiKey}`)
      },

      {
        genero: 'ficcao',
        titulo: 'Ficção Cientifica',
        itens: await pegandoDados(`/discover/movie?with_genres=878&language=pt-BR&api_key=${apiKey}`)
      }

    ];
  },

  getMovieInfo: async (movieId, type) => {

    let info = {};

    if (movieId) {
      switch (type) {
        case 'movie':
          info = await pegandoDados(`/movie/${movieId}?language=pt-BR&api_key=${apiKey}`)
          break;

        case 'tv':
          info = await pegandoDados(`/tv/${movieId}?language=pt-BR&api_key=${apiKey}`)
          break;

        default:
      }
    }

    return info;
  }


}