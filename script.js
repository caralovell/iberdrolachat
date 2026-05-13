/* ============================================================
   Chatbot demo · Iberdrola × Carrefour
   Dos pantallas: bienvenida con CTAs + chat con respuestas.
   ============================================================ */

// ---------- Base de conocimiento ----------
const knowledgeBase = [
  {
    id: "colaboracion",
    keywords: [
      "colaboracion", "alianza", "acuerdo", "que es", "de que trata",
      "en que consiste", "iberdrola carrefour", "carrefour iberdrola",
      "promocion", "promo", "oferta", "ventajas", "beneficios", "que ofrece"
    ],
    answer: `
      <strong>¡Bienvenido a la alianza Iberdrola × Carrefour!</strong><br><br>
      Si contratas la <strong>luz o el gas con Iberdrola</strong> y eres <strong>socio del Club Carrefour</strong>, disfrutas de ventajas exclusivas:
      <ul>
        <li>💰 <strong>Hasta un 6% de acumulación</strong> en tu Cheque Ahorro Carrefour por tu consumo de energía.</li>
        <li>🎁 <strong>Tarjeta regalo Carrefour</strong> al contratar (consulta el importe vigente).</li>
        <li>⚡ Energía 100% verde de origen renovable certificado.</li>
      </ul>
      Necesitas tres pasos: <strong>contratar con Iberdrola</strong>, <strong>ser socio del Club</strong> y <strong>vincular ambos contratos</strong>.
    `
  },
  {
    id: "socio",
    keywords: [
      "socio", "hacerme socio", "club carrefour", "alta club", "registrarme",
      "registrar", "darme alta", "darme de alta", "club", "tarjeta club",
      "como ser socio", "hacerme del club", "ser del club", "apuntarme"
    ],
    answer: `
      <strong>Hacerte socio del Club Carrefour es gratis y rápido</strong> 🛒<br><br>
      Tienes dos opciones:
      <ul>
        <li>📱 Desde la <strong>app Mi Club Carrefour</strong> (Android e iOS).</li>
        <li>🏬 En el <strong>punto de atención al cliente</strong> de cualquier hipermercado Carrefour.</li>
      </ul>
      Al darte de alta recibirás tu <strong>tarjeta digital del Club</strong>, que necesitarás para vincularla con tu contrato de Iberdrola.
    `
  },
  {
    id: "vincular",
    keywords: [
      "vincular", "vinculacion", "enlazar", "unir", "asociar", "conectar contrato",
      "como vinculo", "vincular contrato", "vincular cuentas", "unir contrato",
      "juntar", "asociar contrato"
    ],
    answer: `
      <strong>Cómo vincular tu contrato Iberdrola con el Club Carrefour</strong> 🔗<br><br>
      <ul>
        <li>1️⃣ Entra en <a href="https://www.carrefour.es/iberdrola" target="_blank" rel="noopener">carrefour.es/iberdrola</a>.</li>
        <li>2️⃣ Introduce tu <strong>número de socio</strong> del Club Carrefour.</li>
        <li>3️⃣ Añade los datos de tu <strong>contrato de Iberdrola</strong> (CUPS o número de contrato).</li>
        <li>4️⃣ Confirma la vinculación.</li>
      </ul>
      A partir de ese momento, tu <strong>acumulación se cargará automáticamente</strong> en tu Cheque Ahorro Carrefour.
    `
  },
  {
    id: "ahorro",
    keywords: [
      "cuanto ahorro", "ahorro", "ahorrar", "porcentaje", "acumulacion",
      "cuanto acumulo", "cheque ahorro", "cheque", "descuento", "rebaja"
    ],
    answer: `
      <strong>Acumulación en tu Cheque Ahorro Carrefour</strong> 💰<br><br>
      Con la tarifa Plan Online Carrefour de Iberdrola puedes acumular <strong>hasta un 6%</strong> del consumo de tu factura de luz y gas en tu Cheque Ahorro.<br><br>
      Ese cheque se canjea en <strong>cualquier centro Carrefour</strong> (híper, súper, gasolineras o web).
    `
  },
  {
    id: "tarjeta_regalo",
    keywords: ["tarjeta regalo", "regalo", "cheque regalo", "tarjeta", "bono", "vale"],
    answer: `
      <strong>Tarjeta regalo Carrefour</strong> 🎁<br><br>
      Si contratas la luz o el gas con Iberdrola dentro de la promoción, recibirás una <strong>tarjeta regalo Carrefour</strong> para gastar en cualquier centro Carrefour.<br><br>
      La tarjeta te llegará <strong>de forma digital a tu correo electrónico</strong> y se activará en unos días.
    `
  },
  {
    id: "donde_canjear",
    keywords: [
      "donde canjear", "donde gastar", "donde uso", "donde usar", "canjear",
      "gastar cheque", "usar cheque", "donde se gasta"
    ],
    answer: `
      Tu Cheque Ahorro y tu tarjeta regalo Carrefour se pueden gastar en:
      <ul>
        <li>🏬 <strong>Hipermercados y supermercados Carrefour</strong></li>
        <li>⛽ <strong>Gasolineras Carrefour</strong></li>
        <li>🌐 <strong>Carrefour.es</strong> (compra online)</li>
        <li>🛍️ Tiendas <strong>Carrefour Market y Express</strong></li>
      </ul>
    `
  },
  {
    id: "cuando_recibo",
    keywords: [
      "cuando recibo", "cuando llega", "cuanto tarda", "plazo", "cuando me dan",
      "cuando lo cobro", "cuando se activa"
    ],
    answer: `
      ⏱️ Los plazos habituales son:
      <ul>
        <li>📧 <strong>Tarjeta regalo</strong>: la recibes por email en pocos días tras contratar y se <strong>activa a los 15 días</strong>.</li>
        <li>💳 <strong>Acumulación en Cheque Ahorro</strong>: se carga automáticamente cada vez que pagas tu factura, una vez vinculados los contratos.</li>
      </ul>
    `
  },
  {
    id: "contratar",
    keywords: [
      "contratar", "como contrato", "darme alta luz", "alta luz", "alta gas",
      "darme alta iberdrola", "cambiarme", "cambiar compañia", "cambiar de compañia",
      "quiero contratar"
    ],
    answer: `
      <strong>Contratar la luz o el gas con Iberdrola</strong> ⚡<br><br>
      Puedes hacerlo de varias formas:
      <ul>
        <li>🌐 Online en <a href="https://www.iberdrola.es/informacion/carrefour" target="_blank" rel="noopener">iberdrola.es/carrefour</a>.</li>
        <li>📞 Llamando al <strong>900 22 45 22</strong>.</li>
        <li>🏬 En el <strong>stand Iberdrola</strong> de tu Carrefour más cercano.</li>
      </ul>
      Necesitarás tu DNI, IBAN y una factura reciente (o el CUPS de tu suministro).
    `
  },
  {
    id: "requisitos",
    keywords: [
      "requisitos", "necesito", "que necesito", "documentacion", "que pide",
      "papeles", "documentos", "que hace falta", "que hay que tener"
    ],
    answer: `
      <strong>Lo que necesitas para acogerte a la promoción</strong> 📋
      <ul>
        <li>✅ Ser <strong>socio del Club Carrefour</strong> (gratuito).</li>
        <li>✅ Tener un <strong>contrato de luz y/o gas con Iberdrola</strong>.</li>
        <li>✅ <strong>Vincular ambos</strong> en carrefour.es/iberdrola.</li>
      </ul>
      Con eso ya empiezas a acumular en tu Cheque Ahorro Carrefour.
    `
  },
  {
    id: "permanencia",
    keywords: [
      "permanencia", "compromiso", "tiempo minimo", "cuanto dura", "duracion",
      "obliga", "obligatorio", "atado", "cancelar"
    ],
    answer: `
      📄 Las tarifas de Iberdrola asociadas a esta promoción <strong>no tienen permanencia</strong>: puedes darte de baja cuando quieras sin penalización.<br><br>
      Consulta las condiciones particulares de tu tarifa en el momento de contratar.
    `
  },
  {
    id: "cups",
    keywords: ["cups", "que es cups", "donde esta cups", "encontrar cups", "numero contrato"],
    answer: `
      🔢 El <strong>CUPS</strong> es el código único de tu punto de suministro de luz o gas. Tiene esta forma: <em>ES0021000001234567AB</em>.<br><br>
      Lo encuentras en cualquier <strong>factura de tu compañía actual</strong>, normalmente en la primera página.
    `
  },
  {
    id: "tarifas",
    keywords: [
      "tarifa", "tarifas", "precio", "precios", "kwh", "kilovatio", "cuanto cuesta",
      "que tarifa", "que plan"
    ],
    answer: `
      💡 La tarifa principal de esta promoción es el <strong>Plan Online Carrefour</strong> de Iberdrola, que incluye la acumulación en tu Cheque Ahorro.<br><br>
      Hay variantes para <strong>luz</strong>, <strong>gas</strong> o <strong>ambos combinados</strong>. Los precios actualizados los puedes consultar en <a href="https://www.iberdrola.es/informacion/carrefour" target="_blank" rel="noopener">iberdrola.es/carrefour</a> o llamando al <strong>900 22 45 22</strong>.
    `
  },
  {
    id: "energia_verde",
    keywords: [
      "energia verde", "renovable", "100% verde", "sostenible", "ecologica",
      "medio ambiente", "co2", "huella"
    ],
    answer: `
      🌱 Toda la electricidad de Iberdrola es <strong>100% de origen renovable</strong>, certificada por la CNMC.<br><br>
      Así contribuyes a un consumo más sostenible mientras ahorras con tu Cheque Ahorro Carrefour.
    `
  },
  {
    id: "luz_y_gas",
    keywords: [
      "luz y gas", "ambos", "los dos", "luz gas", "gas y luz", "solo luz",
      "solo gas", "dual"
    ],
    answer: `
      Puedes acogerte a la promoción con <strong>solo luz</strong>, <strong>solo gas</strong> o <strong>ambos</strong>.<br><br>
      Si contratas la oferta combinada (luz + gas), la acumulación se aplica sobre ambos consumos. 💡🔥
    `
  },
  {
    id: "telefono",
    keywords: [
      "telefono", "llamar", "contacto", "numero", "atencion al cliente",
      "hablar con alguien", "soporte"
    ],
    answer: `
      📞 Puedes contactar con Iberdrola a través de:
      <ul>
        <li><strong>900 22 45 22</strong> · Información sobre la promoción Carrefour</li>
        <li><strong>900 100 270</strong> · Atención al cliente general (24h)</li>
        <li>🌐 <a href="https://www.iberdrola.es" target="_blank" rel="noopener">iberdrola.es</a></li>
        <li>📱 App <strong>Mi Iberdrola</strong></li>
      </ul>
    `
  },
  {
    id: "problemas",
    keywords: [
      "problema", "error", "no funciona", "no me llega", "reclamacion",
      "queja", "incidencia", "fallo"
    ],
    answer: `
      Lamento el inconveniente. 😔 Si tienes una <strong>incidencia con tu contrato o tu acumulación</strong>, puedes:
      <ul>
        <li>📞 Llamar al <strong>900 100 270</strong> (atención al cliente 24h).</li>
        <li>📱 Gestionarlo desde la app <strong>Mi Iberdrola</strong>.</li>
        <li>🏬 Acercarte al stand de Iberdrola en tu Carrefour.</li>
      </ul>
    `
  },
  {
    id: "donde_stand",
    keywords: [
      "donde estais", "donde os encuentro", "tienda", "stand", "centro carrefour",
      "donde hay", "ubicacion", "hipermercado"
    ],
    answer: `
      🏬 Encontrarás stands de Iberdrola en <strong>hipermercados y supermercados Carrefour</strong> de toda España.<br><br>
      Para localizar el más cercano, consulta <a href="https://www.carrefour.es/tiendas" target="_blank" rel="noopener">carrefour.es/tiendas</a>.
    `
  },
  {
    id: "datos",
    keywords: [
      "proteccion de datos", "mis datos", "privacidad", "rgpd", "que pasa con mis datos",
      "datos personales", "seguro"
    ],
    answer: `
      🔒 Tus datos están protegidos conforme al <strong>RGPD</strong> y la LOPDGDD.<br><br>
      Iberdrola y Carrefour solo usan tu información para gestionar la promoción y los servicios contratados. Puedes consultar la política completa en <a href="https://www.iberdrola.es/politica-privacidad" target="_blank" rel="noopener">iberdrola.es/politica-privacidad</a>.
    `
  },
  {
    id: "cancelar",
    keywords: ["cancelar", "darme baja", "baja", "anular", "rescindir", "salir", "dejar"],
    answer: `
      📤 Puedes darte de baja en cualquier momento:
      <ul>
        <li>📞 Llamando al <strong>900 100 270</strong>.</li>
        <li>📱 Desde la app <strong>Mi Iberdrola</strong>.</li>
        <li>✍️ Por escrito a través del formulario en iberdrola.es.</li>
      </ul>
      Las tarifas de esta promoción <strong>no tienen permanencia</strong>.
    `
  },
  {
    id: "saludo",
    keywords: [
      "hola", "buenas", "buenos dias", "buenas tardes", "buenas noches", "hey",
      "ey", "que tal", "saludos"
    ],
    answer: `
      ¡Hola! 👋 Soy el asistente de la alianza <strong>Iberdrola × Carrefour</strong>.<br><br>
      Puedo ayudarte con la <strong>promoción</strong>, cómo <strong>hacerte socio del Club</strong>, cómo <strong>vincular tu contrato</strong> o cuánto puedes <strong>ahorrar</strong>.<br><br>
      ¿Qué te gustaría saber?
    `
  },
  {
    id: "gracias",
    keywords: ["gracias", "muchas gracias", "thanks", "thank you", "te lo agradezco"],
    answer: `¡A ti! 😊 Si tienes más preguntas, aquí estaré.`
  },
  {
    id: "despedida",
    keywords: ["adios", "hasta luego", "chao", "bye", "hasta pronto", "nos vemos"],
    answer: `¡Hasta pronto! 👋 No olvides vincular tu Club Carrefour con tu contrato Iberdrola para empezar a ahorrar.`
  },
  {
    id: "quien_eres",
    keywords: [
      "quien eres", "que eres", "eres una ia", "eres un robot", "eres humano",
      "eres real", "como te llamas", "tu nombre"
    ],
    answer: `
      🤖 Soy el <strong>Asistente Virtual</strong> de la alianza Iberdrola × Carrefour.<br><br>
      Estoy aquí para resolver tus dudas sobre la promoción y ayudarte a empezar a ahorrar con tu energía. ¿En qué puedo ayudarte?
    `
  },
  {
    id: "ayuda",
    keywords: [
      "ayuda", "ayudame", "que puedes hacer", "que sabes", "que puedo preguntarte",
      "help", "opciones"
    ],
    answer: `
      Puedo ayudarte con temas como:
      <ul>
        <li>💚 <strong>La alianza Iberdrola × Carrefour</strong></li>
        <li>🛒 Cómo <strong>hacerte socio del Club Carrefour</strong></li>
        <li>🔗 Cómo <strong>vincular tu contrato</strong></li>
        <li>💰 Cuánto puedes <strong>ahorrar</strong></li>
        <li>🎁 La <strong>tarjeta regalo</strong></li>
        <li>⚡ <strong>Contratar</strong> luz o gas</li>
        <li>📞 <strong>Contacto y atención al cliente</strong></li>
      </ul>
      Pregúntame lo que quieras.
    `
  },
  {
    id: "broma",
    keywords: ["chiste", "cuentame un chiste", "broma", "hazme reir", "eres gracioso"],
    answer: `
      😄 No soy muy bueno con los chistes, pero te dejo uno fácil:<br><br>
      <em>— ¿Qué le dice una bombilla a otra?</em><br>
      <em>— Te echo de menos cuando te apagas.</em> 💡<br><br>
      Vale, mejor sigamos con la promoción. 😅
    `
  }
];

