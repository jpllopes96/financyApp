import {React, useState, useContext} from 'react';
import { ActivityIndicator, ScrollView} from 'react-native';
import { Platform } from 'react-native';
import { Background, Container, Logo, AreaInput, Input, SubmitButton, SubmitText, LinkText, Link} from '../SignIn/styles'
import { AuthContext } from '../../contexts/auth';
export default function SignIn() {
    
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signUp, loadAuth } = useContext(AuthContext)
    function handleSignUp(){
      signUp(email, password, nome)
    }
 return (
 
   <Background>
        <Container
          behavior={Platform.OS === 'ios' ? 'paddding' : '' }
          enabled
        >            
            <AreaInput>
              <Input placeholder="Nome" autoCorrect={false} autoCapitalize="none"
                value={nome}
                onChangeText={ (texto)=> setNome(texto) }
              />
            </AreaInput>
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
            <SubmitButton onPress={ handleSignUp }>
            {
                loadAuth ? (
                  <ActivityIndicator size={20} color="#FFF"/>
                ):(
                   <SubmitText>Acessar</SubmitText>
                )
              }
            </SubmitButton>
           
          </Container>
        
    </Background>
  );
}