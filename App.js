/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';

import {SafeAreaView, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Lottie from 'lottie-react-native';
import SignIn from './src/components/auth/signIn';
import {SignUp} from './src/components/auth/signUp';
import DeshBoard from './src/components/deshboard';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isSignIn, setisSignIn] = useState(true);
  setTimeout(() => setIsLoading(false), 4000);
  const onPageChange = value => {
    if (value === 'signUp') setisSignIn(false);
    else setisSignIn(true);
  };
  if (isLoading) {
    return (
      <Lottie
        source={require('./assets/loadings/97930-loading.json')}
        autoPlay
        loop
      />
    );
  }
  return (
    <SafeAreaView>
      <LinearGradient
        colors={['#fff', '#f7f3fb', '#e8ddf2']}
        style={styles.linearGradient}>
        <DeshBoard />
        {/* {isSignIn ? (
          <SignIn onPageChange={onPageChange} />
        ) : (
          <SignUp onPageChange={onPageChange} />
        )} */}
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    width: '100%',
    height: '100%',
  },
});
export default App;
