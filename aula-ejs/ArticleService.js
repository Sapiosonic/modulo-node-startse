const articles = [
  {
    id: 1,
    title: "Energy Security: Moldovas Quest for New Suppliers",
    description:
      "Moldovan President Maia Sandu has conducted various international visits and hosted leaders from multiple states in recent months. ",
  },
  {
    id: 2,
    title: "Coming in from the Soviet Cold: Feminist Politics in Kazakhstan",
    description:
      "Kazakhstan is not a country one associates with even the most nascent of feminist political cadres. ",
  },
];

function getArticles(){
  return articles;
}

function getArticlesById(articleId){
  return articles.find(article => {
    article.id === Number(articleId)
  });
}

export { getArticles, getArticlesById };