import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
// Porta alterada para 3010
const PORT = process.env.PORT || 3010;

// Configuração para obter o diretório atual usando ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware para decodificar JSON e formulários
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rota principal para servir o teu ficheiro HTML "Emergência"
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'emergencia.html'));
});

// Inicialização do servidor para o projeto condogest
app.listen(PORT, () => {
    console.log(`\n▶ Servidor do Condogest ativo em: http://localhost:${PORT}`);
});
