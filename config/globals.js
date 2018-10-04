// ==============================
// Port
// ==============================
process.env.PORT =  process.env.PORT || 3000;

// ==============================
// Entorno
// ==============================
process.env.NODE_ENV = process.env.NODE_ENV  || 'dev';

// ==============================
// Base de datos
// ==============================
process.env.URLDB = (process.env.NODE_ENV === 'dev') ?  'mongodb://localhost:' : 'mongodb://';


// ==============================
// Vencimiento del token
// ==============================
// 60 seg * 60 min * 24 horas * 30 dias
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

// ==============================
// Pagineo
// ==============================
process.env.DESDE = 0;
process.env.LIMITE = 5;
