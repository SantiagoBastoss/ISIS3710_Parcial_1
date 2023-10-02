# ISIS3710_Parcial_1

- En primer lugar, para la interfaz de inicio de sesión se creó un único compnente: 'Login.js'. Este componente maneja un useState que le permite cambiar la interfaz dependiendo de si se encuentra en la parte del correo o en la de la contraseña. En caso de que se encontrara en la de contraseña, para que se muestre el correo recién ingresado se le asignó al cardValues de uno de los UseState, el valor que se encontraba en el formValues. Se utilizó también el useState para realizar las verificaciones sobre el formato del correo y la longitud de la contraseña. Por otra parte, para la interfaz de información de los carros, se utilizó un UseEffect y un useState en el componente 'carros.js'. Al primero le pasó por parámetro el link del json subido al repositorio, el segundo estaba encargado de guardar los valores contenidos en el json. Tras esto, se hizo un mapeo por cada elemento del json al componente 'carro.js', guardandolos en el useState mencionado. Así se consiguió que se mostrara toda la información de cada carro en forma de listado. Para visualizar el detalle se creó un componente llamado 'detail.js', el cual obtenía la información de un determinado carro a través de la función 'useParams()', y la desplegaba en un card de bootstrap. Para comunicar los compontentes se implementó un routing en el componente 'App.js', donde se agregaron todas las rutas necesarias. Finalmente, con el fin de lograr la internacionalización, se crearon 2 archivos .json ('es.json' y 'en.json') que contenían la traducción de todos los labels estáticos en ingles y en español. Su utilizó también un useState cuya variable 'formattedLabel' cambiaba cuando se oprimía el botón de cambiar idioma. Dependiendo del botón, el useState recopilaba la información de uno de los dos archivos .json.
- Hay una instrucción de uso importante a notar y es la siguiente: En el Login, cuando se quiere cambiar el idioma, se debe hacer doble click sobre el botón del idioma respectivo.