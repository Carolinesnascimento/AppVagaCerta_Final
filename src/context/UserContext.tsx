import React, { createContext, useState, ReactNode } from 'react';

// Interface que define o formato do contexto
interface UserContextProps {
    id: number;
    nome: string;
    email: string;
    senha: string;
    setId: (id: number) => void;
    setNome: (nome: string) => void;
    setEmail: (email: string) => void;
    setSenha: (senha: string) => void;
}

// Criação do contexto com valores iniciais
export const UserContext = createContext<UserContextProps>({

    id: -1,
    nome: "",
    email: "",
    senha: "",
    setId: () => {},
    setNome: () => {},
    setEmail: () => {},
    setSenha: () => {}
});

// Provedor que envolve toda a aplicação
interface UserProviderProps {
    children: ReactNode;
}

// Componente que envolve a aplicação e fornece o contexto para os filhos
function UserProvider({ children }: UserProviderProps) {

    const [id, setId] = useState<number>(0);
    const [nome, setNome] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [senha, setSenha] = useState<string>("");
    
    return (
        <UserContext.Provider value={{ id, nome, email, senha, setId, setNome, setEmail, setSenha }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider;
