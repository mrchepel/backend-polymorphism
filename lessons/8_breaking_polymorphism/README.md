## helpers.js

Реализуйте и экспортируйте по умолчанию функцию `getGreeting(user)`, которая возвращает приветствие для пользователя. Это приветствие показывается пользователю на сайте. Если пользователь гость, то выводится `Nice to meet you Guest!`, если не гость, то `Hello <Имя>!`, где `<Имя>` это имя реального пользователя.

В этой задаче, способ решения остается на ваше усмотрение. Используйте знания полученные в этом курсе.

```
import Guest from '../guest';
import User from '../user';
import getGreeting from '../helpers';

const guest = new Guest();
getGreeting(guest); // 'Nice to meet you Guest!'

const user = new User('Petr');
getGreeting(user); // 'Hello Petr!'
```

## Подсказки

* Изучите тесты
