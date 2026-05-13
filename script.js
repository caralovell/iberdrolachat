/* ============================================================
   Chatbot demo · Iberdrola × Carrefour
   Versión ampliada con procedimiento detallado y más dudas.
   ============================================================ */

// ---------- Enlaces oficiales centralizados ----------
const LINKS = {
  promo: "https://www.iberdrola.es/informacion/carrefour",
  vincular: "https://www.carrefour.es/iberdrola",
  iberdrola: "https://www.iberdrola.es",
  carrefour: "https://www.carrefour.es",
  tiendas: "https://www.carrefour.es/tiendas",
  privacidad: "https://www.iberdrola.es/politica-privacidad",
  appClub: "https://www.carrefour.es/club"
};

// Recuerda el último tema respondido por el bot (para "sí", "más", etc.)
let lastTopic = null;

// ---------- Base de conocimiento ----------
const knowledgeBase = [

  // ============ PROCEDIMIENTO COMPLETO ============
  {
    id: "procedimiento",
    keywords: [
      "procedimiento", "como funciona", "pasos", "paso a paso", "como se hace",
      "que tengo que hacer", "que hago", "como empiezo", "por donde empiezo",
      "guia", "explicame", "como va", "como va esto", "como va la promocion",
      "que tengo que hacer primero"
    ],
    answer: `
      <strong>Cómo funciona la promoción, paso a paso</strong> 📝<br><br>

      <strong>1️⃣ Hazte socio del Club Carrefour</strong> (gratis)<br>
      Descárgate la app Mi Club Carrefour o date de alta en cualquier hipermercado. Recibirás tu número de socio.<br><br>

      <strong>2️⃣ Contrata la luz o el gas con Iberdrola</strong><br>
      Elige el <em>Plan Online Carrefour</em> desde <a href="${LINKS.promo}" target="_blank" rel="noopener">iberdrola.es/carrefour</a>, llamando al 900 22 45 22 o en el stand del Carrefour.<br><br>

      <strong>3️⃣ Vincula los dos contratos</strong><br>
      Entra en <a href="${LINKS.vincular}" target="_blank" rel="noopener">carrefour.es/iberdrola</a>, introduce tu número de socio del Club y los datos de tu contrato de Iberdrola.<br><br>

      <strong>4️⃣ Empieza a ahorrar automáticamente</strong> 💰<br>
      Cada vez que pagues tu factura, se acumulará <strong>hasta un 6%</strong> en tu Cheque Ahorro Carrefour. Sin hacer nada más.<br><br>

      ¿Quieres que te detalle alguno de los pasos?
    `
  },
  {
    id: "paso1_socio",
    keywords: [
      "paso 1", "primer paso", "primero", "empezar", "como me apunto",
      "como me hago socio", "alta club", "hacerme socio"
    ],
    answer: `
      <strong>Paso 1: Hazte socio del Club Carrefour</strong> 🛒<br><br>
      Es <strong>gratis</strong> y tienes dos formas:<br>
      <ul>
        <li>📱 Desde la <strong>app Mi Club Carrefour</strong> (Android e iOS).</li>
        <li>🏬 En el <strong>punto de atención al cliente</strong> de cualquier hipermercado Carrefour.</li>
      </ul>
      Cuando termines tendrás tu <strong>número de socio</strong> (lo necesitarás en el paso 3 para vincular).<br><br>
      Más info: <a href="${LINKS.appClub}" target="_blank" rel="noopener">carrefour.es/club</a>
    `
  },
  {
    id: "paso2_contratar",
    keywords: [
      "paso 2", "segundo paso", "como contrato", "contratar luz",
      "contratar gas", "darme alta iberdrola", "como contratar"
    ],
    answer: `
      <strong>Paso 2: Contrata con Iberdrola</strong> ⚡<br><br>
      Elige la opción que prefieras:<br>
      <ul>
        <li>🌐 Online: <a href="${LINKS.promo}" target="_blank" rel="noopener">iberdrola.es/carrefour</a></li>
        <li>📞 Teléfono: <strong>900 22 45 22</strong></li>
        <li>🏬 En el <strong>stand de Iberdrola</strong> dentro del Carrefour</li>
      </ul>
      <strong>Lo que necesitas tener a mano:</strong><br>
      <ul>
        <li>🪪 DNI</li>
        <li>🏦 IBAN (para domiciliar la factura)</li>
        <li>📄 Factura reciente o el CUPS de tu suministro actual</li>
      </ul>
      No tienes que llamar a tu compañía actual: <strong>Iberdrola gestiona el cambio</strong> por ti.
    `
  },
  {
    id: "paso3_vincular",
    keywords: [
      "paso 3", "tercer paso", "como vinculo", "vincular contratos",
      "vincular cuentas", "unir", "asociar", "enlazar"
    ],
    answer: `
      <strong>Paso 3: Vincula los dos contratos</strong> 🔗<br><br>
      Ve a <a href="${LINKS.vincular}" target="_blank" rel="noopener">carrefour.es/iberdrola</a> e introduce:<br>
      <ul>
        <li>1️⃣ Tu <strong>número de socio del Club Carrefour</strong></li>
        <li>2️⃣ El <strong>CUPS o número de contrato de Iberdrola</strong></li>
        <li>3️⃣ Confirmas la vinculación</li>
      </ul>
      A partir de ese momento, <strong>todo es automático</strong>. No tienes que hacer nada más cada mes: la acumulación se carga sola en tu Cheque Ahorro Carrefour.
    `
  },
  {
    id: "paso4_ahorro",
    keywords: [
      "paso 4", "cuarto paso", "cuando ahorro", "cuando empiezo a ahorrar",
      "cuando se aplica", "cuando se ve"
    ],
    answer: `
      <strong>Paso 4: Empieza a ahorrar</strong> 💰<br><br>
      Una vez vinculados los contratos, <strong>cada vez que pagues tu factura</strong> de luz o gas, se acumulará automáticamente <strong>hasta un 6%</strong> en tu <strong>Cheque Ahorro Carrefour</strong>.<br><br>
      Lo puedes consultar:<br>
      <ul>
        <li>📱 En la <strong>app Mi Club Carrefour</strong></li>
        <li>🧾 En el <strong>ticket de tu próxima compra</strong> en Carrefour</li>
      </ul>
      Ese cheque se canjea en cualquier centro Carrefour: hipermercados, supermercados, gasolineras y la web.
    `
  },

  // ============ DUDAS FRECUENTES ============
  {
    id: "es_gratis",
    keywords: [
      "es gratis", "cuesta", "tiene coste", "tengo que pagar", "pagar algo",
      "tiene comisiones", "es de pago", "pago extra"
    ],
    answer: `
      ✅ <strong>Sí, la promoción es totalmente gratuita</strong>.<br><br>
      No tienes que pagar nada extra por:<br>
      <ul>
        <li>🛒 Hacerte socio del Club Carrefour</li>
        <li>🔗 Vincular tu contrato</li>
        <li>💳 Recibir el Cheque Ahorro</li>
      </ul>
      Solo pagas tu factura normal de luz o gas, y a cambio acumulas <strong>hasta un 6%</strong> en Cheque Ahorro Carrefour.
    `
  },
  {
    id: "ya_soy_cliente",
    keywords: [
      "ya soy cliente", "ya tengo iberdrola", "ya estoy con iberdrola",
      "ya soy de iberdrola", "soy cliente", "ya tengo contrato"
    ],
    answer: `
      ¡Perfecto, mejor todavía! 👌<br><br>
      Si <strong>ya tienes luz o gas con Iberdrola</strong>, no necesitas cambiar nada. Solo tienes que:<br>
      <ul>
        <li>1️⃣ Hacerte socio del <strong>Club Carrefour</strong> (si aún no lo eres).</li>
        <li>2️⃣ Entrar en <a href="${LINKS.vincular}" target="_blank" rel="noopener">carrefour.es/iberdrola</a> y <strong>vincular ambos contratos</strong>.</li>
      </ul>
      Comprueba en tu factura actual que tienes el <strong>Plan Online Carrefour</strong>. Si no, puedes cambiarte a esta tarifa llamando al <strong>900 22 45 22</strong>.
    `
  },
  {
    id: "ya_soy_socio",
    keywords: [
      "ya soy socio", "ya tengo club", "ya soy del club", "ya tengo la tarjeta club"
    ],
    answer: `
      ¡Perfecto! Ya tienes la mitad hecha. 😊<br><br>
      Solo te quedan dos pasos:<br>
      <ul>
        <li>1️⃣ <strong>Contrata la luz o el gas con Iberdrola</strong> en <a href="${LINKS.promo}" target="_blank" rel="noopener">iberdrola.es/carrefour</a> o en el stand del Carrefour.</li>
        <li>2️⃣ <strong>Vincula ambos contratos</strong> en <a href="${LINKS.vincular}" target="_blank" rel="noopener">carrefour.es/iberdrola</a> con tu número de socio.</li>
      </ul>
      Y empezarás a acumular en tu Cheque Ahorro automáticamente. 💰
    `
  },
  {
    id: "suben_precio",
    keywords: [
      "suben precio", "sube precio", "me suben", "precio fijo", "precio variable",
      "cambia precio", "encarece", "engaño"
    ],
    answer: `
      🔒 La tarifa <strong>Plan Online Carrefour</strong> de Iberdrola se mantiene durante el periodo contratado según las condiciones que aceptes.<br><br>
      Como cualquier tarifa de luz/gas, está sujeta a posibles revisiones legales o de mercado, pero <strong>Iberdrola siempre te avisa con antelación</strong> de cualquier cambio.<br><br>
      Recuerda que <strong>no hay permanencia</strong>: puedes irte cuando quieras sin penalización.<br><br>
      Consulta los precios actualizados en <a href="${LINKS.promo}" target="_blank" rel="noopener">iberdrola.es/carrefour</a>.
    `
  },
  {
    id: "permanencia",
    keywords: [
      "permanencia", "compromiso", "tiempo minimo", "cuanto dura",
      "obliga", "obligatorio", "atado", "amarrado", "puedo dejarlo",
      "puedo cancelar"
    ],
    answer: `
      📄 La tarifa de esta promoción <strong>no tiene permanencia</strong>.<br><br>
      Puedes darte de baja cuando quieras sin penalización:<br>
      <ul>
        <li>📞 Llamando al <strong>900 100 270</strong></li>
        <li>📱 Desde la app <strong>Mi Iberdrola</strong></li>
      </ul>
    `
  },
  {
    id: "cambio_banco",
    keywords: [
      "cambiar banco", "cambiar cuenta", "domiciliar", "domiciliacion",
      "cuenta bancaria", "iban", "tengo que cambiar banco"
    ],
    answer: `
      🏦 <strong>No tienes que cambiar de banco</strong>.<br><br>
      Solo necesitas un <strong>IBAN</strong> (de cualquier banco español) donde quieras que se domicilien las facturas de Iberdrola. La domiciliación es gratuita y se gestiona en el momento de contratar.
    `
  },
  {
    id: "corte_luz",
    keywords: [
      "me cortan", "cortan la luz", "queda sin luz", "se queda sin luz",
      "interrupcion", "cambio de compañia", "el cambio", "transicion"
    ],
    answer: `
      ⚡ <strong>No, no te quedas sin luz ni un solo minuto</strong>.<br><br>
      El cambio de compañía es 100% administrativo: <strong>Iberdrola se encarga de todo</strong> con tu compañía actual. Tarda entre 15 y 21 días, y durante ese tiempo tienes el suministro como siempre.
    `
  },
  {
    id: "donde_se_aplica",
    keywords: [
      "que comunidades", "donde aplica", "donde funciona", "en mi ciudad",
      "donde puedo", "valido en", "disponible en"
    ],
    answer: `
      🌍 La promoción <strong>Iberdrola × Carrefour</strong> está disponible en <strong>toda España peninsular y Baleares</strong>, en cualquier hogar con suministro de luz y/o gas.<br><br>
      Para localizar el Carrefour más cercano con stand de Iberdrola: <a href="${LINKS.tiendas}" target="_blank" rel="noopener">carrefour.es/tiendas</a>.
    `
  },
  {
    id: "alquiler",
    keywords: [
      "alquiler", "vivo de alquiler", "soy inquilino", "casa alquilada",
      "no es mi casa", "piso alquilado"
    ],
    answer: `
      🏠 <strong>Sí, puedes contratar la promoción aunque vivas de alquiler</strong>.<br><br>
      Solo necesitas que el contrato de suministro esté <strong>a tu nombre</strong> (o cambiarlo a tu nombre con un titular previo).<br><br>
      Si tienes dudas con el cambio de titularidad, te lo gestionan en el stand del Carrefour o llamando al <strong>900 22 45 22</strong>.
    `
  },

  // ============ AHORRO Y TARJETA REGALO ============
  {
    id: "ahorro",
    keywords: [
      "cuanto ahorro", "ahorro", "ahorrar", "porcentaje", "acumulacion",
      "cuanto acumulo", "cheque ahorro", "cheque", "descuento", "rebaja",
      "cuanto me devuelven"
    ],
    answer: `
      💰 <strong>Hasta un 6% de acumulación</strong> en tu Cheque Ahorro Carrefour por el consumo de tu factura de luz y gas.<br><br>
      Ejemplo orientativo: si pagas <strong>100€</strong> de factura, acumulas hasta <strong>6€</strong> en cheque para gastar en Carrefour.<br><br>
      Es <strong>automático</strong>: cada vez que pagas tu factura, se carga la acumulación. Sin papeles, sin reclamarlo, sin esperar.<br><br>
      Más detalles en <a href="${LINKS.promo}" target="_blank" rel="noopener">iberdrola.es/carrefour</a>.
    `
  },
  {
    id: "tarjeta_regalo",
    keywords: [
      "tarjeta regalo", "regalo", "cheque regalo", "tarjeta", "bono", "vale",
      "que regalo me dan"
    ],
    answer: `
      🎁 Al contratar dentro de la promoción recibes una <strong>tarjeta regalo Carrefour</strong> para gastar en cualquier centro Carrefour.<br><br>
      <strong>Cómo te llega:</strong><br>
      <ul>
        <li>📧 De forma <strong>digital a tu correo electrónico</strong>.</li>
        <li>⏱️ Se <strong>activa a los 15 días</strong> de haber contratado.</li>
      </ul>
      Consulta el <strong>importe vigente</strong> en <a href="${LINKS.promo}" target="_blank" rel="noopener">iberdrola.es/carrefour</a>.
    `
  },
  {
    id: "donde_canjear",
    keywords: [
      "donde canjear", "donde gastar", "donde uso", "donde usar", "canjear",
      "gastar cheque", "usar cheque", "donde se gasta", "donde lo puedo gastar"
    ],
    answer: `
      Tu Cheque Ahorro y tu tarjeta regalo Carrefour se pueden gastar en:<br>
      <ul>
        <li>🏬 <strong>Hipermercados y supermercados Carrefour</strong></li>
        <li>⛽ <strong>Gasolineras Carrefour</strong></li>
        <li>🌐 <strong>Carrefour.es</strong> (compra online)</li>
        <li>🛍️ Tiendas <strong>Carrefour Market y Express</strong></li>
      </ul>
      Encuentra tu Carrefour más cercano: <a href="${LINKS.tiendas}" target="_blank" rel="noopener">carrefour.es/tiendas</a>.
    `
  },
  {
    id: "caduca",
    keywords: [
      "caduca", "caducidad", "vence", "expira", "cuanto tiempo",
      "tiempo limite", "validez", "fecha limite"
    ],
    answer: `
      📅 Tanto el <strong>Cheque Ahorro</strong> como la <strong>tarjeta regalo</strong> tienen una fecha de validez.<br><br>
      La fecha exacta la verás en tu app <strong>Mi Club Carrefour</strong> o en la propia tarjeta. Como referencia, suelen ser válidos durante varios meses desde su emisión.<br><br>
      Te recomendamos usarlos pronto en cualquier centro Carrefour para no perderlos.
    `
  },

  // ============ CONTRATACIÓN Y REQUISITOS ============
  {
    id: "contratar",
    keywords: [
      "contratar", "como contrato", "darme alta luz", "alta luz", "alta gas",
      "darme alta iberdrola", "cambiarme", "cambiar compañia",
      "quiero contratar"
    ],
    answer: `
      <strong>Contratar la luz o el gas con Iberdrola</strong> ⚡<br><br>
      Tienes tres opciones:<br>
      <ul>
        <li>🌐 Online: <a href="${LINKS.promo}" target="_blank" rel="noopener">iberdrola.es/carrefour</a></li>
        <li>📞 Teléfono: <strong>900 22 45 22</strong></li>
        <li>🏬 Stand de Iberdrola en tu Carrefour</li>
      </ul>
      Necesitas: <strong>DNI, IBAN y una factura reciente</strong> (o el CUPS).
    `
  },
  {
    id: "requisitos",
    keywords: [
      "requisitos", "necesito", "que necesito", "documentacion", "que pide",
      "papeles", "documentos", "que hace falta", "que hay que tener"
    ],
    answer: `
      <strong>Requisitos para acogerte a la promoción</strong> 📋<br>
      <ul>
        <li>✅ Ser <strong>socio del Club Carrefour</strong> (gratuito).</li>
        <li>✅ Tener un <strong>contrato de luz y/o gas con Iberdrola</strong>.</li>
        <li>✅ <strong>Vincular ambos</strong> en <a href="${LINKS.vincular}" target="_blank" rel="noopener">carrefour.es/iberdrola</a>.</li>
      </ul>
      Documentos: <strong>DNI, IBAN y una factura reciente</strong> de tu suministro.
    `
  },
  {
    id: "cups",
    keywords: [
      "cups", "que es cups", "donde esta cups", "encontrar cups",
      "numero contrato", "como saber mi cups"
    ],
    answer: `
      🔢 El <strong>CUPS</strong> es el código único de tu punto de suministro. Tiene esta forma:<br>
      <em>ES0021000001234567AB</em><br><br>
      Lo encuentras en cualquier <strong>factura de tu compañía actual</strong>, normalmente en la primera página, junto a los datos del titular.
    `
  },
  {
    id: "tarifas",
    keywords: [
      "tarifa", "tarifas", "precio", "precios", "kwh", "kilovatio",
      "cuanto cuesta", "que tarifa", "que plan"
    ],
    answer: `
      💡 La tarifa de esta promoción es el <strong>Plan Online Carrefour</strong> de Iberdrola.<br><br>
      Está disponible para:<br>
      <ul>
        <li>💡 <strong>Solo luz</strong></li>
        <li>🔥 <strong>Solo gas</strong></li>
        <li>⚡ <strong>Luz + gas combinado</strong></li>
      </ul>
      Consulta los precios actualizados en <a href="${LINKS.promo}" target="_blank" rel="noopener">iberdrola.es/carrefour</a> o llamando al <strong>900 22 45 22</strong>.
    `
  },
  {
    id: "luz_y_gas",
    keywords: [
      "luz y gas", "ambos", "los dos", "luz gas", "gas y luz", "solo luz",
      "solo gas", "dual"
    ],
    answer: `
      Puedes acogerte con <strong>solo luz</strong>, <strong>solo gas</strong> o <strong>ambos combinados</strong>.<br><br>
      Si contratas la oferta combinada (luz + gas), la acumulación se aplica sobre <strong>ambos consumos</strong>. 💡🔥<br><br>
      Detalles en <a href="${LINKS.promo}" target="_blank" rel="noopener">iberdrola.es/carrefour</a>.
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
      Reduces tu huella de carbono mientras ahorras con tu Cheque Ahorro Carrefour. Doble beneficio. 💚
    `
  },

  // ============ TIEMPOS Y PLAZOS ============
  {
    id: "cuando_recibo",
    keywords: [
      "cuando recibo", "cuando llega", "cuanto tarda", "plazo", "cuando me dan",
      "cuando lo cobro", "cuando se activa", "cuando empieza"
    ],
    answer: `
      ⏱️ <strong>Plazos habituales:</strong><br><br>
      <strong>Cambio de compañía:</strong> entre 15 y 21 días desde que firmas. No te quedas sin suministro en ningún momento.<br><br>
      <strong>Tarjeta regalo:</strong> llega por email en pocos días y se <strong>activa a los 15 días</strong> de contratar.<br><br>
      <strong>Acumulación en Cheque Ahorro:</strong> se carga automáticamente cada vez que pagas una factura, una vez vinculados los contratos.
    `
  },

  // ============ CONTACTO Y SOPORTE ============
  {
    id: "telefono",
    keywords: [
      "telefono", "llamar", "contacto", "numero", "atencion al cliente",
      "hablar con alguien", "soporte"
    ],
    answer: `
      📞 <strong>Teléfonos de Iberdrola:</strong><br>
      <ul>
        <li><strong>900 22 45 22</strong> · Información sobre la promoción Carrefour</li>
        <li><strong>900 100 270</strong> · Atención al cliente general (24h)</li>
      </ul>
      🌐 <a href="${LINKS.iberdrola}" target="_blank" rel="noopener">iberdrola.es</a><br>
      📱 App <strong>Mi Iberdrola</strong>
    `
  },
  {
    id: "problemas",
    keywords: [
      "problema", "error", "no funciona", "no me llega", "reclamacion",
      "queja", "incidencia", "fallo", "no me carga"
    ],
    answer: `
      Lamento el inconveniente. 😔<br><br>
      Si tienes una <strong>incidencia con tu contrato o tu acumulación</strong>:<br>
      <ul>
        <li>📞 <strong>900 100 270</strong> (atención al cliente 24h)</li>
        <li>📱 App <strong>Mi Iberdrola</strong></li>
        <li>🏬 Acércate al <strong>stand de Iberdrola</strong> en tu Carrefour</li>
      </ul>
    `
  },
  {
    id: "donde_stand",
    keywords: [
      "donde estais", "donde os encuentro", "tienda", "stand", "centro carrefour",
      "donde hay", "ubicacion", "hipermercado", "carrefour cerca"
    ],
    answer: `
      🏬 Encontrarás stands de Iberdrola en <strong>hipermercados y supermercados Carrefour</strong> de toda España.<br><br>
      Localizador oficial: <a href="${LINKS.tiendas}" target="_blank" rel="noopener">carrefour.es/tiendas</a>
    `
  },
  {
    id: "datos",
    keywords: [
      "proteccion de datos", "mis datos", "privacidad", "rgpd",
      "que pasa con mis datos", "datos personales", "seguro"
    ],
    answer: `
      🔒 Tus datos están protegidos conforme al <strong>RGPD</strong> y la LOPDGDD.<br><br>
      Iberdrola y Carrefour solo usan tu información para gestionar la promoción y los servicios contratados.<br><br>
      Política completa: <a href="${LINKS.privacidad}" target="_blank" rel="noopener">iberdrola.es/politica-privacidad</a>
    `
  },
  {
    id: "cancelar",
    keywords: [
      "cancelar", "darme baja", "baja", "anular", "rescindir", "salir", "dejar"
    ],
    answer: `
      📤 Puedes darte de baja cuando quieras (<strong>sin permanencia</strong>):<br>
      <ul>
        <li>📞 <strong>900 100 270</strong></li>
        <li>📱 App <strong>Mi Iberdrola</strong></li>
        <li>✍️ Formulario en <a href="${LINKS.iberdrola}" target="_blank" rel="noopener">iberdrola.es</a></li>
      </ul>
    `
  },

  // ============ ENLACES DIRECTOS ============
  {
    id: "web_iberdrola",
    keywords: [
      "web iberdrola", "pagina iberdrola", "enlace iberdrola", "url iberdrola",
      "donde info", "mas info"
    ],
    answer: `
      🌐 Aquí tienes los enlaces oficiales:<br>
      <ul>
        <li><a href="${LINKS.promo}" target="_blank" rel="noopener">Promoción Iberdrola × Carrefour</a></li>
        <li><a href="${LINKS.vincular}" target="_blank" rel="noopener">Vincular contratos (Carrefour)</a></li>
        <li><a href="${LINKS.iberdrola}" target="_blank" rel="noopener">Iberdrola</a></li>
        <li><a href="${LINKS.carrefour}" target="_blank" rel="noopener">Carrefour</a></li>
      </ul>
    `
  },

  // ============ CONVERSACIONAL ============
  {
    id: "saludo",
    keywords: [
      "hola", "buenas", "buenos dias", "buenas tardes", "buenas noches", "hey",
      "ey", "que tal", "saludos"
    ],
    answer: `
      ¡Hola! 👋 Soy el asistente virtual de la alianza <strong>Iberdrola × Carrefour</strong>.<br><br>
      Puedo guiarte por el <strong>procedimiento paso a paso</strong>, resolverte cualquier <strong>duda</strong> y darte los <strong>enlaces oficiales</strong>.<br><br>
      Prueba a escribir cosas como <em>"cómo funciona"</em>, <em>"cuánto ahorro"</em> o <em>"qué necesito".</em>
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
      Te puedo guiar paso a paso por la promoción, resolverte dudas y darte los enlaces oficiales. ¿En qué te ayudo?
    `
  },
  {
    id: "ayuda",
    keywords: [
      "ayuda", "ayudame", "que puedes hacer", "que sabes",
      "que puedo preguntarte", "help", "opciones", "menu"
    ],
    answer: `
      Puedo ayudarte con:<br>
      <ul>
        <li>📝 <strong>El procedimiento paso a paso</strong> ("cómo funciona")</li>
        <li>💚 <strong>Sobre la promoción</strong> (qué es, ventajas, energía verde)</li>
        <li>🛒 <strong>Hacerse socio del Club Carrefour</strong></li>
        <li>⚡ <strong>Contratar luz o gas con Iberdrola</strong></li>
        <li>🔗 <strong>Vincular tu contrato</strong></li>
        <li>💰 <strong>Ahorro, Cheque Ahorro, tarjeta regalo</strong></li>
        <li>📋 <strong>Requisitos, CUPS, tarifas, plazos</strong></li>
        <li>❓ <strong>Dudas:</strong> ¿es gratis?, ¿hay permanencia?, ¿me suben el precio?, ¿me cortan la luz?, etc.</li>
        <li>📞 <strong>Contacto y atención al cliente</strong></li>
        <li>🌐 <strong>Enlaces oficiales</strong></li>
      </ul>
      Pregúntame lo que quieras.
    `
  }
];

