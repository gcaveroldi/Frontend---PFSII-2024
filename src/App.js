import TelaCadastroCliente from "./componentes/telas/telaCadastroCliente";
import TelaMenu from './componentes/telas/telaMenu';
import Tela404 from "./componentes/telas/tela404";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TelaCadastroTreino from "./componentes/telas/telaCadastroTreino";
import TelaLogin from "./componentes/telas/telaLogin";
import { useState } from "react";
import { ContextoUsuario } from "./componentes/contexto/Contexto";



function App() {
  const [usuario, setUsuario] = useState({
    nome: "",
    logado: false
  });

  if (!usuario.logado) {

    return <ContextoUsuario.Provider value={[usuario, setUsuario]}>
              <TelaLogin />;
            </ContextoUsuario.Provider>;
  }
  else {
    return (
      <div className="App">
        <ContextoUsuario.Provider value={[usuario, setUsuario]}>
          <BrowserRouter>
            <Routes>
              {
                
              }
              <Route path="/clientes" element={<TelaCadastroCliente />} />
              <Route path="/treino" element={<TelaCadastroTreino />} />
              <Route path="/" element={<TelaMenu />} />
              <Route path="*" element={<Tela404 />} />
            </Routes>
          </BrowserRouter>
        </ContextoUsuario.Provider>
      </div>
    );
  }
}

export default App;
