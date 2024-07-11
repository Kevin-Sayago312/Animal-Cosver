document.getElementById('comenzar').addEventListener('click', iniciarConsulta);
document.getElementById('si').addEventListener('click', () => responder('si'));
document.getElementById('no').addEventListener('click', () => responder('no'));
document.getElementById('tratamiento').addEventListener('click', mostrarTratamiento);
document.getElementById('reiniciar').addEventListener('click', reiniciar);

let respuestas = [];
let diagnostico = '';

/* EMPIEZA BASE DE CONOCIMIENTOS*/
const preguntas = [
    { texto: '¿El perro tiene mal olor en los oídos?', imagen: 'assets/img/img_conocimientos/mal_olor_oidos.jpg' },
    { texto: '¿El perro se rasca las orejas?', imagen: 'assets/img/img_conocimientos/rasca_orejas.jpg' },
    { texto: '¿El perro mantiene la cabeza inclinada hacia un lado?', imagen: 'assets/img/img_conocimientos/cabeza_hacia_laterales.jpg' },
    { texto: '¿El perro tiene líquido en los oídos?', imagen: 'assets/img/img_conocimientos/liquido_oido.jpg' },
    { texto: '¿El perro tiene fiebre?', imagen: 'assets/img/img_conocimientos/fiebre.jpg' },
    { texto: '¿El perro ha perdido el apetito?', imagen: 'assets/img/img_conocimientos/perdida_apetito.jpg' },
    { texto: '¿El perro ha perdido peso?', imagen: 'assets/img/img_conocimientos/perdida_peso.jpg' },
    { texto: '¿El perro tiene diarrea?', imagen: 'assets/img/img_conocimientos/diarrea.jpg' },
    { texto: '¿El perro tiene tos?', imagen: 'assets/img/img_conocimientos/tos.jpg' },
    { texto: '¿El perro tiene secreción nasal?', imagen: 'assets/img/img_conocimientos/secreciones.jpg' },
    { texto: '¿El perro tiene irritación cutánea?', imagen: 'assets/img/img_conocimientos/hirritacion_cutanea.jpg' },
    { texto: '¿El perro tiene picazón en la piel?', imagen: 'assets/img/img_conocimientos/picazon_piel.jpg' },
    { texto: '¿El perro se rasca mucho la piel?', imagen: 'assets/img/img_conocimientos/rasca_piel.jpg' },
    { texto: '¿El perro tiene costras en la piel?', imagen: 'assets/img/img_conocimientos/costras_piel.jpg' },
    { texto: '¿El perro tiene llagas en la piel?', imagen: 'assets/img/img_conocimientos/llagas_piel.jpg' },
    { texto: '¿El perro tiene granos y enrojecimiento?', imagen: 'assets/img/img_conocimientos/granos_enrojecimiento.jpg' },
    { texto: '¿El perro tiene pérdida de pelo?', imagen: 'assets/img/img_conocimientos/perdida_pelo.jpg' },
    { texto: '¿El perro tiene mal olor en la piel?', imagen: 'assets/img/img_conocimientos/mal_olor_piel.jpg' },
    { texto: '¿El perro tiene vómito?', imagen: 'assets/img/img_conocimientos/vomito.jpg' },
    { texto: '¿El perro está decaído?', imagen: 'assets/img/img_conocimientos/decaimiento.jpg' }
];

