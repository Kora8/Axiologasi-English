//Estas frases van a ser por mes (1-2 por día), es decir que despues voy a tener que generar unas nuevas
/*
 Inicio de las frases
 */
let frases_ingles=[
  "The only way to do great work is to love what you do",
  "The only limit to our realization of tomorrow will be our doubts of today",
  "Change you thoughts and change your world",
  "The unexamined life is not worth living",
  "It does not matter how slowly you go as long as you do not stop",
  "You are never too old to set another goal or to dream a new dream",
  "The best way to predict the future is to create it",
  "The biggest risk is not taking any risk. In a world that is changing quickly, the only strategy that is guaranteed to fail is not taking risks",
  "Don't count the days; make the days count",
  "In the middle of every difficulty lies opportunity",
  "The only person you are destined to become is the person you decide to be",
  "Your time is limited, don't waste it living someone else's life",
  "Success is not final, failure is not fatal: It is the courage to continue that counts",
  "The key is to keep company only with people who uplift you, whose presence calls forth your best.",
  "The only way to achieve the impossible is to believe it is possible.",
  "Believe you can and you're halfway there",
  "Happiness is not something ready made. It comes from your own actions.",
  "The only thing that stands between you and your dream is the will to try and the belief that it is actually possible.",
  "Life is what happens when you're busy making other plans",
  "The only true wisdom is in knowing you know nothing.",
];

let frases_significado=[
	"La única forma de hacer un gran trabajo es amar lo que haces.",
	"La única limitación para realizar nuestro mañana serán nuestras dudas de hoy.",
	"Cambia tus pensamientos y cambiarás tu mundo.",
	"La vida no examinada no vale la pena vivirla.",
	"No importa cuán lentamente vayas, siempre y cuando no te detengas.",
	"Nunca eres demasiado viejo para establecer otro objetivo o soñar un nuevo sueño.",
	"La mejor manera de predecir el futuro es crearlo.",
	"El mayor riesgo es no tomar ningún riesgo. En un mundo que cambia rápidamente, la única estrategia que está garantizada para fracasar es no tomar riesgos.",
	"No cuentes los días; haz que los días cuenten.",
	"En medio de cada dificultad yace una oportunidad.",
	"La única persona que estás destinado a convertirte es la persona que decides ser.",
	"Tu tiempo es limitado, no lo malgastes viviendo la vida de alguien más.",
	"El éxito no es definitivo, el fracaso no es mortal: lo que cuenta es el coraje de continuar.",
	"La clave es rodearse solo de personas que te eleven, cuya presencia saque lo mejor de ti.",
	"La única forma de lograr lo imposible es creer que es posible.",
	"Cree que puedes y estás a medio camino.",
	"La felicidad no es algo listo. Viene de tus propias acciones.",
	"Lo único que se interpone entre tú y tu sueño es la voluntad de intentarlo y la creencia de que es posible.",
	"La vida es lo que sucede cuando estás ocupado haciendo otros planes.",
	"La única verdadera sabiduría está en saber que no sabes nada.",
];

/*FIN DE LAS FRASES Y SU SIGNIFICADO*/
//document.write(frases_ingles[2]);
const generar = document.getElementById('generarFrase');
const ContenedorScroll = document.querySelector('.ContenedorScroll'); // Selecciona el contenedor
let i = 0;

