import React, { useContext } from 'react';
import { Feather } from '@expo/vector-icons';
import {
  Wrapper,
  Container,
  Header,
  HeaderButtonContainer,
  ButtonIcon,
  ButtonText,
  ContentContainer,
  Title,
} from '../Details/styles';
import Logo from '../../components/Logo';
import theme from '../../theme';
import { Button } from '../../components/Button';
import styled from 'styled-components/native';
import { UserContext } from '../../context/UserContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../services/api';


export default function Logout({ route, navigation }) {

  const { id, nome, email, senha, setId, setNome, setEmail, setSenha } = useContext(UserContext);

  const handleLogout = async () => {

    try{

        // ATUALIZA USER NO ARMAZENAMENTO LOCAL
        const jsonValue = JSON.stringify({
            "id":-1,
            "nome":"",
            "email":"",
            "senha":""
        })

        await AsyncStorage.setItem('user', jsonValue);

        // ATUALIZA O CONTEXTO
        setId(-1);
        setNome("");
        setEmail("");
        setSenha("");

        navigation.navigate('Login');

        console.log("Logout deu certo!!");

    }catch(e){
        console.error(e);
    }
}


  return (
    <Wrapper>
      <Header>
        <HeaderButtonContainer onPress={() => navigation.goBack()}>
          <ButtonIcon>
            <Feather size={16} name="chevron-left" color={theme.COLORS.BLUE} />
          </ButtonIcon>
          <ButtonText>Voltar</ButtonText>
        </HeaderButtonContainer>
        <Logo />
      </Header>

      <Container>
        <ContentContainer>
          <Title>Tem certeza que quer sair?</Title>
        </ContentContainer>

        <ButtonRow>
          <Button title="Sim" noSpacing={true} variant="primary" onPress={handleLogout} />
          <ButtonSpacing />
          <Button title="Não" noSpacing={true} variant="primary" onPress={() => navigation.goBack()} />
        </ButtonRow>
      </Container>
    </Wrapper>
  );
}


const ButtonRow = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 16px; /* Espaçamento entre o título e os botões */
`;

const ButtonSpacing = styled.View`
  width: 16px; /* Espaçamento entre os botões */
`;
