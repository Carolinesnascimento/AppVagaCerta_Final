import React, {useState, useEffect} from 'react';
import { Feather } from '@expo/vector-icons';
import api from '../../services/api';
import { 
    Wrapper,
    Container, 
    Header, 
    HeaderButtonContainer, 
    ButtonIcon, 
    ButtonText,
    ContentContainer,
    Title,
    Description
} from '../Details/styles';
import Logo from '../../components/Logo';
import theme from '../../theme';
import { Button } from '../../components/Button';

import {VagaProps} from '../../utils/Types';
import { Linking } from 'react-native';

export default function Details({route, navigation }) {

    const [id, setId] = useState(route.params.id);
    const [vaga, setVaga] = useState<VagaProps>(null);


    const fetchVaga = async () => {

        //console.log(id);

        try{

            const response = await api.get(`/api/vagas/${id}`);
            const data = response.data;

            setVaga({
                id: data.id,
                title: data.titulo,
                date: data.dataCadastro,
                description: data.descricao,
                phone: data.telefone,
                company: data.empresa,
                status:data.status,
            })

        }catch(error){
            console.log(error);
        }
    };

    useEffect(()=>{
        fetchVaga();
    },[id]);


    const handleContactPress = () => {
        if (vaga?.phone) {
            const whatsappUrl = `https://wa.me/${vaga.phone}`;
            Linking.openURL(whatsappUrl)
                .catch((err) => console.error("Erro ao abrir o WhatsApp:", err));
        } else {
            console.error("Número de telefone não disponível.");
        }
    };

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

            {vaga ? (
                <Container>
                    <ContentContainer>
                        <Title>{"Título: "+vaga.title}</Title>
                        <Description>{"Descrição: "+vaga.description}</Description>
                        <Description>{"Status: "+vaga.status}</Description>
                    </ContentContainer>

                    {vaga.status == 'aberta' ? (
                    <Button 
                        title="Entrar em contato" 
                        noSpacing={true} 
                        variant='primary'
                        onPress={handleContactPress} // Chama a função para redirecionar
                        />
                    ) : (
                        <Title>Vaga encerrada.</Title>
                    )}



                </Container>
            ) : (
                <Title>Vaga não foi encontrada.</Title>
            )}
            
        </Wrapper>
    );
}