// ---------- Mensajes de bienvenida según botón ----------
const intentWelcomeMessages = {
  que_es: `
    ¡Genial! Te cuento qué es la alianza <strong>Iberdrola × Carrefour</strong> 💚<br><br>
    Es una promoción que te permite <strong>ahorrar en tu compra</strong> mientras pagas tu factura de luz o gas:
    <ul>
      <li>💰 Hasta un <strong>6% de acumulación</strong> en tu Cheque Ahorro Carrefour.</li>
      <li>🎁 <strong>Tarjeta regalo Carrefour</strong> al contratar.</li>
      <li>⚡ Energía <strong>100% verde certificada</strong>.</li>
    </ul>
    Si quieres, te puedo explicar <em>"cómo funciona paso a paso"</em>, o pregúntame cualquier duda.<br><br>
    🌐 Web oficial: <a href="${LINKS.promo}" target="_blank" rel="noopener">iberdrola.es/carrefour</a>
  `,
  contratar: `
    ¡Perfecto, vamos a contratar! ⚡<br><br>
    Tienes tres opciones para acogerte a la promoción:
    <ul>
      <li>🌐 Online: <a href="${LINKS.promo}" target="_blank" rel="noopener">iberdrola.es/carrefour</a></li>
      <li>📞 Teléfono: <strong>900 22 45 22</strong></li>
      <li>🏬 <strong>Stand de Iberdrola</strong> en tu Carrefour</li>
    </ul>
    Necesitas: <strong>DNI, IBAN y una factura reciente</strong> (o el CUPS).<br><br>
    ¿Quieres que te explique los <em>pasos</em>, los <em>requisitos</em> o cualquier otra duda?
  `,
  dudas: `
    Claro, pregúntame lo que quieras 💬<br><br>
    Algunas dudas frecuentes que puedo resolverte:
    <ul>
      <li>¿Es gratis la promoción?</li>
      <li>¿Hay permanencia?</li>
      <li>¿Me suben el precio luego?</li>
      <li>¿Me cortan la luz al cambiarme?</li>
      <li>¿Y si ya soy cliente de Iberdrola?</li>
      <li>¿Funciona si vivo de alquiler?</li>
      <li>¿Cuánto tarda en activarse?</li>
    </ul>
    Escribe tu pregunta abajo o pulsa uno de los botones rápidos.
  `
};

