import React from "react";
import { createDrawerNavigator, DrawerItemList } from "@react-navigation/drawer";
import { Text } from "react-native";

import Home from '../pages/Home'
import New from "../pages/New";
import Perfil from "../pages/Perfil";
import CustomDrawer from "../components/CustomDrawer";

const AppDrawer = createDrawerNavigator();

function AppRoutes(){
    return(
        <AppDrawer.Navigator
            drawerContent={(props)=> <CustomDrawer {...props}/>
            }
            screenOptions={{
                headerMode: 'none',
                headerStyle: {
                    backgroundColor: '#131313',
                    shadowColor: '#131313',
                  },
                  headerTintColor: '#fff',
                    headerTitleStyle: {
                    fontWeight: 'bold',

                },
                drawerActiveTintColor: '#fff',
                drawerActiveBackgroundColor: '#00b94a',
                drawerInactiveTintColor: '#ddd',
                drawerInactiveBackgroundColor: '#000',
                drawerStyle: {backgroundColor: '#171717'},
                drawerItemStyle: { marginVertical: 5},
                drawerLabelStyle: { fontWeight: 'bold'},
                         
            }}
        >
            <AppDrawer.Screen name="Home" component={Home} options={{ headerTitle:'Home'}} />
            <AppDrawer.Screen name="Faturamento" component={New} options={{ headerTitle:'Movimentações', title:'Movimentações'}} />
            <AppDrawer.Screen name="Perfil" component={Perfil} options={{ headerTitle:'Perfil'}}/>
            
        </AppDrawer.Navigator>
    )
}

export default AppRoutes;