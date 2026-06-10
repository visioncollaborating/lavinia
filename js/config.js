/* ==========================================================================
   CONFIGURACIÓN SEMANAL DEL CALENDARIO
   Modifica solo los valores entre comillas invertidas ( ` ) de este bloque cada viernes.
   ========================================================================== */

const CONFIG_SEMANAL = {
    // 1. TITULARES PRINCIPALES DE LA PÁGINA
    titulo: "Calendario Junio 2026",
    cliente: "Lavinia Flores",
    rangoFechas: "✨ Semana del lunes 8 al sábado 13 de junio ✨",
    
    // 2. CONFIGURACIÓN DE INSTAGRAM MOCKUP
    usuarioInstagram: "lflores.bienesraices",
    avatarLetras: "LF", // Iniciales que salen en el círculo del perfil

    // 3. CONTENIDO DE LAS PUBLICACIONES (4 Posts de la semana)
    publicaciones: [
        {
            tipo: "imagen", // Opciones disponibles: "imagen", "video", "carrusel"
            diaSemana: "Martes 9 de Junio",
            // Corregido con comillas invertidas para soportar párrafos y links largos
            copy: `📈 ¿Comprar propiedades en año electoral? Por qué deberías hacerlo:

Mientras la mayoría espera, los inversionistas inteligentes aprovechan para negociar mejores precios.

📉 Menos competencia: Menos compradores buscando las mismas propiedades.
💵 Poder de negociación: Propietarios más abiertos a escuchar ofertas.
🚀 Mayor plusvalía: Compras barato hoy y ganas cuando el mercado se estabilice.

La incertidumbre de otros es tu oportunidad de negocio.
.
.
Lavinia Flores | MVCS PN-7714
WhatsApp: https://wa.me/51997937414`,
            imagenes: ["img/9.jpg"] 
        },
        {
            tipo: "video", // Al poner "video" el sistema le añade la etiqueta de REEL en la esquina
            diaSemana: "Jueves 11 de Junio",
            copy: `🏢 KENKO II – Surco: Tu próximo departamento con terraza y zona BBQ

Vive en una zona residencial top, cerca de colegios, centros comerciales y avenidas principales.

🥩 Área social: Departamentos con balcón, terraza y parrilla propia.
🍳 Diseño moderno: Cocina abierta integrada y cuarto de lavado independiente.
🔑 Exclusividad: Edificio funcional con dos ingresos independientes y ascensores de alta tecnología.

Diseñado para disfrutar en familia sin salir de casa.
.
.
Lavinia Flores | MVCS PN-7714
WhatsApp: https://wa.me/51997937414`,
            imagenes: ["img/11.jpg"]
        },
        {
            tipo: "carrusel", // Al poner "carrusel" el sistema activa los puntitos interactivos de Instagram
            diaSemana: "Viernes 12 de Junio",
            copy: `🚧 Ahorra comprando en planos

Es la mejor forma de ganar plusvalía desde el primer día, pero antes de firmar revisa estos 3 puntos clave:

🏢 Trayectoria: Que la constructora tenga proyectos ya entregados.
🏦 Respaldo: Elige proyectos financiados por un banco o con fideicomiso.
🗓️ Tiempos: Asegura la fecha de entrega con penalizaciones por retraso.

Una buena maqueta vende, pero los papeles te dan la tranquilidad real.
.
.
Lavinia Flores | MVCS PN-7714
WhatsApp: https://wa.me/51997937414`,
            // Lista tus 5 imágenes del carrusel aquí separadas por comas:
            imagenes: [
                "img/12.jpg",
                "img/12_2.jpg",
                "img/12_3.jpg",
                "img/12_4.jpg",
                "img/12_5.jpg"
            ]
        },
        {
            tipo: "video",
            diaSemana: "Sábado 13 de Junio",
            copy: `🏢 ¿Por qué todo el mundo busca departamentos Flat en Lima?

Vivir en un solo nivel es la opción más práctica y con mayor valor de reventa en el mercado.

👶 Seguridad y comodidad: Cero escaleras. Ideal para niños, mascotas y adultos mayores.
🧹 Espacio eficiente: Más fácil de limpiar, amoblar y mantener en el día a día.
💸 Inversión segura: Son los que más rápido se alquilan y venden en distritos top.

Menos divisiones y ambientes mucho mejor aprovechados.
.
.
Lavinia Flores | MVCS PN-7714
WhatsApp: https://wa.me/51997937414`,
            imagenes: ["img/13.jpg"]
        }
    ]
};

