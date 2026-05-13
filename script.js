/* ============================================================
   Chatbot demo · Iberdrola × Carrefour
   Sin IA: respuestas basadas en palabras clave.
   ============================================================ */

// ---------- Base de conocimiento ----------
// Cada entrada define keywords (en minúscula, sin acentos) y una respuesta HTML.
const knowledgeBase = [
  {
    id: "colaboracion",
    keywords: [
      "colaboracion", "alianza", "acuerdo", "que es", "de que trata",
      "en que consiste", "iberdrola carrefour", "carrefour iberdrola",
      "promocion", "promo", "oferta"
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
      "como ser socio", "hacerme del club"
    ],
    answer: `
      <strong>Hacerte socio del Club Carrefour es gratis y rápido</strong> 🛒<br><br>
      Tienes dos opciones:
      <ul>
        <li>📱 Desde la <strong>app Mi Club Carrefour</strong> (Android e iOS).</li>
        <li>🏬 En el <strong>punto de atención al cliente</strong> de cualquier hipermercado Carrefour.</li>
      </ul>
      Al darte de alta recibirás tu <strong>tarjeta digital del Club</strong>, que necesitarás para vincularla con tu contrato de Iberdrola y empezar a acumular ahorro.
    `
  },
  {
    id: "vincular",
    keywords: [
      "vincular", "vinculacion", "enlazar", "unir", "asociar", "conectar contrato",
      "como vinculo", "vincular contrato", "vincular cuentas"
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
      "cuanto acumulo", "cheque ahorro", "cheque", "descuento"
    ],
    answer: `
      <strong>Acumulación en tu Cheque Ahorro Carrefour</strong> 💰<br><br>
      Con la tarifa Plan Online Carrefour de Iberdrola puedes acumular <strong>hasta un 6%</strong> del consumo de tu factura de luz y gas en tu Cheque Ahorro.<br><br>
      Ese cheque se canjea en <strong>cualquier centro Carrefour</strong> (híper, súper, gasolineras o web).
    `
  },
  {
    id: "tarjeta_regalo",
    keywords: [
      "tarjeta regalo", "regalo", "cheque regalo", "tarjeta", "bono"
    ],
    answer: `
      <strong>Tarjeta regalo Carrefour</strong> 🎁<br><br>
      Si contratas la luz o el gas con Iberdrola dentro de la promoción, recibirás una <strong>tarjeta regalo Carrefour</strong> para gastar en cualquier centro Carrefour.<br><br>
      La tarjeta te llegará <strong>de forma digital a tu correo electrónico</strong> y se activará en unos días.
    `
  },
  {
    id: "contratar",
    keywords: [
      "contratar", "como contrato", "darme alta luz", "alta luz", "alta gas",
      "darme alta iberdrola", "cambiarme", "cambiar compañia"
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
      "papeles"
    ],
    answer: `
      <strong>Lo que necesitas para acogerte a la promoción</strong> 📋<br>
      <ul>
        <li>✅ Ser <strong>socio del Club Carrefour</strong> (gratuito).</li>
        <li>✅ Tener un <strong>contrato de luz y/o gas con Iberdrola</strong>.</li>
        <li>✅ <strong>Vincular ambos</strong> en carrefour.es/iberdrola.</li>
      </ul>
      Con eso ya empiezas a acumular en tu Cheque Ahorro Carrefour.
    `
  },
  {
    id: "energia_verde",
    keywords: [
      "energia verde", "renovable", "100% verde", "sostenible", "ecologica",
      "medio ambiente"
    ],
    answer: `
      🌱 Toda la electricidad de Iberdrola es <strong>100% de origen renovable</strong>, certificada por la CNMC.<br><br>
      Así contribuyes a un consumo más sostenible mientras ahorras con tu Cheque Ahorro Carrefour.
    `
  },
  {
    id: "saludo",
    keywords: [
      "hola", "buenas", "buenos dias", "buenas tardes", "buenas noches", "hey",
      "ey", "que tal"
    ],
    answer: `
      ¡Hola! 👋 Soy el asistente de la alianza <strong>Iberdrola × Carrefour</strong>.<br><br>
      Puedo ayudarte con la <strong>promoción</strong>, cómo <strong>hacerte socio del Club</strong>, cómo <strong>vincular tu contrato</strong> o cuánto puedes <strong>ahorrar</strong>.<br><br>
      ¿Qué te gustaría saber?
    `
  },
  {
    id: "gracias",
    keywords: ["gracias", "muchas gracias", "thanks", "thank you"],
    answer: `¡A ti! 😊 Si tienes más preguntas, aquí estaré.`
  },
  {
    id: "despedida",
    keywords: ["adios", "hasta luego", "chao", "bye", "hasta pronto"],
    answer: `¡Hasta pronto! 👋 No olvides vincular tu Club Carrefour con tu contrato Iberdrola para empezar a ahorrar.`
  }
];

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
`;

// Mensaje de bienvenida
const welcomeMessage = `
  ¡Hola! 👋 Soy el asistente virtual de la alianza <strong>Iberdrola × Carrefour</strong>.<br><br>
  Estoy aquí para resolver tus dudas sobre la promoción. ¿En qué puedo ayudarte?
`;

// ---------- Utilidades ----------

// Normaliza texto: minúsculas y sin tildes
function normalize(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

// Encuentra la mejor coincidencia en la base de conocimiento
function findAnswer(userText) {
  const text = normalize(userText);
  let bestMatch = null;
  let bestScore = 0;

  for (const entry of knowledgeBase) {
    for (const keyword of entry.keywords) {
      if (text.includes(keyword)) {
        // Cuanto más larga la keyword coincidente, más específica es
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

// ---------- Renderizado ----------
const messagesEl = document.getElementById("messages");
const inputEl = document.getElementById("user-input");
const formEl = document.getElementById("input-bar");
const shortcutsEl = document.getElementById("shortcuts");

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
  // Simulamos un pequeño retardo para que parezca natural
  setTimeout(() => {
    hideTyping();
    const answer = findAnswer(userText);
    addMessage(answer, "bot");
  }, 700 + Math.random() * 400);
}

// ---------- Eventos ----------
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
  // Buscar directamente la entrada por id para una respuesta exacta
  const entry = knowledgeBase.find((k) => k.id === key);
  showTyping();
  setTimeout(() => {
    hideTyping();
    addMessage(entry ? entry.answer : fallbackMessage, "bot");
  }, 700);
});

// ---------- Inicialización ----------
window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => addMessage(welcomeMessage, "bot"), 300);
});
