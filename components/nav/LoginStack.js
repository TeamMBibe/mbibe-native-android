import { StackNavigator } from 'react-navigation'
import LoginScreen from '../screens/LoginScreen'
import SignupScreen from '../screens/SignupScreen'
import ForgottenPasswordScreen from '../screens/ForgottenPasswordScreen'

// Manifest of possible screens
const LoginStack = StackNavigator({
    loginScreen: { screen: LoginScreen },
    signupScreen: { screen: SignupScreen },
    forgottenPasswordScreen: { screen: ForgottenPasswordScreen, navigationOptions: { title: 'Forgot Password' } }
}, {
    headerMode: 'float',
    navigationOptions: {
        headerStyle: {backgroundColor: '#E73536'},
        title: 'You are not logged in',
        headerTintColor: 'white'
    }
})

export default LoginStack