//Lembrar que em React os componentes devem começar com letras maiúsculas
import { Alert } from "react-bootstrap";
import { ContextoUsuario } from "../contexto/Contexto";
import { useContext } from "react";
export default function Cabecalho(props){
    const [usuario, setUsuario] = useContext(ContextoUsuario);
    return (
        <div>
            <Alert variant="light" className="text-center"><h1>{props?.texto}</h1><span className="text-end">Usuário: {usuario?.nome}</span></Alert>
        </div>
    );
}