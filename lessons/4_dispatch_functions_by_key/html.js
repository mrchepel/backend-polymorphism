const buildAttributes = (attributes) => Object.keys(attributes).map((key) => ` ${key}="${attributes[key]}"`).join('');

const stringify = (tag) => {
  const {
    name, tagType, body, ...attributes
  } = { ...tag };
  const mapping = {
    pair: () => `<${name}${buildAttributes(attributes)}>${body}</${name}>`,
    single: () => `<${name}${buildAttributes(attributes)}>`,
  };
  return mapping[tag.tagType](tag);
};

export default stringify;
