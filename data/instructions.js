/*jshint esversion: 6 */
define(['mozart'], function (mozart) {
	var instructionData = mozart(function(prototype, _, _protected, __, __private) {
		prototype.ru = [

//////////// УРОВЕНЬ 1 /////////////////////////////////////////////////////////
`
<h1>Уровень 1: Введение</h1>
JavaScript — очень популярный язык сценариев для веб-приложений.
Почти каждый веб-сайт (и этот не исключение) использует JavaScript для динамического отображения информации в вашем браузере.
<br><br>
<h2>Вкладка «Console»</h2>
Прежде чем мы будем писать код, мы начнем с основ: использование консоли. Консоль — это инструмент, который разработчики используют для проверки правильности работы программы, он используется для регистрации выходных данных программы и позволяет нам взаимодействовать с ней.
<br><br>
Во вкладке <b>Console</b> напишите <code>5 + 8</code> в текстовое поле, нажмите Enter и посмотрите что произойдет.<br>
			
Первая строка ( <code>&rarr; 5 + 8</code> ) ваши входные значения,
и вторая строка( <code class="console-out">&larr; 13</code> ) это выходные значения после того, как JavaScript выполнит ваш ввод.
<br><br>
Теперь о кое-чем более интересном. Запустите <code>robot.info().x</code> в консоли, вывод <code class="console-out">&larr; 80</code> это позиция робота по оси <b>x</b> в игре.<br><br>

Есть и другие свойства робота, попробуйте следующие и поймите что они выводят:<br>
<code>robot.info().y</code> <code>robot.info().health</code> <code>robot.info().energy</code> <code>robot.info().width</code>

<br><br>
<a href="https://developer.mozilla.org/ru/docs/Web/API/Console" target="_blank" class="learn-more">Узнайте больше о консоли</a>
<br><br>
<h2>Вкладка «Script»</h2>
Окей, круто. Итак, теперь мы можем поговорить с консолью. Давайте попробуем заставить робота разговаривать с консолью.<br>
Во вкладке <b>Script</b> вы увидете следующий код:
<div class="code">function init(robot) {
	// напишите код здесь...
}

function loop(robot) {
	// напишите код здесь...
}</div>

Это функции JavaScript, так мы будем управлять роботом Sicko!<br>
Строки, начинающиеся в двух слэшей <code>\/\/</code> - это комментарии, они для нас (людей), чтобы лучше понимать код, который мы пишем. Они бесполезны для программы, поэтому она их игнорирует.<br><br>

Функция <code>init(robot)</code> является сокращением от initialize (инициализировать), эта функция запускается один раз при запуске программы.<br>
Функция <code>loop(robot)</code> работает непрерывно во время работы программы.
<br><br><br><br>
Измените функцию <code>init(robot)</code> чтобы код выглядел таким образом:<br>
<div class="code">function init(robot) {
	console.log("Sicko initializing...");
}

function loop(robot) {
	// напишите код здесь...
}</div>
Нажмите кнопку <b>Run</b> в верхней части страницы, затем откройте вкладку <b>Console</b>.<br>
Вы заметите вывод <code class="console-out">&larr; Sicko initializing...</code>.<br>
Строка <code>console.log(<i>...</i>);</code> выведет в консоль все, что находится между скобками.<br>
Нажмите на вкладку <b>Reset</b> вверху страницы для сброса уровня и очистки консоли.

<br><br><br><br>
Теперь проделайте то же самое для функции <code>loop(robot)</code>, ваш код будет выглядеть следующим образом:
<div class="code">function init(robot) {
	console.log("Sicko initializing...");
}

function loop(robot) {
	console.log("Sicko looping...");
}</div>
Нажмите на кнопку <b>Run</b> и откройте вкладку <b>Console</b> ещё раз.<br>
Вы должны увидеть <code class="console-out">&larr; Sicko initializing...</code> как прежде, но теперь <code class="console-out">&larr; Sicko looping...</code> пишется снова и снова (3 раза в секунду).<br>
Нажмите кнопку <b>Pause</b> и это должно прекратиться.
Нажмите копку <b>Reset</b> и очистите консоль<br><br>

<h2>Управление роботом</h2>
Цель игры состоит в том, чтобы добраться до флага в конце каждого уровня. Робот может получить урон, и у него может разрядиться аккумулятор, когда он выполняет различные действия. Вы проигрываете, если у робота заканчивается энергия или он получает слишком много урона.<br><br>

Робот Sicko имеет следующие <b>actions:</b>(действия) <code>move</code>, <code>jump</code>, <code>shoot</code>, <code>turn</code> и <code>wait</code>.<br><br>
Действие <code>move</code> имеет свойства <b>amount</b> в диапазоне от <b>-40</b> до <b>40</b>. Положительная величина перемещает робота вправо, отрицательная — влево.<br>
Действие <code>jump</code> тоже имеет свойство <b>amount</b>, но с диапазоном от <b>-10</b> до <b>10</b>, и, как и прежде, положительное значение указывает роботу прыгать вправо, отрицательное — влево.<br><br>

Чтобы управлять роботом, установите его action, как показано в следующей функции loop:
<div class="code">function loop(robot) {
	robot.action = {type: 'move', amount: 40};
}</div>
Это скажет роботу перемещаться на 40 пикселей вправо каждый раз, когда он выполняет функцию loop (цикл), которая выполняется с определённой скоростью три раза в секунду.<br>Введите код в поле во вкладке <b>Script</b> и нажмите кнопку <b>Run</b>.<br><br>`,


//////////// УРОВЕНЬ 2 /////////////////////////////////////////////////////////
`
<h1>Уровень 2: Продолжение введения (и переменные)</h1>

<h2>Интерфейс игрока и вкладка «Properties» (свойства)</h2>
В правом верхнем углу экрана вы увидите полезную информацию в <b>дисплее сверху</b><br>
Здоровье и энергия робота Sicko, сколько монет он собрал и положение мыши по оси <b>x</b> и <b>y</b>.<br>
Это сделает игру более удобной.<br><br>
Вкладка <b>Properties</b> показывает более подробную информацию о роботе.<br>
Она вам пока не понадобится, но полезно знать, что она существует на будущее!

<h2>Practice Mode (Тренировочный режим)</h2>
<h3>Управление клавиатурой</h3>
В левом верхнем углу вы увидите кнопку, похожую на клавиши со стрелками на клавиатуре, она включает <b>Управление клавиатурой</b> роботом<br>
Нажмите на нее, теперь вы можете управлять роботом с клавиатуры, элементы управления по умолчанию:
	<table>
	<tr><td>
	Двигаться влево
	</td><td>
	A
</td></tr><tr><td>
	Двигаться вправо
	</td><td>
	D
</td></tr><tr><td>
	Прыжок
	</td><td>
	W
</td></tr><tr><td>
	Прыжок влево
	</td><td>
	Q
</td></tr><tr><td>
	Прыжок вправо
	</td><td>
	E
</td></tr><tr><td>
	Поворот
	</td><td>
	T
</td></tr><tr><td>
	Стрелять
	</td><td>
	G
</td></tr></table>
Вы заметите, что после включения <b>Управления клавиатурой</b> появилось сообщение «Practice mode».<br>
<b>Practice Mode</b> это когда вы тренируетесь на уровне, прежде чем писать для него код.<br>
Цель игры состоит в том, чтобы полностью пройти уровни, используя только код, написанный во вкладке <b>Script</b>.<br><br>

Вы войдете в Practice Mode, если воспользуетесь элементами управления с клавиатуры, вкладкой «Console» или приостановите текущий запущенный скрипт.<br>
Поэтому, когда вы закончите практиковаться и захотите пройти уровень, запустите свой сценарий (Скрипт) и избегайте управления из консоли и клавиатурой.
<br><br>

<h3>Управление роботом из консоли</h3>
Консоль может отправлять команды роботу, попробуйте их:
	<table>
	<tr><td>
	<code>robot.move(<i>n</i>)</code>
	</td><td>
	Где <b><i>n</i></b> это число от <b>-40</b> до <b>40</b>.
	Робот движется вперед или назад на <b><i>n</i></b> пикселей.
</td></tr><tr><td>
	<code>robot.jump(<i>n</i>)</code>
	</td><td>
	Где <b><i>n</i></b> это число от <b>-10</b> до <b>10</b>.
	Робот прыгает вперед или назад на скорости <b><i>n</i></b>. 
</td></tr><tr><td>
	<code>robot.jump()</code>
	</td><td>
	Робот прыгает прямо вверх, если вы напишите <b>robot.jump(0)</b>
</td></tr><tr><td>
	<code>robot.turn()</code>
	</td><td>
	Робот поворачивается, это не влияет на направление предыдущих двух команд, это влияет только на <b>robot.shoot()</b>
</td></tr><tr><td>
	<code>robot.shoot()</code>
	</td><td>
	Робот стреляет из пистолета!
</td></tr></table>


<h2>Горячие клавиши</h2>
	<table>
	<tr><td>
<b>Вкладка «Instructions»: </b>
	</td><td>
	Ctrl + 1
</td></tr><tr><td>
<b>Вкладка «Script»: </b>
	</td><td>
	Ctrl + 2
</td></tr><tr><td>
<b>Вкладка «Console»: </b>
	</td><td>
	Ctrl + 3
</td></tr><tr><td>
<b>Вкладка «Properties»: </b>
	</td><td>
	Ctrl + 4
</td></tr><tr><td>
<b>Кнопка переключения на «Управление клавиатурой»: </b>
	</td><td>
	Ctrl + 5
</td></tr><tr><td>
<b>Кнопка Run/Pause: </b>
	</td><td>
	Ctrl + Enter
</td></tr></table>

<h2>Типы данных</h2>
Типы данных занимают центральное место в работе языков программирования, самые основные встроенные типы данных называются примитивами.<br>
Полный список примитивов в JavaScript:
	<table>
	<tr><td>
<b>Number</b>
	</td><td>
	Любое число (как целое, так и с плавающей запятой, положительное или отрицательное).<br>
	Примеры: <code>12</code> <code>7.25</code> <code>0</code> <code>-10023</code>
</td></tr><tr><td>
	<b>String</b>
	</td><td>
	Любое количество символов, заключенное в одинарные или двойные кавычки.<br>
	Выбор одинарных или двойных кавычек не имеет значения, если совпадают открывающие и закрывающие кавычки.
	Примеры: <code>'Посмотрите на это!'</code> <code>"Цена: 1000 рублей"</code>
</td></tr><tr><td>
	<b>Boolean</b>
	</td><td>
	Boolean может принимать значения <code>true</code> (истина) или <code>false</code> (ложь), достаточно просто.
</td></tr><tr><td>
	<b>undefined</b>
	</td><td>
	<code>undefined</code> может показатсья непонятным, когда что-то равно <b>undefined</b> это означает, что оно не имеет значения.<br>
	В большинстве случаев когда вы столкнётесь с <b>undefined</b>, это значит что-то пошло не так.
</td></tr><tr><td>
	<b>null</b>
	</td><td>
	На первый взгляд можно подумать: «Зачем нам тип данных <code>null</code>, если у нас уже есть <b>undefined</b>?"<br>
	Ну, разница между ними есть: <b>undefined</b> значит, что <i>что-то</i> не имеет значения по какой-то причине.
	<br>В свою очередь, <b>null</b> значит, что это <i>что-то</i> не имеет значения, и так и должно быть.

</td></tr></table>

Вы можете использовать <code>typeof()</code> чтобы получить тип данных содержимого в скобках.<br>
Попробуйте выполнить следующие команды в консоли:
<table><tr><td>
<code>typeof(51.72)</code>
	</td><td>Должно вывестись
	<code class="console-out">&larr; "number"</code>
</td></tr><tr><td>
<code>typeof("Я люблю мороженное"><td>Должно вывестись
	<code class="console-out">&larr; "string"</code>
</td></tr><tr><td>
<code>typeof(true)</code>
	</td><td>Должно вывестись
	<code class="console-out">&larr; "boolean"</code>
</td></tr><tr><td>
<code>typeof(undefined)</code>
	</td><td>Должно вывестись
	<code class="console-out">&larr; "undefined"</code>
</td></tr><tr><td>
<code>typeof(null)</code>
	</td><td>Должно вывестись
	<code class="console-out">&larr; "object"</code><br>
	Многие понимают это как языковую ошибку.<br>
	Сейчас слишком поздно, чтобы исправить это, поэтому нам придется с этим мириться.
</td></tr></table>

<br><h3>Ускоренный курс по объектам:</h3>

Примитивы можно комбинировать для создания более сложных типов данных, называемых <b>objects</b> (объекты).<br>
Вы уже видели объекты: <code>robot.action = {type: 'move', amount: 40}</code><br><br>
Здесь у нас есть объект, представляющий действие:<br>
он включает в себя свойство <code>type</code> с типом данных String, и свойство с типом данных Number называемое <code>amount</code>.
	<br><br>
	Мы обсудим объекты более подробно позже, так что вы разберётесь.

<br><br>
<a href="https://developer.mozilla.org/ru/docs/Learn/JavaScript/First_steps/Variables#Variable_types" target="_blank" class="learn-more">Узнайте больше о типах данных</a>
<br><br>

<h2>Переменные</h2>

Переменная — это имя, которое ссылается на значение, например <code>favoriteFood = 'Лазанья';</code>.<br>
У нас есть переменная с именем <code>favoriteFood</code> со строковым значением <code>'Лазанья'</code>.<br><br>

Переменная может иметь любой тип данных в качестве значения: Number (число), String (строку) или Boolean (логическое значение), даже undefined (неопределённый) и null (пустой)!<br>
<code>favoriteColor = null;</code> В этом примере у нас есть переменная, с заданным значением <b>null</b>, мы можем сказать:<br>
"У нас есть переменная <b>favoriteColor</b>, но у меня нет любимого цвета, я сообщу позже, если выберу цвет."
<br><br>
Что насчёт <code>undefined</code>? Когда мы определяем значение переменной как <b>undefined</b>? Никогда, по крайней мере, специально.<br>
Хорошо, до сих пор мы создавали такие переменные <code><i>переменная</i> = <i>значение</i></code>.<br>Но это не совсем правильный способ сделать это.<br><br>

В JavaScript, правильный путь <code>var <i>переменная</i> = <i>значение</i>;</code>. Где решающим является ключевое слово <b>var</b>.<br>
<b>var</b> в основном означает: "Сделайте мне переменную с именем: ". Таким образом, мы можем разделить предыдущее утверждение на две части:<br>
	<code>var <i>переменная</i>;</code> и <code><i>переменная</i> = <i>значение</i>;</code>.<br><br>

	Техническое название для создания переменной (первый оператор) это <b>объявление</b>.<br>
В то время как процесс присвоения значения переменной в первый раз (второе утверждение) называется <b>определение</b>.<br>
Ради интереса, прежде чем мы определили переменную, её значение равно <code>undefined</code><br>

<br><br>
<a href="https://developer.mozilla.org/ru/docs/Learn/JavaScript/First_steps/Variables#Declaring_a_variable" target="_blank" class="learn-more">Узнайте больше о переменных</a>
<br><br>

Код, который приведёт вас к флагу, для этого уровня такой же, как и для предыдущего.<br>
Дальше уровни будут только интереснее, так как мы будем рассматривать и изучать JavaScript больше и детальнее.

<div class="code">function loop(robot) {
	robot.action = {type: 'move', amount: 40};
}</div>

`,



//////////// УРОВЕНЬ 3 /////////////////////////////////////////////////////////
`
<h1>Уровень 3: Математика и условные конструкции</h1>

<h2>Математика</h2>
<h3>Арифметические операторы</h3>
JavaScript поддерживает основные арифметические операции: <code>+  -  *  /  %  **</code>.<br>
Сложение, вычитание, умножение, деление, деление по модулю (остаток после деления) и возведение в степень.<br><br>

<a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators" target="_blank" class="learn-more">Узнайте больше об арифметических операторах</a>
<br><br>	

<h3>Операторы присваивания</h3>
Как оказалось, в программировании чрезвычайно популярны следующие операции: <code>i = i + 1;</code>, <code>m = m / 2;</code>.<br>
Таким образом, была разработана сокращенная запись, предыдущие два выражения можно переписать как: <code>i += 1;</code> and <code>m /= 2;</code><br>
Обе операции <code>i += 1;</code> and <code>i -= 1;</code> вероятно, чаще всего используются в программировании, поэтому их ещё больше сократили до <code>i++;</code> и <code>i--;</code><br><br>
<a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Assignment_Operators" target="_blank" class="learn-more">Узнайте больше об операторах присваивания</a>
<br><br>	

<h3>Конкатенация строк</h3>
Сложение строк — это не совсем математика, но очень полезно. Вы можете сложить несколько строк вместе с <code>+</code> оператором:<br>
<code>"Robots " + "are " + "cool" + "!"</code> и получите строку <code>"Robots are cool!"</code><br><br>
Числа могут быть добавлены к строкам, явным способом сделать это является использование <b>String()</b> конструктора.<br>
<code>String(47)</code> превращает число 47 в строку «47». И тогда мы можем выполнить конкатенацию строк с результатом.<br>
<code>"There are " + String(13) + " cookies in this box."</code><br><br>
Но очень часто совершенно очевидно, что мы пытаемся сделать, поэтому следующая запись делает в JavaScript то же самое:<br>
<code>"There are " + 13 + " cookies in this box."</code> Правило таково: сложение числа и строки сначала преобразует число в строку.<br><br>
Так что это имеет смысл, но в некоторых случаях это не так полезно, как хотелось бы. Возьмем, к примеру <code>"1" + 3</code> это дает строку <code>"13"</code> что может быть не тем, что вы ожидали, так что будьте осторожны.

	<br><br>
<h3>Преобразование строк в числа</h3>
А что будет, если вместо сложения попробовать вычесть, например <code>"7" - 3</code>. Попробуйте, у вас должно получиться <code>4</code>.<br>
Что ж, это интересно, JavaScript знал, что строка «7» на самом деле была замаскированным числом 7.<br>
Хотя это полезный урок, а JavaScript — очень умный язык, мы хотим избежать использования числа и строки вместе, как здесь.<br>
Если вы знаете, что у вас есть строка, содержащая число, преобразуйте её в числовой тип данных с помощью одной из следующих функций:<br>
<table>
<tr><td>
	<code>Number.parseInt()</code>
</td><td>
Преобразует строку, представляющую целое число, в число, игнорируя любые лишние символы.<br>
	Примените <code>Number.parseInt()</code> к <code>"23"</code> <code>"7.25 litres"</code> <code>"1.995"</code> и <code>"3 apples."</code>
	<br>Вывод <code class="console-out">&larr; 23</code>
	<code class="console-out">&larr; 7</code>
	<code class="console-out">&larr; 1</code>
	<code class="console-out">&larr; 3</code>

</td></tr><tr><td>
	<code>Number.parseInt()</code>
</td><td>
	Преобразует строку, представляющую число с плавающей запятой, в число, игнорируя любые лишние символы.<br>
	Примените <code>Number.parseFloat()</code> к <code>"23"</code> <code>"7.25 litres"</code> <code>"1.995"</code> <code>"3 apples."</code><br>
	Вывод <code class="console-out">&larr; 23</code>
	<code class="console-out">&larr; 7.25</code>
	<code class="console-out">&larr; 1.995</code>
	<code class="console-out">&larr; 3</code>
</td></tr></table>

<br><br>
<h3>NaN</h3>
Так что же произойдёт, когда мы пытаемся сделать что-то необычное с нашими числами?<br>
Для примера <code>'green' - 4</code> <code>Number.parseInt('basketball');</code> <code>0 / 0</code> <code> (-1) ** 0.5</code><br>
Мы получим <code class="console-out">&larr; NaN</code>, что означает <b>Not a Number</b> (Не Число). <br><br>
<b>NaN</b> не так прост, <code>typeof(NaN);</code> выдаст нам <code class="console-out">&larr; "number"</code>... Так что Not a Number на самом деле является числом.<br>
Есть встроенная функция для проверки значений NaN, <code>Number.isNaN()</code>.<br>

<h3>Infinity (Бесконечность)</h3>
Некоторые свойства <code>Infinity</code>:
	<table><tr><td>
<code>1 / 0</code> 
	</td><td>
	<code class="console-out">&larr; Infinity</code>
	</td></tr><tr><td>
<code>1 / Infinity</code> 
	</td><td>
	<code class="console-out">&larr; 0</code>
	</td></tr><tr><td>
<code>Infinity + 1</code> 
	</td><td>
	<code class="console-out">&larr; Infinity</code>
	</td></tr><tr><td>
<code>10 ** 1000</code> 
	</td><td>
	<code class="console-out">&larr; Infinity</code>
	</td></tr></table>

<a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number" target="_blank" class="learn-more">Узнайте больше об объекте Number</a><br><br>

<h3>Расширенные математические функции</h3>
	<table><tr><td>
<code>Math.round(<i>число</i>)</code> 
	</td><td>
	Возвращает <i>число</i>, округляется до ближайшего целого числа
	</td></tr><tr><td>
<code>Math.abs(<i>число</i>)</code> 
	</td><td>
	Возвращает абсолютное значение <i>числа</i>
	</td></tr><tr><td>
<code>Math.sin(<i>число</i>)</code> 
	</td><td>
	Возвращает синус <i>числа</i>
	</td></tr><tr><td>
<code>Math.cos(<i>число</i>)</code> 
	</td><td>
	Возвращает косинус <i>числа</i>
	</td></tr><tr><td>
<code>Math.sqrt(<i>число</i>)</code> 
	</td><td>
	Возвращает квадратный корень от <i>числа</i>
	</td></tr><tr><td>
<code>Math.pow(<i>число</i>, <i>степень</i>)</code> 
	</td><td>
	Возвращает <i>число</i>, возведённое в <i>степень</i>
	</td></tr><tr><td>
<code>Math.log(<i>число</i>)</code> 
	</td><td>
	Возвращает натуральный логарифм ln() <i>числа</i>
	</td></tr><tr><td>
<code>Math.max(<i>a</i>, <i>b</i>, ...)</code> 
	</td><td>
	Возвращает наибольшее из переданных чисел.<br><code>Math.min(<i>a</i>, <i>b</i>, ...)</code> возвращает наименьшее
	</td></tr></table>

<a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math" target="_blank" class="learn-more">Узнайте больше о математических функциях</a><br><br>

<h2>Booleans (Булевы значения)</h2>
Следующие операторы возвращают <code>true</code> или <code>false</code>, они будут необходимы для использования условного ветвления, которое является основной концепцией этого уровня.
<br><br>

	<h3>Операторы равенства</h3>
<table><tr><td>
	<code><i>a</i> == <i>b</i></code>
</td><td>
	Возвращает true, если <i>a</i> и <i>b</i> равны по значению, в противном случае false.<br>
	Обратите внимание, что <i>a</i> и <i>b</i> могут иметь разные типы и при этом быть равными.<br>
	Примеры:
	<code>3.25 == 3.25</code> <code class="console-out">&larr; true</code> , 
	<code>3 == "3"</code> <code class="console-out">&larr; true</code> , 
	<code>12 == 0.2</code> <code class="console-out">&larr; false</code>
</td></tr><tr><td>
	<code><i>a</i> === <i>b</i></code>
</td><td>
Возвращает true, если <i>a</i> и <i>b</i> имеют равное значение <b>и имеют одинаковый тип</b>, в противном случае false.<br>
	Примеры:
	<code>3.25 === 3.25</code> <code class="console-out">&larr; true</code> , 
	<code>3 === "3"</code> <code class="console-out">&larr; false</code> , 
	<code>12 === 0.2</code> <code class="console-out">&larr; false</code>
</td></tr><tr><td>
	<code><i>a</i> != <i>b</i></code>
</td><td>
	Возвращает true, если <i>a</i> и <i>b</i> не равны по значению, независимо от типа, в противном случае false.<br>
	Примеры:
	<code>3.25 != 3.25</code> <code class="console-out">&larr; false</code> , 
	<code>3 != "3"</code> <code class="console-out">&larr; false</code> , 
	<code>12 != 0.2</code> <code class="console-out">&larr; true</code>
</td></tr><tr><td>
	<code><i>a</i> !== <i>b</i></code>
</td><td>
	Возвращает true, если <i>a</i> и <i>b</i> либо не равны по значению, либо по типу, в противном случае false.<br>
	Примеры:
	<code>3.25 !== 3.25</code> <code class="console-out">&larr; false</code> , 
	<code>3 !== "3"</code> <code class="console-out">&larr; true</code> , 
	<code>12 !== 0.2</code> <code class="console-out">&larr; true</code>
</td></tr></table>

<h3>Операторы сравнения</h3>
	
<table><tr><td>
	<code><i>a</i> < <i>b</i></code>
</td><td>
	Возвращает true, если <i>a</i> меньше чем <i>b</i>, в противном случае false.<br>
	Примеры: 
	<code>1 < 2</code> <code class="console-out">&larr; true</code> , 
	<code>2 < 2</code> <code class="console-out">&larr; false</code> , 
	<code>3 < 2</code> <code class="console-out">&larr; false</code>
</td></tr><tr><td>
	<code><i>a</i> <= <i>b</i></code>
</td><td>
	Возвращает true, если <i>a</i> меньше или равно <i>b</i>, в противном случае false.<br>
	Примеры: 
	<code>1 <= 2</code> <code class="console-out">&larr; true</code> , 
	<code>2 <= 2</code> <code class="console-out">&larr; true</code> , 
	<code>3 <= 2</code> <code class="console-out">&larr; false</code>
</td></tr><tr><td>
	<code><i>a</i> > <i>b</i></code>
</td><td>
	Возвращает true, если <i>a</i> больше чем <i>b</i>, в противном случае false.<br>
	Примеры: 
	<code>1 > 2</code> <code class="console-out">&larr; false</code> , 
	<code>2 > 2</code> <code class="console-out">&larr; false</code> , 
	<code>3 > 2</code> <code class="console-out">&larr; true</code>
</td></tr><tr><td>
	<code><i>a</i> >= <i>b</i></code>
</td><td>
	Возвращает true, если <i>a</i> больше или равно <i>b</i>, в противном случае false.<br>
	Примеры: 
	<code>1 >= 2</code> <code class="console-out">&larr; false</code> , 
	<code>2 >= 2</code> <code class="console-out">&larr; true</code> , 
	<code>3 >= 2</code> <code class="console-out">&larr; true</code>
</td></tr></table>

<h3>Логические операторы</h3>
	
<table><tr><td>
	<code>!<i>a</i></code>
</td><td>
	Оператор <b>!</b> (НЕ) меняет истинное на ложное и наоборот.<br>
	Примеры: 
	<code>!true</code> <code class="console-out">&larr; false</code> , 
	<code>!false</code> <code class="console-out">&larr; true</code>

</td></tr><tr><td>
	<code><i>a</i> && <i>b</i></code>
</td><td>
	Оператор <b>&&</b> (И) возвращает true, если оба <i>a</i> и <i>b</i> истинны (true), и false если хотя бы одно из них ложно (false).<br>
	Примеры: 
	<code>true && true</code> <code class="console-out">&larr; true</code> , 
	<code>true && false</code> <code class="console-out">&larr; false</code> , 
	<code>false && false</code> <code class="console-out">&larr; false</code>

</td></tr><tr><td>
	<code><i>a</i> || <i>b</i></code>
</td><td>
	Оператор <b>||</b> (ИЛИ) возвращает true, если оба <i>a</i> и <i>b</i> или хотя бы одно из них истинно (true), и false только если оба ложны(false).<br>
	Примеры: 
	<code>true || true</code> <code class="console-out">&larr; true</code> , 
	<code>true || false</code> <code class="console-out">&larr; true</code> , 
	<code>false || false</code> <code class="console-out">&larr; false</code>

</td></tr></table>

<h3>Falsy Values (Ложные значения)</h3>
Ложное значение — это такое значение, которое является <code>false</code>.
В JavaScript есть шесть «ложных» значений:<br>
<ol><li>
<code>false</code> очевидно<br>
	</li><li>
<code>0</code> и <code>-0</code><br>
	</li><li>
<code>""</code> or <code>''</code> пустные строки<br>
	</li><li>
<code>NaN</code> т.е. Not a Number (Не Число)<br>
	</li><li>
<code>undefined (неопределенное значение)</code><br>
	</li><li>
<code>null (пустое значение)</code><br>
	</li></ol>

	Попробуйте выполнить следующие команды с ложными значениями, чтобы увидеть, как они действуют:<br><br>
	<code>!(<i>значение</i>)</code><br>
	<code><i>значение</i> && true</code><br>
	<code><i>значение</i> || false</code><br><br>
	Затем попробуйте их с обычными числами и строками и посмотрите, как изменится поведение.

<br><br><a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Logical_Operators" target="_blank" class="learn-more">Узнайте больше о логических операторах и ложных значениях</a><br><br>


<h2>Условное ветвление</h2>
<h3>If-Else (Если-Иначе)</h3>
Условные конструкции позволяют программе выполнять другой код в зависимости от условия.<br>
Если определенное условие выполняется (т.е. оно истинно), то выполняется один фрагмент кода; если оно ложно, выполняется другой фрагмент кода.<br>
<br>
Следующий код является примером <b>if-else</b> конструкции:
<div class="code">var packOfSalt = 5;
if (packOfSalt <= 1) {
	console.log("Мне нужно купить больше соли!");
} else if (packOfSalt > 10){
	console.log("Зачем тебе столько соли?");
} else {
	console.log("Соль есть.");
}</div>
Эта программа довольна проста для понимания:<br>
Если значение <code>packOfSalt</code> меньше или равно 1, выполняется код внутри первой пары фигурных скобок.<br> Если оно больше 10, то выполняется код между второй парой фигурных скобок.<br>
В противном случае выполняется код в последнем наборе фигурных скобок.<br><br>
<b>Примечание:</b> Код, заключенный в фигурные скобки, называется <b>блоком</b> кода.
<br><br>

Чтобы дать более формальное определение, за ключевым словом <code>if</code> всегда следует условие в паре круглых скобок <code>(<i>условие</i>)</code>, после условия размещаем блок кода <code>{ <i>сделать что-то тут</i> }</code>.<br>
Опционально, после этого мы можем разместить <code>else if</code> который ведет себя так же, как <code>if</code> или просто <code>else</code> который не принимает условия, просто блок.
<br>
Как только первое условие выполнено, блок, следующий за ним, выполняется, блоки для всех остальных операторов <code>else</code> игнорируются.

	<br><br>
<h3>Switch (Переключатель)</h3>
Иногда нам приходится писать такие программы:
<div class="code">var letter = 'В';
if (letter === 'А') {
	console.log('А - Алфавит');
} else if (letter === 'Б') {
	console.log('Б - Барабан');
} else if (letter === 'В') {
	console.log('В - Вагон');
} else if (letter === 'Г') {
	console.log('Г - Голова');
} else if (letter === 'Д') {
	console.log('Д - Дом');
} else {
	console.log('Нет такой буквы, попробуйте еще раз');
}</div>

Это становится утомительным и трудным для чтения, гораздо более удобным и привлекательным способом написания той же программы является <code>switch</code> оператор:
<div class="code">var letter = 'В';
switch (letter) {
	case 'А':
		console.log('А - Алфавит');
		break;
	case 'Б':
		console.log('Б - Барабан');
		break
	case 'В':
		console.log('В - Вагон');
		break;
	case 'Г':
		console.log('Г - Голова');
		break;
	case 'Д':
		console.log('Д - Дом');
		break;
	default:
		console.log('Нет такой буквы, попробуйте еще раз');
}</div>

<h3>Условный оператор (или тернарный оператор)</h3>
<code><i>условие</i> ? <i>утверждение1</i> : <i>утверждение2</i>;</code><br><br>
Если <i>условие</i> оценивается как true, тогда <i>утверждение1</i> исполняется, в противном случае false <i>утверждение2</i> выполняется.<br>
Рассмотрим следующий код:
<div class="code">var milkIsOver = false;
if (milkIsOver) {
	console.log("Я сегодня не завтракаю :(");
} else {
	console.log("Буду есть хлопья с молоком!");
}</div>

Используя условный оператор, его можно сократить до:
<div class="code">var milkIsOver = false;
milkIsOver ? console.log("Я сегодня не завтракаю.") : console.log("Буду есть хлопья с молоком!");
</div>
Actually it can be shortened even further:
<div class="code">var milkIsOver = false;
console.log( milkIsOver ? "Я сегодня не завтракаю." : "Буду есть хлопья с молоком!");
</div>

<h2>Время проходить уровень</h2>
Совершенно очевидно, что роботу придется прыгать на уровне, попробуйте зайти во вкладку <b>Console</b> и написать:<br>
<code>robot.jump(10);</code> Это максимальное расстояние, на которое может прыгнуть вперёд робот.
<br><br>
Попробуйте чередовать прыжки и движение вперед <code>robot.move(40);</code>
<br>
Кстати, когда в консоли выбран ввод текста, используйте клавиши вверх и вниз для перехода вперед и назад по истории выполненных команд.
<br><br>
Если можете, попробуйте написать свое решение во вкладке <b>Script</b>.<br><br>

Следует иметь в виду одну вещь, если вы объявляете переменную внутри функции <code>function init()</code>,
она не будет доступна в другой функции <code>function loop()</code>, объяснение этому вы узнаете на более поздних уровнях.<br>
На данный момент, если вы хотите создать переменную и получить к ней доступ позже, создайте свойство объекта <b>robot</b> следующим образом:<br>
	<code>robot.myNewProperty = "какое-то значение";</code>
	
	Удачи!<br><br>
Если вы пытаетесь долгое время и просто не можете пройти уровень с помощью кода, то посмотрите решение, но <strong>обязательно</strong> перепешите его вручную и поймите, что, как и к чему:<br>

	<br><br>
	<a id="showSolution" class="show-solution">Показать решение</a>
	<br><br>

	<div id="solution">
<div class="code">function init(robot) {
	robot.jumpNext = true;
}

function loop(robot) {
	if (robot.jumpNext) {
		robot.action = {type: 'jump', amount: 10};
		robot.jumpNext = false;
	} else {
		robot.action = {type: 'move', amount: 40};
		robot.jumpNext = true;
	}
}</div>
</div>
`,





//////////// УРОВЕНЬ 4 /////////////////////////////////////////////////////////
`
<h1>Уровень 4</h1>

<h3>Если ты дошёл до этого уровня, то ты большой молодец!</h3>
Чтобы пройти уровень используй if-else конструкцию и <code>robot.info().x</code> для того чтобы получить значение координаты <b>x</b>. Это поможет настроить поведение робота Sicko на определённых участках пути.
<br>
<br>
Если у вас есть какие-то вопросы по прохождению уровней или вы заметили ошибку или недочёт, то обязательно пишите на мою почту <a>iMrRoll@yandex.ru</a>

<!--
	keyboard control
	function name(){}
	var name = function(){}
	parameters
	return
	declaration vs expression
	arrow
	built-in functions: String, Number, Math, [links to Mozilla]
-->


	<br><br>
	<a id="showSolution" class="show-solution">Показать решение</a>
	<br><br>
	<div id="solution">
<div class="code">function loop(robot) {
	if (400 < robot.info().x  && robot.info().x < 500) {
		robot.action = {type: 'jump', amount: 10};
	} else {
		robot.action = {type: 'move', amount: 40};
	}
}</div>
</div>
`,




//////////// УРОВЕНЬ 5 /////////////////////////////////////////////////////////
`
<h1>Уровень 5</h1>

Чтобы пройти уровень используй if-else конструкцию и <code>robot.info().x</code> для того чтобы получить значение координаты <b>x</b>. Это поможет настроить поведение робота Sicko на определённых участках пути.
Для удобства, можешь записать координаты <b>x</b> опасных участков в отделный массив или переменные и обращаться к ним в момент когда Sicko должен сделать прыжок.

<br><br><a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array" target="_blank" class="learn-more">Узнайте больше о массивах</a><br><br>

	<br><br>
	<a id="showSolution" class="show-solution">Показать решение</a>
	<br><br>
	<div id="solution">
<div class="code">function loop(robot) {
	let robotX = robot.info().x;
	let landmarks = [360, 500, 560, 760];
  
  	robot.action = {type: 'move', amount: 40};
 	if (landmarks[0] < robotX && robotX < landmarks[1] ||
		 landmarks[2] < robotX && robotX < landmarks[3]) {
      	robot.action = {type: 'jump', amount: 10};
	}
}</div>
	</div>
`,




//////////// УРОВЕНЬ 6 /////////////////////////////////////////////////////////
`
<h1>Уровень 6</h1>

Чтобы пройти уровень рекумендую так же, как и прежде использовать конструкцию if-else.
<br>
Для условия смены роботом направления движения в другю сторону можно использовать <code>robot.info().coins</code>, например чтобы при нечётном количестве монет
Sicko шёл в другую сторону.

	<br><br>
	<a id="showSolution" class="show-solution">Показать решение</a>
	<br><br>
	<div id="solution">
<div class="code">function loop(robot) {
	robot.action = {type: 'move', amount: 40};
	if (robot.info().coins % 2 == 1) {
		robot.action = {type: 'move', amount: -40};
	}
}</div>
	</div>
`,





//////////// УРОВЕНЬ 7 /////////////////////////////////////////////////////////
`
<h1>Уровень 7</h1>

Инициализируй в первой функции init переменные oldCoins и oldEbergy, присвоим им значения равные минимальному и максимальному соответственно. Они пригодятся тебе во второй функции loop для задания условия в конструкции if.
<br>
Например, если текущий уровень здоровья больше старого или текущий уровень энергии больше старого, то роботу Sicko необходимо совершить прыжок. 
А после конструкции заменить старые значения здоровья и энергии новыми.
	<br><br>
	<a id="showSolution" class="show-solution">Показать решение</a>
	<br><br>
	<div id="solution">
<div class="code">function init(robot) {
	robot.oldCoins = 0;
	robot.oldEnergy = 100;
}

function loop(robot) {
	robot.action = {type: 'move', amount: 40};
	if (robot.info().coins > robot.oldCoins ||
		 robot.info().energy > robot.oldEnergy) {
		robot.action = {type: 'jump', amount: 10};
	}
	robot.oldCoins = robot.info().coins;
	robot.oldEnergy = robot.info().energy;
} </div>
	</div>
`,




//////////// УРОВЕНЬ 8 /////////////////////////////////////////////////////////
`
<h1>Уровень 8</h1>

В первой функции init инициализируем счётчик и присвом ему 0. Во второй функции loop мы также используем конструкцию if для задания условия, когда это значаение будет больше 4 (это оптимальное число, которое поможет программе проходить итерацию вовремя и выполнять прижок, чтобы перескочить пули), робот будет совершать прыжок.
<br>
Здесь же создадим вторую конструкцию if и при условии, что текущее количество монет больше 0, мы прибавим 1 к переменной счётчик.
	<br><br>
	<a id="showSolution" class="show-solution">Показать решение</a>
	<br><br>
	<div id="solution">
<div class="code">function init(robot) {
	robot.iterationsAfterCoin = 0;
}

function loop(robot) {
	if (robot.iterationsAfterCoin > 4) {
		robot.action = {type: 'jump', amount: 10};
	}
	if (robot.info().coins > 0) {
		robot.iterationsAfterCoin++;
	}
}</div>
	</div>
`,




//////////// THE END /////////////////////////////////////////////////////////
`
╔══╦══╦═══╗╔══╗╔═══╦══╦══╗─╔══╦═══╦╗╔══╗ ╔╗
<br>
║╔╗║╔╗╠══╗║║╔╗║║╔═╗║╔╗║╔╗║─║╔╗║╔═╗║║║╔╗║ ║║
<br>
║║║║║║║╔═╝║║║║║║╚═╝║╚╝║╚╝╚╗║║║║╚═╝║╚╝║║║ ║║
<br>
║║║║║║║╚═╗║║║║║║╔══╣╔╗║╔═╗║║║║╠╗╔╗║╔╗║║║ ╚╝
<br>
║║║║╚╝╠══╝╠╝╚╝╚╣║──║║║║╚═╝╠╝║║║║║║║║║╚╝║ ╔╗
<br>
╚╝╚╩══╩═══╩════╩╝──╚╝╚╩═══╩═╝╚╝╚╝╚╩╝╚══╝ ╚╝
<br>
<br>
╔═══╦══╦╗──╔╦═══╗╔══╦╗╔╦═══╦═══╗ ╔╗
<br>
║╔══╣╔╗║║──║║╔══╝║╔╗║║║║╔══╣╔═╗║ ║║
<br>
║║╔═╣╚╝║╚╗╔╝║╚══╗║║║║║║║╚══╣╚═╝║ ║║
<br>
║║╚╗║╔╗║╔╗╔╗║╔══╝║║║║╚╝║╔══╣╔╗╔╝ ╚╝
<br>
║╚═╝║║║║║╚╝║║╚══╗║╚╝╠╗╔╣╚══╣║║║  --- ╔╗
<br>
╚═══╩╝╚╩╝──╚╩═══╝╚══╝╚╝╚═══╩╝╚╝  --- ╚╝
<br>
<br>
╔══╗╔╗──╔╗╔══╦═══╦══╦╗╔╗╔╗╔══╦╗╔╗
<br>
║╔╗║║║──║║║╔╗║╔═╗║╔╗║║║║║║║╔╗║║║║
<br>
║╚╝╚╣╚══╣║║║║║╚═╝║║║║║║║║║║║║║║║║
<br>
║╔═╗║╔═╗║║║║║║╔══╣║║║║║║║║║║║║║╔║
<br>
║╚═╝║╚═╝║║║║║║║──║╚╝║╚╝╚╝╠╝║║║╚╝║
<br>
╚═══╩═══╩╝╚╝╚╩╝──╚══╩════╩═╝╚╩══╝
<br>
<br>
╔╗╔╦══╦═══╦╗╔╗
<br>
║║║║╔═╣╔═╗║║║║
<br>
║║║║║─║╚═╝║╚╝║
<br>
║║╔║║─║╔══╩═╗║
<br>
║╚╝║║─║║───╔╝║
<br>
╚══╩╝─╚╝───╚═╝
<br>
<br>
╔══╦══╦══╦╗╔══╦══╗╔╗
<br>
║╔═╩╗╔╣╔═╣║║╔═╣╔╗║║║
<br>
║╚═╗║║║║─║╚╝║─║║║║║║
<br>
╚═╗║║║║║─║╔╗║─║║║║╚╝
<br>
╔═╝╠╝╚╣╚═╣║║╚═╣╚╝║╔╗
<br>
╚══╩══╩══╩╝╚══╩══╝╚╝
`,
			];

	});
	return instructionData;
});



