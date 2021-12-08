const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'fdf1aa06f4acd57d8a35bb8ec5973c0b',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;