const diagnosticosPosibles = {
    Otitis: {
        sintomas: ['¿El perro tiene mal olor en los oídos?', 
        '¿El perro se rasca las orejas?', 
        '¿El perro mantiene la cabeza inclinada hacia un lado?', 
        '¿El perro tiene líquido en los oídos?'],

        imagen: 'assets/img/img_conocimientos/otitis_perro.jpg',

        tratamiento: `
        <b>Limpieza del oído:</b> Limpieza regular con soluciones limpiadoras recomendadas por el veterinario.
        <br>
        <b>Medicamentos tópicos:</b> Gotas óticas que contienen antibióticos, antifúngicos o antiinflamatorios.
        <br>
        <b>Medicamentos sistémicos:</b> Antibióticos orales para infecciones severas o sistémicas, AINES para reducir el dolor y la inflamación.
        <br>
        <b>Tratamientos para causas subyacentes:</b> Manejo de alergias con dietas hipoalergénicas o medicamentos antialérgicos, tratamiento de trastornos endocrinos como el hipotiroidismo.
        `,

        descripcion: 'La otitis es una inflamación del canal auditivo que puede afectar tanto a perros como a gatos. Puede ser externa, media o interna, dependiendo de la parte del oído afectada. Es una condición común que puede causas molestias significativos y potencialmente llevar a complicaciones mas graves si no se trata adecuadamente.'
    },
    Parvovirus: {
        sintomas: ['¿El perro tiene fiebre?', 
        '¿El perro ha perdido el apetito?', 
        '¿El perro ha perdido peso?', 
        '¿El perro tiene diarrea?', 
        '¿El perro tiene vómito?'],

        imagen: 'assets/img/img_conocimientos/parvovirus.jpg',

        tratamiento: `
        <b>Cuidados de soporte:</b> Terapia	de	fluidos intravenosos para prevenir la deshidratación.
        <br>
            Antieméticos y antidiarreicos para controlar vómitos y diarrea.
        <br>
            Nutrición de soporte, incluyendo alimentación por sonda si es necesario.
        <br>
        <b>Tratamiento sintomático:</b> Antibióticos para prevenir o tratar	infecciones bacterianas secundarias.
        <br>
            Anticonvulsivos	para controlar las convulsiones.
        <br>
        <b>Aislamiento:</b> Aislamiento del perro infectado para prevenir la propagación del virus.
        `,

        descripcion: 'El parvovirus canino es una enfermedad viral grave que afecta principalmente a los cachorros no vacunados. Es altamente contagiosa y puede causar síntomas graves como vómitos, diarrea (a menudo con sangre), pérdida de apetito y fiebre.'
    },
    Sarna: {
        sintomas: ['¿El perro tiene irritación cutánea?', 
        '¿El perro tiene picazón en la piel?', 
        '¿El perro se rasca mucho la piel?', 
        '¿El perro tiene costras en la piel?', 
        '¿El perro tiene llagas en la piel?', 
        '¿El perro tiene granos y enrojecimiento?', 
        '¿El perro tiene pérdida de pelo?'],

        imagen: 'assets/img/img_conocimientos/sarna2.jpg',

        tratamiento: `
        <b>Tratamiento Tópico:</b> Baños con champús acaricidas o soluciones de azufre y cal.
        <br>
            Aplicación de medicamentos tópicos como AMITRAZ, lime SULFUR, o FIPRONIL.
        <br>
        <b>Tratamiento Sistémico:</b> Antiparasitarios orales o inyectables como ivermectina, MILBEMICINA, o moxidectina.
        <br>
        Antibióticos para infecciones bacterianas secundarias.
        <br>
        Antiinflamatorios para reducir el prurito y la inflamación.     
        <br>
        <b>Tratamiento de Apoyo:</b> Mejorar la nutrición y el cuidado general del animal.
        <br>
        Manejo del entorno para evitar la reinfestación. 
        `,

        descripcion: 'La sarna es una enfermedad cutánea causada por la infestación de ácaros que afecta a perros, gatos y otros animales. Existen diferentes tipos de sarna dependiendo del ácaro implicado, siendo los más comunes la sarna sarcótica (causada por SARCOPTES SCABIEI) y la sarna demodécica (causada por DEMODEX spp.).'
    },
    ParasitosInternos: {
        sintomas: ['¿El perro tiene vómito?', 
        '¿El perro tiene diarrea?', 
        '¿El perro ha perdido el apetito?', 
        '¿El perro ha perdido peso?', 
        '¿El perro está decaído?'],

        imagen: 'assets/img/img_conocimientos/parasitosInternos.jpg',

        tratamiento: `
        <b>Antiparasitarios Orales:</b> NEMEX (PAMOATO de PIRANTEL) para gusanos redondos.
        <br>
        FENBENDAZOL para anquilostomas, tricocéfalos y algunos protozoos.
        <br>
        Praziquantel para tenias.
        <br>
        Metronidazol o FENBENDAZOL para GIARDIA.
        <br>
        <b>Antiparasitarios Tópicos:</b> Tratamientos tópicos combinados que incluyen ingredientes activos contra parásitos internos y externos (como SELAMECTINA).
        <br>
        <b>Tratamiento de Soporte:</b> Terapia de fluidos en casos de deshidratación severa.
        <br>
        Suplementos nutricionales para cachorros severamente afectados. 
        <br>
        Manejo de infecciones secundarias (antibióticos si hay infecciones bacterianas concomitantes). 
        <br>
        <b>Desparasitación   Preventiva:</b> Protocolos de desparasitación regular según la edad y estilo de vida del animal.
        `,

        descripcion: 'Las infecciones por parásitos internos (endoparásitos) son comunes en perros y gatos y pueden causar una variedad de problemas de salud. Los parásitos internos más frecuentes incluyen los nematodos (gusanos redondos), cestodos (tenias), y protozoos (como GIARDIA y coccidios).'
    }
};

/* TERMINA BASE DE CONOCIMIENTOS*/

let preguntaActual = 0;

function iniciarConsulta() {
    document.getElementById('interfaz').style.display = 'none';
    document.getElementById('titulo_tratamiento').style.display = 'none';
    document.getElementById('diagnostico').style.display = 'block';

    mostrarPregunta();
}

