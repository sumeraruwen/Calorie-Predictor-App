// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

// import React from 'react';
// import type {PropsWithChildren} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

// function App(): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.tsx</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;

import { NavigationContainer } from '@react-navigation/native';
import React,{useEffect} from 'react'
import {View,Text,StyleSheet,Button, Linking, ScrollView, RefreshControl, FlatList, SectionList, TextInput, ImageBackground, Image} from 'react-native'
import { SafeAreaView } from 'react-native';
import SplashScreen from 'react-native-splash-screen'

import SignInScreen from './src/views/SignIn';
import SignUpScreen1 from './src/views/SignUpScreen1';
import SignUpScreen2 from './src/views/SignUpScreen2';
import WelcomeScreen from './src/views/WelcomeScreen';


import StackNavigation from './src/navigation/StackNavigation';

//import RNGestureHandlerModule from 'react-native-gesture-handler';
//import 'react-native-gesture-handler';


//const Drawer = createDrawerNavigator();


const App =() =>{
  useEffect(() => {
   
      SplashScreen.hide();
    
  }, []);
 
 
  return(
    
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', }}>
  

      <NavigationContainer>

        <StackNavigation/>
        {/* <Drawer.Navigator>
          <Drawer.Screen name="SignIn" component="SignIn"/>
          <Drawer.Screen name="TicketScreen" component="TicketScreen"/>
        </Drawer.Navigator> */}
        {/* <DrawerNavigator/> */}

        {/* <WelcomeScreen/> */}
        {/* <SignInScreen/> */}
        {/* <SignUpScreen1/> */}
        {/* <SignUpScreen2/> */}
        
    
      </NavigationContainer>
    
    </SafeAreaView>

   

  );
};

const styles =StyleSheet.create({
  body:{
    flex:1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  
  },


});

 export default App;