const defaultWelcomeMessage = `
  ¡Hola! 👋 Soy el asistente virtual de la alianza <strong>Iberdrola × Carrefour</strong>.<br><br>
  Estoy aquí para resolver tus dudas. ¿En qué puedo ayudarte?
`;

// Mensaje de respaldo (cuando no se reconoce la pregunta)
const fallbackMessage = `
  🤔 No estoy seguro de haber entendido tu pregunta.<br><br>
  Prueba a preguntarme cosas como:
  <ul>
    <li><em>"¿Cómo funciona la promoción?"</em></li>
    <li><em>"¿Cuánto puedo ahorrar?"</em></li>
    <li><em>"¿Qué necesito para contratar?"</em></li>
    <li><em>"¿Hay permanencia?"</em></li>
    <li><em>"¿Cómo vinculo mi contrato?"</em></li>
  </ul>
  O escribe <strong>"ayuda"</strong> para ver todos los temas que conozco.
`;

// ---------- Respuestas cortas (sí/no/más) ----------
const SHORT_REPLIES = {
  yes: ["si", "sí", "claro", "ok", "okay", "okey", "vale", "venga", "porfa", "por favor", "si por favor", "claro que si", "yes", "yep", "dale", "perfecto", "me interesa"],
  no: ["no", "nop", "no gracias", "ahora no", "mejor no", "paso", "nah"],
  more: ["mas", "más", "mas info", "más info", "cuentame mas", "cuéntame más", "dime mas", "dime más", "explicame mas", "explícame más", "amplia", "amplía", "sigue"]
};

