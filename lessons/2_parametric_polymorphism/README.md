В этой практике вам предстоит поработать с односвязным списком. Для лучшего понимания задачи, прочитайте литературу данную в подсказках и изучите исходники файла Node.js, внутри которого находится реализация односвязного списка. И посмотрите тесты, там видно как список создается и используется.

## linkedList.js
Реализуйте и экспортируйте по умолчанию функцию `reverse(list)`, которая принимает на вход односвязный список и переворачивает его.

```import Node from './Node';
import reverse from './linkedList';

const numbers = new Node(1, new Node(2, new Node(3))); // => (1, 2, 3)
const reversedNumbers = reverse(numbers); // => (3, 2, 1)
```
## Подсказки
[Односвязный список](https://ru.wikipedia.org/wiki/%D0%A1%D0%B2%D1%8F%D0%B7%D0%BD%D1%8B%D0%B9_%D1%81%D0%BF%D0%B8%D1%81%D0%BE%D0%BA#%D0%9E%D0%B4%D0%BD%D0%BE%D1%81%D0%B2%D1%8F%D0%B7%D0%BD%D1%8B%D0%B9_%D1%81%D0%BF%D0%B8%D1%81%D0%BE%D0%BA_(%D0%BE%D0%B4%D0%BD%D0%BE%D0%BD%D0%B0%D0%BF%D1%80%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9_%D1%81%D0%B2%D1%8F%D0%B7%D0%BD%D1%8B%D0%B9_%D1%81%D0%BF%D0%B8%D1%81%D0%BE%D0%BA))
