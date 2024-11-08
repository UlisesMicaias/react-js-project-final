Esta aplicación es una tienda online creada en React. Permite a los usuarios explorar productos, ver detalles, agregar al carrito y finalizar una compra. Toda la información, desde los productos hasta las órdenes, se gestiona en tiempo real mediante Firebase Firestore.

Funcionalidades Principales:
1.Navegación de Productos
2.Inicio (/): Lista de productos disponibles para comprar.
3.Detalles de Producto (/item/:id): Información detallada del producto, con foto, descripción y selector de cantidad.


Carrito:
1.Agregar productos desde los detalles.
2.Vista del carrito (/cart): Listado compacto con los productos, cantidades y total de compra.
3.Ícono de carrito: Contador de productos agregados.


Checkout
1.Formulario: Datos básicos (nombre, apellido, teléfono y email con confirmación).
2.Confirmación de compra: Al finalizar el checkout, se genera una orden en Firebase y se muestra un número de confirmación.
3.Tecnologías y Dependencias

Principales Herramientas
1.React y React Router: Para la creación de la interfaz y la navegación entre rutas.
2.Firebase Firestore: Base de datos para almacenar productos y órdenes en tiempo real.
3.Vite: Herramienta rápida de desarrollo para proyectos React.

Librerías Extra
1.Firebase: Conecta la app a Firestore.
2.React Router Dom: Controla la navegación entre páginas.
3.Vite: Permite un entorno de desarrollo rápido y ágil.