// Sugerencias contextuales según el último tema
const FOLLOWUP_SUGGESTIONS = {
  procedimiento: `
    ¡Genial! ¿Sobre qué paso quieres que profundice? Puedes preguntarme:
    <ul>
      <li><em>"Paso 1: hacerme socio"</em></li>
      <li><em>"Paso 2: contratar"</em></li>
      <li><em>"Paso 3: vincular"</em></li>
      <li><em>"Paso 4: empezar a ahorrar"</em></li>
    </ul>
  `,
  colaboracion: `
    Perfecto. ¿Qué te interesa saber más?
    <ul>
      <li><em>"¿Cómo funciona paso a paso?"</em></li>
      <li><em>"¿Cuánto puedo ahorrar?"</em></li>
      <li><em>"¿Qué necesito para contratar?"</em></li>
    </ul>
  `,
  contratar: `
    Vale, te oriento. ¿Qué quieres saber?
    <ul>
      <li><em>"¿Qué requisitos necesito?"</em></li>
      <li><em>"¿Qué es el CUPS?"</em></li>
      <li><em>"¿Hay permanencia?"</em></li>
      <li><em>"¿Me cortan la luz al cambiarme?"</em></li>
    </ul>
  `,
  ahorro: `
    Si quieres saber más sobre el ahorro, puedes preguntarme:
    <ul>
      <li><em>"¿Dónde puedo gastar el cheque?"</em></li>
      <li><em>"¿Cuándo se aplica?"</em></li>
      <li><em>"¿Caduca el cheque?"</em></li>
    </ul>
  `,
  tarjeta_regalo: `
    Cuéntame qué te interesa:
    <ul>
      <li><em>"¿Cuándo recibo la tarjeta?"</em></li>
      <li><em>"¿Dónde la puedo gastar?"</em></li>
      <li><em>"¿Caduca?"</em></li>
    </ul>
  `,
  paso1_socio: `
    Bien. ¿Sigues con el siguiente paso?
    <ul>
      <li><em>"Paso 2: contratar con Iberdrola"</em></li>
      <li><em>"¿Cómo vinculo los contratos?"</em></li>
    </ul>
  `,
  paso3_vincular: `
    Perfecto. ¿Quieres saber más sobre:
    <ul>
      <li><em>"¿Cuándo empiezo a ahorrar?"</em></li>
      <li><em>"¿Dónde gasto el cheque?"</em></li>
    </ul>
  `
};

