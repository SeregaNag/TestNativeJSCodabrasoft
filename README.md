# TestNativeJSCodabrasoft
Написать на нативном JS форму регистрации пользователя
поля:
  имя✅
	
    мин. кол-во символов - 2 (все условия можно было задать внутри HTML файла, (minlength="2" maxlength="25" вот так например) но я все эти условия проверяю в js файле, для того чтобы выводить собственный текст, а не тот который пишет сам браузер)
    макс. кол-во символов - 25
    обязательное поле
  фамилия✅
	
    мин. кол-во символов - 2
    макс. кол-во символов - 25
    обязательное поле
  дата рождения✅
	
    максимальная дата - сегодня
    обязательное поле
  электронная почта✅
	
    валидный email
    обязательное поле
  пароль✅
	
    минимум 8 символов
    минимум 1 символ в верхнем регистре
    минимум одна цифра 1-9
    минимум 1 специальный символ из перечисленных !@#$%(Может некорректно работать с ! не могу понять с чем это связано, регулярное выражение вроде написано правильно)
  подтверждение пароля✅
	
    обязательное поле
    должен совпадать с полем пароль

Показать сообщение(я) с ошибками валидации✅(под формой выводиться с ошибкой)


сделать запрос с валидными данными формы на POST
https://jsonplaceholder.typicode.com/posts и вывести body запроса в консоль✅(не совсем понял что надо вывести в консоль вывожу промис, в свойстве result, лежат данные которые мы отправляем)

Точка входа index.html✅


Для стилей можно использовать предпочитаемые CSS фреймворки или написать самому.✅(Адаптивная вёрстка)
