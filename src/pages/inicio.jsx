import ImageCarousel from "../components/Carousel";
import "../App.css";


const inicio = () => {
    return (

    <div className="flex flex-col min-h-screen">

    <div className="flex-grow relative">
    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/lamadridfondo.jpg')" }}></div>
    <div className="absolute inset-0 bg-black bg-opacity-70"></div>
    <main className="relative z-10 main-content">
        <ImageCarousel />
        {/* Sección Información */}
        <section className="p-8 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Bienvenidos a General La Madrid</h2>
        <p className="mb-6">General La Madrid es un destino turístico increíble con una rica historia y una gran variedad de actividades para disfrutar. Desde su hermoso balneario municipal hasta sus fascinantes opciones de deportes y recreación, siempre hay algo para todos.</p>
        <p className="mb-6">Nuestros hospedajes ofrecen comodidad y calidad para que tu estancia sea inolvidable, y nuestra gastronomía te deleitará con sabores locales únicos. ¡Ven y descubre todo lo que General La Madrid tiene para ofrecer!</p>
        </section>
        {/* Sección Imagenes Destacadas */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-8">
        <div className="bg-white bg-opacity-10 p-4 rounded-lg">
            <img src="images/balneario.jpg" alt="Balneario Municipal" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold text-white">Balneario Municipal</h3>
            <p className="text-white">Disfruta del día en nuestro hermoso balneario con todas las comodidades.</p>
        </div>
        <div className="bg-white bg-opacity-10 p-4 rounded-lg">
            <img src="images/deportes.jpg" alt="Deportes" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold text-white">Deportes y Actividades</h3>
            <p className="text-white">Participa en nuestras emocionantes actividades y deportes disponibles para todos.</p>
        </div>
        <div className="bg-white bg-opacity-10 p-4 rounded-lg">
            <img src="images/hospedajes.jpg" alt="Hospedajes" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold text-white">Hospedajes</h3>
            <p className="text-white">Alojamiento cómodo y de calidad para una estancia perfecta.</p>
        </div>
        <div className="bg-white bg-opacity-10 p-4 rounded-lg">
            <img src="images/Gastronomia.jpg" alt="Gastronomía" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold text-white">Gastronomía</h3>
            <p className="text-white">Disfruta de la mejor gastronomía local y sabores únicos.</p>
        </div>
        </section>
    </main>
    </div>

    </div>

    )
}

export default inicio;