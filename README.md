# Proyecto Integrador Bootcamp - Turismo General La Madrid

EL presente código fuente corresponde al proyecto integrador desarrollado durante el bootcamp en desarrollo Fullstack de la **Universidad Nacional de Tres de Febrero**. Funcionalmente el proyecto implementa un sitio web desarrollado con tecnologías web (HTML, CSS, JavaScript, React y Tailwind), en el cual se pueden listar y filtrar sitios turísticos ubicados en la ciudad de **General La Madrid**.

## Equipo de trabajo

El proyecto ha sido desarrollado por:

- Camila Rodriguez
- Hernán Buzzi
- Kevin Bustos
- Tomás Cantero

## Organización del proyecto

A fin de planificar, desarrollar y probar el sitio web, el proyecto utiliza los siguientes recursos organizativos:

- [Canal en Discord](https://discord.com/channels/1288103762744836167/1288103763260739679), usado como espacio de comunicación entre los miembros del equipo
- [Repositorio en GitHub](https://github.com/Phaca10/Turismo-UNTREF), donde los archivos fuentes son compartidos y actualizados de manera colaborativa
- [Diseños en Figma](https://www.figma.com/design/94Qr5sl2BI1tF91sjOJdp5/PROYECT-TURISMO-GLM?node-id=0-1&node-type=canvas&t=qMNOpIV0R2HjdOwz-0), aportando la referencia de aspecto visual y navegación del sitio
- [Trello](https://trello.com/b/RLeV2gpt/bootcamp-proyecto-final-i), usado para documentar las tareas acordadas en el proyecto y seguir el estado de avance de cada una de ellas

## Descripción del Proyecto

El sitio web se compone de una barra superior de navegación, una sección principal para mostrar contenido y un pié de página.

El encabezado permite al usuario acceder a las siguientes secciones del sitio:

- **Inicio**: Acceso / retorno a la página principal del sitio desde cualquier subpágina navegada
- **Turismo**: Se compone de un contenedor donde la información turística es mostrada y un segundo contenedor usado para aplicar filtros sobre los sitios turísticos mostrados en el primer contenedor.
- **Historia**: Breve reseña sobre la ciudad, desde su fundación en el año 1889 hasta la actualidad.
- **Contacto**: Permite al usuario completar y enviar un formulario solicitando información sobre los sitios turísticos.

# Componentes principales del proyecto

### /src/components/Destinos.jsx

Obtiene la lista de destinos turísticos desde el [servidor de backend del proyecto](https://servidor-turismo-untref-production.up.railway.app) para su presentación en pantalla.
Este módulo recibe dos argumentos, los cuales pueden utilizarse para filtrar la información retornada:

- categoria: devuelve solo sitios turísticos para los cuales el valor de la clave 'categoria' en el contenido recibido desde el backend coincida con el valor del argumento recibido. Si este argumento se encuentra en blanco ('') entonces no se aplica ningún filtro por categoría.
- nombre: devuelve solo sitios turísticos para los cuales el valor del argumento recibido coincida de forma parcial o total con el valor de la clave 'nombre' en el contenido recibido desde el backend. Si este argumento se encuentra en blanco ('') entonces no se aplica ningún filtro por nombre.

Es menester mencionar que si ambos argumentos se encuentran en blanco ('') entonces la lista completa de destinos turísticos será renderizada y devuelta desde la función Destinos, mientras que si ambos argumentos tienen un valor definido y distinto a un valor en blanco entonces solo la conjunción de ambos es usada como filtro, es decir, se devuelve sitios cuya categoría coincida con el valor del argumento 'categoria', y el valor del argumento 'nombre' coincida de forma parcial o total con el valor de la clave nombre del sitio turístico. Las comparaciones no distinguen mayúsculas de minúsculas.

### /src/pages/historia.jsx

Presenta información estática relacionada con la ciudad de General La Madrid, conjuntamente con una imagen referencial.

### /src/pages/turismo.jsx

Es el módulo responsable por obtener la información desde Destinos.jsx, proveyendo los filtros de búsqueda necesarios para renderizar estrictamente la información solicitada.

### /src/components/Consultas.jsx

Implementa un formulario de consulta con el fin de enviar una solicitud de información conjuntamente con el nombre, apellido y correo electrónico del solicitante. La consulta es enviada a la casilla de corre de prueba lamadridturismo@gmail.com.
