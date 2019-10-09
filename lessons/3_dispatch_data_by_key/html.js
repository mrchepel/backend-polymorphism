const getLinks = (tags) => {
  const mapping = {
    img: 'src',
    link: 'href',
    a: 'href',
  };
  return tags.filter((item) => mapping[item.name])
    .reduce((acc, item) => [...acc, item[mapping[item.name]]], []);
};

export default getLinks;
