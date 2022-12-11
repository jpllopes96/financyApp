import React from "react";
import { PickerView } from './styles'
import { Picker as PickerRN } from '@react-native-picker/picker';


export default function Picker({onChange, tipo}){
    return(
        <PickerView>
            <PickerRN style={{ width:'100%'}} onValueChange={(valor)=> onChange(valor)} selectedValue={tipo}>
                <PickerRN.Item label="Receita" value="receita" />
                <PickerRN.Item label="Despesa" value="despesa" />
            </PickerRN>
        </PickerView>
    )

}