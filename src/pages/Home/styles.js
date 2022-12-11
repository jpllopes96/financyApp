import styled from "styled-components";

export const Background = styled.View `
    flex: 1;
    background-color: #131313;
`;

export const Container = styled.View `
    margin-left: 15px;
    margin-bottom: 35px;
`;

export const Nome = styled.Text `
    font-size: 20px;
    margin-top: 10px;
    color: #fff;
    font-style: italic;
`;

export const Saldo = styled.Text `
    margin-top: 15px;
    font-size: 30px;
    color: #fff;
    font-weight: bold;
`;

export const Title = styled.Text `
    margin-left: 5px;
    color:#00b94a;
    margin-bottom: 10px;
    font-size: 17px;
    margin-left: 15px;
`


export const List = styled.FlatList.attrs({
    marginHorizontal: 15
}) `
   padding-top: 15px;
   background-color: #fff;
   border-top-left-radius: 15px;
   border-top-right-radius: 15px;
   margin-left: 8px;
   margin-right: 8px;
`

export const Area = styled.View`
    flex-direction: row;
    margin-left:15px;
    align-items: baseline;
`;

export const SemDados = styled.View`
    padding-top: 15px;
    background-color: #fff;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    margin-left: 8px;
    margin-right: 8px;
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const SemDadosTexto = styled.Text`
    /* margin-left: 5px; */
    color:#00b94a;
    /* margin-bottom: 10px; */
    font-size: 20px;
    /* margin-left: 15px; */
    font-weight: bold;
    text-shadow: none;
`

export const Btn = styled.TouchableOpacity`
    width: 90%;
    height: 45px;
    align-items: center;
    justify-content: center;
    background-color: #131313;
    margin-top: 20px;
    border-radius: 9px;
`;

export const BtnText = styled.Text `
    color: #fff;
    font-size: 20px;

`;