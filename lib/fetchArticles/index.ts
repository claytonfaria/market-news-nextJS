const fetchArticles = async () => {
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${process.env.NEWSAPI_KEY}`
  );
  const data = await res.json();

  return data.articles;
};

export default fetchArticles;
