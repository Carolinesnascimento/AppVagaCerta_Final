import React, { useEffect, useState, useContext } from 'react';
import { Feather } from '@expo/vector-icons';
import { 
    Wrapper,
    Container, 
    Header, 
    HeaderButtonContainer, 
    ButtonIcon, 
    ButtonText,
    ContentContainer,
} from '../Profile/styles';
import Logo from '../../components/Logo';
import theme from '../../theme';
import Input from '../../components/Input'
import { Button } from '../../components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../services/api';

import { UserContext } from '../../context/UserContext';
import { Alert } from 'react-native';



export default function Profile({navigation }) {

    // USESTATUS CRIADOS PARA VINCULAR AOS INPUTS
    const [nomeInput, setNomeInput] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [senhaInput, setSenhaInput] = useState('');

    // CONTEXT
    const { id, nome, email, senha, setId, setNome, setEmail, setSenha } = useContext(UserContext);


    // FUNCAO PARA EDITAR OS DADOS DO USUARIO AUTENTICADO QUANDO O BOTAO EH PRESSIONADO
    const handleEdit = async () => {

        try{

            // ATUALIZA USER NO ARMAZENAMENTO LOCAL
            const jsonValue = JSON.stringify({
                "id":id,
                "nome":nomeInput,
                "email":emailInput,
                "senha":senhaInput
            })

            await AsyncStorage.setItem('user', jsonValue);

            // ATUALIZA USUARIO NA API
            await api.put(`/api/usuarios/${id}`,
                {                
                    "id":id,
                    "nome":nomeInput,
                    "email":emailInput,
                    "senha":senhaInput
                }
            );

            // ATUALIZA O CONTEXTO
            setNome(nomeInput);
            setEmail(emailInput);
            setSenha(senhaInput);

            console.log("deu certo!!");

            // Exibe um alerta indicando sucesso
            Alert.alert(
                "Sucesso",
                "As informações foram atualizadas!",
                [{ text: "OK" }]
            );

        }catch(e){
            console.error(e);
        }
    }

    useEffect(()=>{
        const getData = async () => {

            try {
              //const jsonValue = await AsyncStorage.getItem('user');
              //let user =JSON.parse(jsonValue);

              // COM O ID VINDO DO CONTEXT RESGATO O USER DA API
              const response = await api.get(`/api/usuarios/${id}`);
              let user = response.data;

              setEmailInput(user.email);
              setSenhaInput(user.senha);
              setNomeInput(user.nome);

            } catch (e) {
              console.error(e);
            }
          };

          getData();
    }, []);


    return (
        <Wrapper>
            <Header>
                <HeaderButtonContainer onPress={() => navigation.goBack()}>
                    <ButtonIcon>
                        <Feather size={16} name="chevron-left" color={theme.COLORS.BLUE} />
                    </ButtonIcon>
                    <ButtonText>
                        Voltar
                    </ButtonText>
                </HeaderButtonContainer>
                <Logo />
            </Header>

            <Container>
                <ContentContainer>
                    <Input label='Nome' placeholder='digite seu nome' value={nomeInput} onChangeText={setNomeInput} />
                    <Input label='E-mail' placeholder='digite seu e-mail' value={emailInput} onChangeText={setEmailInput}/>
                    <Input label='Senha' placeholder='digite sua senha' value={senhaInput} onChangeText={setSenhaInput}/>
                </ContentContainer>

                <Button 
                    title="Salvar informações" 
                    noSpacing={true} 
                    variant='primary'
                    onPress={handleEdit}
                    />
            </Container>
        </Wrapper>
    );
}
