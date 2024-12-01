import { Image } from 'react-native';
import {useContext, useState} from 'react';

import api from '../../services/api';

import { Wrapper,Container, Form, TextContainer, TextBlack, TextLink, TextLinkContainer } from './styles';
import BGTop from '../../assets/BGTop.png';
import Logo from '../../components/Logo';
import Input from '../../components/Input';
import { Button } from '../../components/Button';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { UserContext } from '../../context/UserContext';


export default function Login({ navigation }) {

    const [emailLogin, setEmailLogin] = useState('');
    const [senhaLogin, setSenhaLogin] = useState('');

    const { id, nome, email, senha, setId, setNome, setEmail, setSenha } = useContext(UserContext);

    const handleLogin = async () => {
        try{
            const endpoint = '/api/usuarios/login';

            // Enviando a requisição para o servidor com email e senha
            const response = await api.get(endpoint, {
                params: {
                    email: emailLogin,
                    senha: senhaLogin,
                },
            });

            const user = response.data;

            // SE USUÁRIO FOR AUTENTICADO
            if(user){

                // ARMAZENAMENTO LOCAL DO USUARIO AUTENTICADO
                const jsonValue = JSON.stringify(user);
                await AsyncStorage.setItem('user', jsonValue);

                // ARMAZENAMENTO NO CONTEXTO
                setId(user.id);
                setNome(user.nome);
                setEmail(user.email);
                setSenha(user.senha);

                navigation.navigate('Auth', {screen: 'Home'});
                
            }else{
                console.log('Login falhou');
            }
            
        }catch(error){
            console.log(error);
        }
    };


    return (
        <Wrapper>
            <Image source={BGTop} />

            <Container>

                <Form>
                    <Logo />
                    <Input 
                        label='E-mail' 
                        placeholder='digite seu e-mail'
                        value={emailLogin}
                        onChangeText={setEmailLogin}
                        />
                    <Input 
                        label='Senha' 
                        placeholder='digite sua senha'
                        value={senhaLogin}
                        onChangeText={setSenhaLogin}
                        />
                    <Button 
                    title="Entrar" 
                    noSpacing={true} 
                    variant='primary'
                    onPress={handleLogin}
                    />
                    <TextContainer>
                        <TextBlack>Não tem uma conta?</TextBlack>
                        <TextLinkContainer onPress={() => navigation.navigate('FormScreen')}>
                            <TextLink>
                                    Crie agora mesmo.
                            </TextLink>
                        </TextLinkContainer>
                    </TextContainer>
                </Form>

            </Container>
        </Wrapper>
    );
}