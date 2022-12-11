import React, { useContext } from 'react';
import { Container, Nome, NewLink, NewText, Logout, LogoutText} from './styles'
import { AuthContext } from '../../contexts/auth';
import { useNavigation } from '@react-navigation/native';


export default function Perfil() {
    const navigation = useNavigation();
    const {user, signOut} = useContext(AuthContext)
 return (
   <Container>
        <Nome>{ user && user.nome}</Nome>
        <NewLink onPress= { () => navigation.navigate("Faturamento") }>
            <NewText>Registrar Despesas</NewText>
        </NewLink>
        <Logout onPress={ () =>  signOut() }>
            <LogoutText>Sair</LogoutText>
        </Logout>
    </Container>
  );
}