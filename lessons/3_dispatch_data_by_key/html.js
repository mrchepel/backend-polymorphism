const getLinks = (tags) => {
  const tagLink = {
    img: 'src',
    link: 'href',
    a: 'href',
  };
  return tags.filter((item) => tagLink[item.name])
    .reduce((acc, item) => [...acc, item[tagLink[item.name]]], []);
};

export default getLinks;
