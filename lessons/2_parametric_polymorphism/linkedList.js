import Node from './Node';

const reverse = (list) => {
  let head = null;
  let current = list;

  while (current) {
    head = new Node(current.getValue(), head);
    current = current.getNext();
  }
  return head;
};
export default reverse;
