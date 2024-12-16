import React from "react";

function historia() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-950 to-sky-900">
      <div className="relative">
        {/* <div className="relative h-[500px] w-full"> */}
        <div className="flex justify-center items-center">
          {/* <img src="images/lamadridfondo.jpg" alt="images" className="w-full h-full object-fill"/> */}
          <img
            src="images/lamadridfondo_banner.png"
            alt="images"
            className="w-3/4 h-full object-fill"
          />
          <div className="absolute inset-0 from-sky-950" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 text-center transform translate-y-1/2">
          <div className="bg-white/10 backdrop-blur-lg rounded-lg mx-auto max-w-3xl p-6 shadow-2xl border border-white/20">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Historia de General La Madrid
            </h1>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 pt-32 pb-16">
        <div className="bg-white/10 rounded-lg p-8 shadow-xl border border-white/20">
          <div className="flex items-start gap-4 mb-8">
            <p className="text-sky-100 leading-relaxed">
              General La Madrid, fundada el 4 de octubre de 1889, es una ciudad
              ubicada en el sudoeste de la provincia de Buenos Aires, Argentina.
              Lleva el nombre del general Gregorio Aráoz de Lamadrid, un prócer
              de la independencia argentina.
            </p>
          </div>

          <div className="space-y-6 text-sky-100 leading-relaxed ">
            <p>
              Originalmente parte de la "Conquista del Desierto", la región fue
              colonizada por inmigrantes europeos, principalmente españoles e
              italianos, que se dedicaron a la agricultura y la ganadería. Estas
              actividades siguen siendo pilares importantes de la economía
              local.
            </p>

            <p>
              A lo largo de los años, General La Madrid ha crecido de manera
              sostenida, manteniendo su carácter rural y sus tradiciones. La
              ciudad ha sido testigo de importantes cambios tecnológicos en la
              agricultura, adaptándose a las nuevas técnicas de cultivo y
              ganadería.
            </p>

            <p>
              Un hito importante en la historia reciente de la ciudad fue la
              construcción del balneario municipal en la década de 1980. Este
              proyecto transformó un área antes subutilizada en un centro de
              recreación y turismo, convirtiéndose rápidamente en el corazón de
              la vida social de la comunidad.
            </p>

            <p>
              Hoy, General La Madrid es conocida por su calidad de vida, su
              producción agropecuaria y, por supuesto, su hermoso balneario, que
              atrae a visitantes de toda la región, especialmente durante los
              calurosos meses de verano.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default historia;
