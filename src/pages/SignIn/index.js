import {React, useState, useContext} from 'react';
import { Platform, ActivityIndicator } from 'react-native';
import { Background, Container, Logo, AreaInput, Input, SubmitButton, SubmitText, LinkText, Link} from './styles'
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contexts/auth';

export default function SignIn() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn, loadAuth } = useContext(AuthContext);

  function handleLogin(){
    signIn(email, password)
  }

 return (
   <Background>
        <Container
          behavior={Platform.OS === 'ios' ? 'paddding' : '' }
          enabled
        >
            <Logo source={require('../../assets/Logo.png')} />
            <AreaInput>
              <Input placeholder="email" autoCorrect={false} autoCapitalize="none" 
                value={email}
                onChangeText={ (texto)=> setEmail(texto) }
                />
            </AreaInput>
            <AreaInput>
              <Input placeholder="Senha" autoCorrect={false} autoCapitalize="none"
                value={password}
                onChangeText={ (texto)=> setPassword(texto) }
                secureTextEntry={true}
              />
            </AreaInput>
            <SubmitButton onPress={ handleLogin }>
              {
                loadAuth ? (
                  <ActivityIndicator size={20} color="#FFF"/>
                ):(
                   <SubmitText>Acessar</SubmitText>
                )
              }
              
            </SubmitButton>
            <Link onPress ={ ()=> navigation.navigate('SignUp')}>
              <LinkText>Criar uma conta!</LinkText>
            </Link>
          </Container>
        
    </Background>
  );
}