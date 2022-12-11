import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { Container, Tipo, IconView, TipoText, ValorText} from './styles'
import { FontAwesome5 } from '@expo/vector-icons';

export default function HistoricoList({ data, deleteItem }) {
 return (
    
        <Container>
            <Tipo> 
                <IconView tipo={data.tipo}>
                    <AntDesign 
                        name={data.tipo === 'despesa' ? 'arrowdown' : 'arrowup'}
                        size={20} 
                        color="#fff" />
                    <TipoText>{data.tipo} - {data.descricao}</TipoText>
                </IconView>
                <TouchableWithoutFeedback onPress={ ()=> deleteItem(data)}>   
                <FontAwesome5 style={{ position: 'absolute', paddingTop: 10, right: 10 }} name='trash' size={25} color='black' />
                </TouchableWithoutFeedback>
            </Tipo>
            <ValorText>
                R$ {data.valor.toFixed(2)}
            </ValorText>
        </Container>
    
  );
}