import { Platform } from "react-native";
import styled from "styled-components";

export const Container = styled.TouchableOpacity`

    background-color: ${Platform.OS === 'ios' ? '#00000066' : 'transparent'};
    position: absolute;
    justify-content: flex-end;
    width: 100%;
    height: 100%;
`;

export const Header = styled.View`
    padding: 16px;
    justify-content: flex-end;
    align-items: flex-end;
    width: 100%;
    background-color: #fff;
    border-bottom-width: 1px;
    border-color: gray;

`;