/* ==========================================================================
   LÓGICA DEL MOTOR DEL SISTEMA (No tocar a menos que quieras remaquetar)
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    // Inyectar textos del encabezado
    document.getElementById("mainTitle").innerText = CONFIG_SEMANAL.titulo;
    document.getElementById("mainSubtitle").innerText = CONFIG_SEMANAL.cliente;
    document.getElementById("weekDates").innerText = CONFIG_SEMANAL.rangoFechas;

    const wrapper = document.getElementById("slidesWrapper");
    const totalPosts = CONFIG_SEMANAL.publicaciones.length;

    // Generar dinámicamente los Mockups de Instagram
    CONFIG_SEMANAL.publicaciones.forEach((post, index) => {
        const slide = document.createElement("div");
        slide.className = `slide ${index === 0 ? 'active' : ''}`;

        // Determinar estructura multimedia
        let mediaHTML = "";
        let legendClass = "";

        if (post.tipo === "video") {
            legendClass = "spec-video";
            mediaHTML = `
                <div class="ig-media">
                    <div class="ig-reel-icon">🎬 REEL</div>
                    <img src="${post.imagenes[0]}" alt="Video ${index + 1}">
                </div>`;
        } else if (post.tipo === "carrusel") {
            legendClass = "spec-carousel";
            let imagesHTML = post.imagenes.map(src => `<img src="${src}" alt="Carrusel">`).join("");
            let dotsHTML = post.imagenes.map((_, i) => `<span class="dot ${i === 0 ? 'active' : ''}"></span>`).join("");
            
            mediaHTML = `
                <div class="ig-media-carousel">
                    <div class="inner-carousel-track" id="carouselTrack">
                        ${imagesHTML}
                    </div>
                    <div class="carousel-dots">
                        ${dotsHTML}
                    </div>
                </div>`;
        } else {
            // Imagen estándar
            mediaHTML = `
                <div class="ig-media">
                    <img src="${post.imagenes[0]}" alt="Imagen ${index + 1}">
                </div>`;
        }

        // Armar el esqueleto completo del post
        slide.innerHTML = `
            <div class="instagram-mockup">
                <div class="ig-header">
                    <div class="ig-avatar">${CONFIG_SEMANAL.avatarLetras}</div>
                    <div class="ig-username">${CONFIG_SEMANAL.usuarioInstagram}</div>
                </div>
                
                ${mediaHTML}
                
                <div class="post-legend ${legendClass}">
                    <span class="legend-indicator">Publicación ${index + 1} de ${totalPosts}</span>
                    <span class="legend-day">📅 ${post.diaSemana}</span>
                </div>

                <div class="ig-actions">
                    <span>❤️</span> <span>💬</span> <span>🔁</span>
                </div>
                
                <div class="ig-caption-box">
                    <p class="ig-caption">${post.copy}</p>
                </div>
            </div>
        `;
        wrapper.appendChild(slide);
    });

    // Inyectar de último la Pantalla 5 fija de Aprobación
    const approvalSlide = document.createElement("div");
    approvalSlide.className = "slide";
    approvalSlide.innerHTML = `
        <div class="approval-card">
            <div class="approval-icon">📝</div>
            <h2>Revisión Final</h2>
            <p>Por favor, indícanos si apruebas el contenido o si deseas dejarnos alguna corrección.</p>
            <div class="form-group">
                <label class="radio-label">
                    <input type="radio" name="status" value="APROBADO" checked>
                    <span class="custom-radio approved">🟢 ¡Todo aprobado, me encanta!</span>
                </label>
                <label class="radio-label">
                    <input type="radio" name="status" value="CON CAMBIOS">
                    <span class="custom-radio changes">🟡 Aprobar con cambios / observaciones</span>
                </label>
            </div>
            <div class="form-group">
                <textarea id="clientComments" placeholder="Escribe aquí tus comentarios, correcciones o sugerencias para esta semana..."></textarea>
            </div>
            <button class="submit-whatsapp-btn" id="sendWhatsapp">
                <span>💬 Enviar Respuesta al Grupo de WhatsApp</span>
            </button>
        </div>
    `;
    wrapper.appendChild(approvalSlide);

    // INICIALIZAR EVENTOS DE NAVEGACIÓN (Control del Carrusel Principal)
    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    let currentSlide = 0;

    function updateSlidePosition(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove("active");
            if (i === index) slide.classList.add("active");
        });
        prevBtn.style.visibility = index === 0 ? "hidden" : "visible";
        nextBtn.style.visibility = index === slides.length - 1 ? "hidden" : "visible";
    }

    prevBtn.addEventListener("click", () => { if (currentSlide > 0) { currentSlide--; updateSlidePosition(currentSlide); } });
    nextBtn.addEventListener("click", () => { if (currentSlide < slides.length - 1) { currentSlide++; updateSlidePosition(currentSlide); } });
    updateSlidePosition(currentSlide);

    // ACTIVAR SCROLL DE PUNTITOS PARA LOS CARRUSELES INTERNOS
    const tracks = document.querySelectorAll(".inner-carousel-track");
    
    tracks.forEach(track => {
        const dots = track.parentElement.querySelectorAll(".dot");
        
        // 1. Detectar el movimiento cuando arrastran la foto
        track.addEventListener("scroll", () => {
            const width = track.clientWidth;
            const activeIndex = Math.round(track.scrollLeft / width);
            dots.forEach((dot, idx) => {
                dot.classList.remove("active");
                if (idx === activeIndex) dot.classList.add("active");
            });
        });

        // 2. NUEVO: Detectar el clic en cada puntito para mover la foto
        dots.forEach((dot, index) => {
            dot.addEventListener("click", () => {
                const width = track.clientWidth;
                // Mueve el scroll horizontal de la foto hacia la posición del puntito
                track.scrollTo({
                    left: width * index,
                    behavior: "smooth" // Movimiento suave de lado a lado
                });
            });
        });
    });

    // CONFIGURACIÓN DE ENVÍO DIRECTO A WHATSAPP
    document.getElementById("sendWhatsapp").addEventListener("click", () => {
        const status = document.querySelector('input[name="status"]:checked').value;
        const comments = document.getElementById("clientComments").value.trim() || "Sin comentarios adicionales.";
        
        const message = `*RESPUESTA CALENDARIO - ${CONFIG_SEMANAL.cliente.toUpperCase()}*\n\n` +
                        `*Estado:* ${status}\n` +
                        `*Comentarios:* ${comments}\n\n` +
                        `_Enviado desde el sistema de previsualización web._`;
        
        const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    });
});