// ---------- Mensajes de bienvenida según botón ----------
const intentWelcomeMessages = {
  que_es: `
    ¡Genial que quieras conocer la alianza! 💚<br><br>
    <strong>Iberdrola × Carrefour</strong> es una promoción que te permite <strong>ahorrar en tu compra</strong> mientras pagas tu factura de luz o gas. Estas son las ventajas principales:
    <ul>
      <li>💰 Hasta un <strong>6% de acumulación</strong> en tu Cheque Ahorro Carrefour.</li>
      <li>🎁 <strong>Tarjeta regalo Carrefour</strong> al contratar.</li>
      <li>⚡ Energía <strong>100% verde certificada</strong>.</li>
    </ul>
    ¿Quieres saber más sobre algún punto en concreto?
  `,
  contratar: `
    ¡Perfecto! Vamos a contratar. ⚡<br><br>
    Para acogerte a la promoción <strong>Iberdrola × Carrefour</strong> tienes tres opciones:
    <ul>
      <li>🌐 Online en <a href="https://www.iberdrola.es/informacion/carrefour" target="_blank" rel="noopener">iberdrola.es/carrefour</a>.</li>
      <li>📞 Llamando al <strong>900 22 45 22</strong>.</li>
      <li>🏬 En el <strong>stand Iberdrola</strong> de tu Carrefour más cercano.</li>
    </ul>
    Ten a mano tu <strong>DNI, IBAN y una factura reciente</strong> (o el CUPS de tu suministro). ¿Te ayudo con algo más?
  `,
  dudas: `
    Claro, pregúntame lo que quieras. 💬<br><br>
    Puedo ayudarte con la <strong>promoción</strong>, el <strong>Club Carrefour</strong>, la <strong>vinculación</strong>, la <strong>tarjeta regalo</strong>, los <strong>plazos</strong>, las <strong>tarifas</strong>, los <strong>teléfonos de contacto</strong> y mucho más.<br><br>
    Escribe tu pregunta o usa los botones de abajo para empezar.
  `
};