const genericYesMessage = `
  ¡Vale! ¿Sobre qué te gustaría saber más? Puedes preguntarme por:
  <ul>
    <li>📝 <em>"Cómo funciona la promoción"</em></li>
    <li>💰 <em>"Cuánto puedo ahorrar"</em></li>
    <li>⚡ <em>"Cómo contratar"</em></li>
    <li>🎁 <em>"La tarjeta regalo"</em></li>
  </ul>
  O escribe <strong>"ayuda"</strong> para ver todos los temas.
`;

const genericNoMessage = `
  Sin problema. 😊 Si surge alguna otra duda, escríbeme cuando quieras. Recuerda que también puedes preguntar <strong>"ayuda"</strong> para ver todos los temas.
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

  // --- 1. Detectar respuestas cortas (sí/no/más) ---
  const isYes = SHORT_REPLIES.yes.includes(text);
  const isNo = SHORT_REPLIES.no.includes(text);
  const isMore = SHORT_REPLIES.more.includes(text);

  if (isYes || isMore) {
    if (lastTopic && FOLLOWUP_SUGGESTIONS[lastTopic]) {
      return FOLLOWUP_SUGGESTIONS[lastTopic];
    }
    return genericYesMessage;
  }

  if (isNo) {
    return genericNoMessage;
  }

  // --- 2. Búsqueda normal en la base de conocimiento ---
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

  if (bestMatch) {
    lastTopic = bestMatch.id;
    return bestMatch.answer;
  }

  return fallbackMessage;
}

// ---------- DOM ----------
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
  messagesEl.innerHTML = "";

  // Mapear cada intent a un topic relacionado de la base de conocimiento
  const intentToTopic = {
    que_es: "colaboracion",
    contratar: "contratar",
    dudas: null
  };
  lastTopic = intentToTopic[intent] || null;

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
  lastTopic = null;
}

// ---------- Eventos ----------
document.querySelectorAll(".welcome-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const intent = btn.dataset.intent;
    showChat(intent);
  });
});

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
  if (entry) lastTopic = entry.id;
  showTyping();
  setTimeout(() => {
    hideTyping();
    addMessage(entry ? entry.answer : fallbackMessage, "bot");
  }, 700);
});

backBtn.addEventListener("click", showWelcome);
