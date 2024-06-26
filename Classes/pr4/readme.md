В стандартной библиотеке Node.js есть класс fs.Stats. Объекты этого класса описывают собой файлы. С их помощью можно получать любую метаинформацию о файле.

import fs from 'fs';

const stats = fs.statSync('/etc/hosts');
console.log(stats.size); // размер в байтах
SmartFileInfo.js

Реализуйте класс SmartFileInfo, наследующийся от FileInfo. Этот класс должен расширять поведение метода getSize. В новом классе этот метод принимает на вход аргумент, который обозначает единицу измерения возвращаемых данных. По умолчанию это b, то есть байты. Но можно передать и kb, то есть килобайты. В случае килобайтов, переопределённый метод делит байты на 1024 и получившееся значение возвращает наружу.

Метод должен обрабатывать ситуацию, когда на вход поступает что-то другое, кроме указанных значений. Обработка сводится к возбуждению исключения Error.

const file = new SmartFileInfo(path.resolve('Makefile'));
file.getSize(); // 19
file.getSize('b'); // 19
file.getSize('kb'); // 0.0185546875
file.getSize('udav'); // Error