const defaultWelcomeMessage = `
  ¡Hola! 👋 Soy el asistente virtual de la alianza <strong>Iberdrola × Carrefour</strong>.<br><br>
  Estoy aquí para resolver tus dudas sobre la promoción. ¿En qué puedo ayudarte?
`;

// Mensaje de respaldo
const fallbackMessage = `
  🤔 Lo siento, no he entendido tu pregunta.<br><br>
  Soy una demo, así que solo respondo a temas relacionados con la <strong>alianza Iberdrola × Carrefour</strong>. Prueba a preguntarme sobre:
  <ul>
    <li>De qué trata la colaboración</li>
    <li>Cómo hacerte socio del Club Carrefour</li>
    <li>Cómo vincular tu contrato</li>
    <li>Cuánto puedes ahorrar</li>
  </ul>
  También puedes escribir <strong>"ayuda"</strong> para ver todos los temas.
`;

// ---------- Utilidades ----------
function normalize(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

function findAnswer(userText) {
  const text = normalize(userText);
  let bestMatch = null;
  let bestScore = 0;

  for (const entry of knowledgeBase) {
    for (const keyword of entry.keywords) {
      if (text.includes(keyword)) {
        const score = keyword.length;
        if (score > bestScore) {
          bestScore = score;
          bestMatch = entry;
        }
      }
    }
  }

  return bestMatch ? bestMatch.answer : fallbackMessage;
}

// ---------- Elementos del DOM ----------
const welcomeScreen = document.getElementById("welcome-screen");
const chatWrapper = document.getElementById("chat-wrapper");
const messagesEl = document.getElementById("messages");
const inputEl = document.getElementById("user-input");
const formEl = document.getElementById("input-bar");
const shortcutsEl = document.getElementById("shortcuts");
const backBtn = document.getElementById("back-btn");

// ---------- Renderizado ----------
function addMessage(html, sender = "bot") {
  const msg = document.createElement("div");
  msg.className = `message ${sender}`;
  msg.innerHTML = html;
  messagesEl.appendChild(msg);
  messagesEl.scrollTop = messagesEl.scrollHeight;
}

function showTyping() {
  const typing = document.createElement("div");
  typing.className = "typing";
  typing.id = "typing-indicator";
  typing.innerHTML = "<span></span><span></span><span></span>";
  messagesEl.appendChild(typing);
  messagesEl.scrollTop = messagesEl.scrollHeight;
}

function hideTyping() {
  const t = document.getElementById("typing-indicator");
  if (t) t.remove();
}

function botReply(userText) {
  showTyping();
  setTimeout(() => {
    hideTyping();
    addMessage(findAnswer(userText), "bot");
  }, 700 + Math.random() * 400);
}

// ---------- Navegación entre pantallas ----------
function showChat(intent = null) {
  welcomeScreen.hidden = true;
  chatWrapper.hidden = false;
  messagesEl.innerHTML = ""; // limpia mensajes previos

  // Muestra el mensaje de bienvenida correspondiente al botón pulsado
  const welcomeMsg = intent && intentWelcomeMessages[intent]
    ? intentWelcomeMessages[intent]
    : defaultWelcomeMessage;

  showTyping();
  setTimeout(() => {
    hideTyping();
    addMessage(welcomeMsg, "bot");
    inputEl.focus();
  }, 600);
}

function showWelcome() {
  chatWrapper.hidden = true;
  welcomeScreen.hidden = false;
}

// ---------- Eventos: pantalla de bienvenida ----------
document.querySelectorAll(".welcome-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const intent = btn.dataset.intent;
    showChat(intent);
  });
});

// ---------- Eventos: chat ----------
formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = inputEl.value.trim();
  if (!text) return;
  addMessage(text, "user");
  inputEl.value = "";
  botReply(text);
});

shortcutsEl.addEventListener("click", (e) => {
  const btn = e.target.closest(".shortcut");
  if (!btn) return;
  const key = btn.dataset.key;
  const text = btn.textContent.trim();
  addMessage(text, "user");
  const entry = knowledgeBase.find((k) => k.id === key);
  showTyping();
  setTimeout(() => {
    hideTyping();
    addMessage(entry ? entry.answer : fallbackMessage, "bot");
  }, 700);
});

backBtn.addEventListener("click", showWelcome);