function mostrarPregunta() {
    if (preguntaActual < preguntas.length) {
        const pregunta = preguntas[preguntaActual];
        document.getElementById('pregunta').innerText = pregunta.texto;
        document.getElementById('imagen').innerHTML = `<img src="${pregunta.imagen}" alt="${pregunta.texto}">`;
    } else {
        finalizarDiagnostico();
    }
}


function responder(respuesta) {
    respuestas.push({ pregunta: preguntas[preguntaActual].texto, respuesta });
    preguntaActual++;
    mostrarPregunta();
}

/* EMPIEZA EL MOTOR DE INFERENCIA*/
function finalizarDiagnostico() {
    const posiblesDiagnosticos = [];
    for (const [diagnostico, datos] of Object.entries(diagnosticosPosibles)) {
        const coincidencias = datos.sintomas.filter(sintoma => respuestas.some(r => r.pregunta === sintoma && r.respuesta === 'si')).length;
        if (coincidencias > 0) {
            posiblesDiagnosticos.push(diagnostico);
        }
    }

    let resultadoHTML = '';
    if (posiblesDiagnosticos.length > 0) {
        posiblesDiagnosticos.forEach(diagnostico => {
            const datos = diagnosticosPosibles[diagnostico];
            resultadoHTML += `
                <div class="card" style="width: 18rem; margin: auto; display: inline-block;">
                    <img src="${datos.imagen}" class="card-img-top" alt="${diagnostico}">
                    <div class="card-header">
                        <h5 class="card-title">${diagnostico}</h5>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">¿Qué es?</h5>
                        <p class="card-text">${datos.descripcion}</p>
                    </div>
                </div>
            `;
        });
    } else {
        resultadoHTML = 'No se encontraron diagnósticos posibles.';
    }

    document.getElementById('pregunta').innerText = '👇 Para volver a contestar las preguntas dale click al botón de abajo 👇';
    document.getElementById('info-resultado').innerText = 'Resultados de tu mascota:';
    document.getElementById('resultado').innerHTML = resultadoHTML;
    document.getElementById('tratamiento').style.display = 'block';
    document.getElementById('titulo_tratamiento').style.display = 'block';
    document.getElementById('si').style.display = 'none';
    document.getElementById('no').style.display = 'none';
    mostrarTratamiento(posiblesDiagnosticos);
}
/* TERMINA EL MOTOR DE INFERENCIA*/


function mostrarTratamiento(diagnosticos) {
    let tratamientoHTML = '<div class="row justify-content-center">';
    diagnosticos.forEach((diagnostico, index) => {
        const datos = diagnosticosPosibles[diagnostico];
        tratamientoHTML += `
            <div class="col-md-6 mb-4 d-flex justify-content-center">
                <div class="card" style="width: 18rem;">
                    <img src="${datos.imagen}" class="card-img-top" alt="${diagnostico}">
                    <div class="card-header">
                        <h5 class="card-title">Tratamiento para ${diagnostico}</h5>
                    </div>
                    <div class="card-body">
                        <p class="card-text">${datos.tratamiento}</p>
                    </div>
                </div>
            </div>

            <form action="${guardarTratamientoUrl}" method="post">
                <div class="form-group">
                    <label for="enfermedad">Enfermedad</label>
                    <input type="text" name="enfermedad" class="form-control" value="${diagnostico}">
                </div>
                <div class="form-group">
                    <label for="descripcion">Descripción</label>
                    <input type="text" name="descripcion" class="form-control" value="${datos.descripcion}" >
                </div>
                <div class="form-group">
                    <label for="tratamiento">Tratamiento</label>
                    <input type="text" name="tratamiento" class="form-control" value="${datos.tratamiento}" >
                </div>
                <input type="hidden" name="user_id" value="${appUserId}">
                <div class="d-flex justify-content-center mt-3">
                    <button type="submit" class="btn btn-success">Guardar tratamiento(s)</button>
                </div>
            </form>
        `;

        // Cierra la fila después de dos cards y abre una nueva fila si no es la última card
        if ((index + 1) % 2 === 0 && (index + 1) !== diagnosticos.length) {
            tratamientoHTML += '</div><div class="row justify-content-center">';
        }
    });
    tratamientoHTML += '</div>'; // Cierra la última fila
    document.getElementById('tratamientoContenido').innerHTML = tratamientoHTML;
    document.getElementById('tratamientos').style.display = 'block';
}


function reiniciar() {
    respuestas = [];
    preguntaActual = 0;
    document.getElementById('tratamiento').style.display = 'none';
    document.getElementById('tratamientos').style.display = 'none';
    document.getElementById('resultado').innerText = '';
    document.getElementById('tratamientoContenido').innerHTML = '';
    document.getElementById('si').style.display = 'block';
    document.getElementById('no').style.display = 'block';
    document.getElementById('info-resultado').style.display = 'none'; // Ocultar el título de resultados al reiniciar
    mostrarPregunta();
}
