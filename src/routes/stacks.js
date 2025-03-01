import {createNativeStackNavigator} from "@react-navigation/native-stack";

import Adicionar from "../screens/Adicionar";
import CadastrarProfessor from "../screens/CadastrarProfessor";
import CadastrarSetor from "../screens/CadastrarSetor";
import Espaco from "../screens/Espaco";
import stacksEspaco from "./stacksEspaco"
import ConsultarProfessores from "../screens/ConsultarProfessores"

const Stack = createNativeStackNavigator();

export default function Stacks(){
    return (
            <Stack.Navigator screenOptions={{title:"", headerBackTitleVisible: false, headerShown: false,}}>
                <Stack.Screen
                name="Adicionar"
                component={Adicionar}>
            </Stack.Screen>

            <Stack.Screen
                name="CadastrarProfessor"
                component={CadastrarProfessor}>
            </Stack.Screen>

            <Stack.Screen
                name="CadastrarSetor"
                component={CadastrarSetor}>
            </Stack.Screen>

            <Stack.Screen
                name="Espaco"
                component={Espaco}>
            </Stack.Screen>

            <Stack.Screen
                name="stacksEspaco"
                component={stacksEspaco}>
            </Stack.Screen>

            <Stack.Screen 
                name="ConsultarProfessores"
                component={ConsultarProfessores}>
            </Stack.Screen>

            </Stack.Navigator>
    )
}

