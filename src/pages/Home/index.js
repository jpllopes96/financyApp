import React, { useContext, useState, useEffect} from 'react';
import { Alert, Platform, TouchableOpacity, Text, Button} from 'react-native';
import { Background, Container, Nome, Saldo, Title, List, Area, SemDados, SemDadosTexto, Btn, BtnText} from './styles'
import { AuthContext } from '../../contexts/auth';
import HistoricoList from '../../components/HistoricoList';
import firebase from '../../services/firebaseConnection'
import { format } from 'date-fns'
import { FontAwesome } from '@expo/vector-icons';
import  DatePicker  from '../../components/DatePicker'
import { set } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();
  const { user } = useContext(AuthContext);
  const [ historico, setHistorico] = useState([])
  const [saldo, setSaldo] = useState(0)
  const [newDate, setNewDate] = useState(new Date());
  const [show, setShow] = useState(false);
  
  const uid = user && user.uid

  useEffect(()=>{
    async function loadList(){
      await firebase.database().ref('users').child(uid).on('value', (snapshot)=>{
        setSaldo(snapshot.val().saldo);
      });

      await firebase.database().ref('historico')
      .child(uid)
      .orderByChild('date').equalTo(format(newDate, 'dd/MM/yyyy'))
      .limitToLast(10).on('value',  (snapshot)=>{
        setHistorico([]);

        snapshot.forEach((childItem) =>{
          let list ={
            key: childItem.key,
            tipo: childItem.val().tipo,
            valor: childItem.val().valor,
            descricao: childItem.val().descricao,
            date: childItem.val().date
          };

          setHistorico(oldArray => [...oldArray, list].reverse())
          
        })

      })
    }


    loadList();
  }, [newDate])


  function handleDelete(data){
    Alert.alert(
      'Atenção!',
      `Você deseja excluir ${data.descricao} - Valor: ${data.valor}`,
      [
        {
          text: 'Cancelar',
          style: 'cancel'
        },
        {
          text: 'Confirmar',
          onPress: () => handleDeleteSuccess(data)
        }
      ]
    )
  }

  async function handleDeleteSuccess(data){
    await firebase.database().ref('historico')
    .child(uid).child(data.key).remove()
    .then( async()=>{
        let saldoAtual = saldo;
        data.tipo === 'despesa' ? saldoAtual += parseFloat(data.valor) : saldoAtual -= parseFloat(data.valor);
        await firebase.database().ref('users').child(uid).child('saldo').set(saldoAtual)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  function handleShowPicker(){
    setShow(true)
    
  }
  function handleClose(){
    setShow(false)
  }
  const onChange = (date) =>{
      setShow(Platform.OS === 'ios' );
      setNewDate(date);
      
  }
 async function handleUltimosDados(){
    await firebase.database().ref('historico')
    .child(uid)
    .orderByChild('date')
    .limitToLast(10).on('value',  (snapshot)=>{
      setHistorico([]);

      snapshot.forEach((childItem) =>{
        let list ={
          key: childItem.key,
          tipo: childItem.val().tipo,
          valor: childItem.val().valor,
          descricao: childItem.val().descricao,
          date: childItem.val().date
        };

        setHistorico(oldArray => [...oldArray, list].reverse())
        
      })

    })
  }
 return (
    <Background>
      <Container>
        <Nome>{user && user.nome}</Nome>
        <Saldo>R$ {saldo.toFixed(2)}</Saldo>
      </Container>
      <Area>
        <TouchableOpacity onPress={ handleShowPicker }>
        <FontAwesome name="calendar" size={30} color="#fff" />
        </TouchableOpacity>
        <Title>Ultimas Movimentacoes</Title>
      </Area>
      { historico.length > 0 ? (
        <List 
        showsVerticalScrollIndicator={false}
        data={historico}
        keyExctractor={ (item) => item.key}
        renderItem={ ({item}) => (<HistoricoList data={item} deleteItem={handleDelete}/>) }
      />
      ):
      (
        <SemDados>
          <SemDadosTexto>Não existe lançamentos na data selecionada: {format(newDate, 'dd/MM/yyyy')}</SemDadosTexto>
          <Btn onPress={ handleUltimosDados }>
            <BtnText>Últimas movimentações </BtnText>
          </Btn>

          <Btn onPress={ ()=> navigation.navigate('Faturamento') } >
            <BtnText>Adicionar Movimentação</BtnText>
          </Btn>
            
        </SemDados>
      )
      }
      
      
      
      { show && (
        <DatePicker 
          onClose = { handleClose }
          date={newDate}
          onChange = { onChange }
        />
      )}
      
    
    </Background>
  );
}