generar.addEventListener("click", () => {
  /*CREANDO EL GENERADOR DE FRASES*/
  if (i < frases_ingles.length) {
    if (i > 0) {
      // Si ya existe un elemento anterior, elimínalo
      const elementoAnterior = ContenedorScroll.querySelector(".Frase_Generada"); // Busca en el contenedor
      if (elementoAnterior) {
        elementoAnterior.remove();
      }
    }

    // Agregamos la frase del array al DOM dentro del contenedor
    const iteracion = frases_ingles[i];
    var h2 = document.createElement("h2");
    h2.className = "Frase_Generada";
    h2.textContent = iteracion;
    ContenedorScroll.appendChild(h2); // Agrega al contenedor
    i++;
  }

  // CREANDO EL CONTADOR
  if (i < frases_ingles.length) {
    if (i > 0) {
      const eliminarContadorAnterior = ContenedorScroll.querySelector(".contador"); // Busca en el contenedor
      if (eliminarContadorAnterior) {
        eliminarContadorAnterior.remove();

        var logEl = document.querySelector('.contador');
      }
    }
   
    // Agregamos el contador al DOM dentro del contenedor
    var h4 = document.createElement("h4");
    h4.className = "contador";
    h4.textContent = `Te quedan ${[20 - i]} frases`;
    ContenedorScroll.appendChild(h4); // Agrega al contenedor
   
    var logEl = document.querySelector('.contador');
    var battery = {
      Cargando: '0%',
      Completado: 0
    }
  anime({
  targets: battery,
  Cargando: ' 100',
  Completado: ` Te quedan ${[20 - i]} frases`,
  round: 1,
  easing: 'linear',
  update: function() { // Convertir el objeto 'battery' en una cadena JSON
    // Convertir el objeto 'battery' en una cadena JSON
    var jsonString = JSON.stringify(battery);
    
    // Eliminar las llaves del texto JSON
    var cleanText = jsonString.replace(/["{}]/g, '');
    
    // Reemplazar las comas por saltos de línea
    cleanText = cleanText.replace(/,/g, '<br>');

    // Asignar el texto limpio al elemento HTML
    logEl.innerHTML = cleanText;
}
  });
    

  }

  /*ESTE SIRVE PARA IR BORRANDO LAS FRASES CUANDO YA NO LAS NECESITEMOS
  USANDO: SI FRASES_INGLES ES PAR, BORRAMOS LA FRASE EN ESPAÑOL QUE NO CORRESPONDE A LA
  FRASE EN INGLÉS*/
  if (frases_ingles.length % 2 === 0) {
    const elementosAnteriores = ContenedorScroll.querySelectorAll(".Frase_Generada_ES");
    elementosAnteriores.forEach((elemento) => {
      elemento.remove();
    });
  }
});

//Mostramos la traducción
const btnTraduccion = document.getElementById('traducir');
let x = 0;

btnTraduccion.addEventListener("click", () => {
  if (x < frases_significado.length) {
    // Borrar el contenido anterior
    const elementosAnteriores = ContenedorScroll.querySelectorAll(".Frase_Generada_ES");
    elementosAnteriores.forEach((elemento) => {
      elemento.remove();
    });
    // Agregamos la traducción al DOM dentro del contenedor
    const traduccion = frases_significado[x];
    var h2_traduccion = document.createElement("h2");
    h2_traduccion.className = "Frase_Generada_ES";
    h2_traduccion.textContent = traduccion;
    ContenedorScroll.appendChild(h2_traduccion); // Agrega al contenedor

    x++;
  }
});

const Bajar = document.getElementById('bajar');
Bajar.addEventListener("click",()=>{
  const Ctrl = document.getElementById('Ctrl');
  Ctrl.style.display="block";
  const contenedorGenerador = document.getElementById('contenedorGenerador');
  contenedorGenerador.style.display="none";
 
  const animacionMicrofono = document.getElementById('microfono');
  animacionMicrofono.style.display="flex";
  anime({
    targets: '#microfono',
    left: '50%',
    backgroundColor: '#BC3179',
    borderRadius: ['0%', '50%'],
    easing: 'easeInOutQuad'
  });
});


/*GRABAR VOZ*/
const microfono = document.getElementById('microfono');
const stopRecordingButton = document.getElementById('stopRecording');
const audioPlayer = document.getElementById('audioPlayer');
let mediaRecorder;
let audioChunks = [];

// Evento de clic en el micrófono para iniciar la grabación
microfono.addEventListener('click', () => {
    navigator.mediaDevices.getUserMedia({ audio: true })
        .then(function(stream) {
            // Crear un objeto MediaRecorder para grabar el audio
            mediaRecorder = new MediaRecorder(stream);

            // Cuando se recibe un trozo de audio, guárdalo
            mediaRecorder.ondataavailable = function(e) {
                if (e.data.size > 0) {
                    audioChunks.push(e.data);
                }
            };

            // Asignar el evento 'onstop' después de crear mediaRecorder
            mediaRecorder.onstop = function() {
                let audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
                let audioUrl = URL.createObjectURL(audioBlob);
                audioPlayer.src = audioUrl;
                audioChunks = [];
            };

            // Iniciar la grabación
            mediaRecorder.start();

            // Habilitar el botón de detener y deshabilitar el de inicio
            microfono.disabled = true;
            stopRecordingButton.disabled = false;
        })
        .catch(function(err) {
            console.error('Error al acceder al micrófono:', err);
        });
});

// Detener la grabación cuando se haga clic en el botón de detener
stopRecordingButton.addEventListener('click', () => {
    // Detener la grabación
    mediaRecorder.stop();

    // Habilitar el botón de inicio y deshabilitar el de detener
    microfono.disabled = false;
    stopRecordingButton.disabled = true;
});
