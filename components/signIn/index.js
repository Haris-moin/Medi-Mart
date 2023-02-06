/* eslint-disable no-alert */
import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const SignIn = ({onPageChange}) => {
  const buttons = {
    signIn: 'Sign In',
    singUp: 'Sign UP',
    facebook: 'Facebook',
    google: 'Google',
  };

  return (
    <View style={styles.mainContainer}>
      <LinearGradient
        colors={['#fff', '#f7f3fb', '#e8ddf2']}
        style={styles.linearGradient}>
        <Text style={styles.heading}>Sign In</Text>

        <View style={styles.formContainer}>
          <Text style={styles.labels}>Email</Text>
          <TextInput
            placeholder="Please enter your password"
            style={styles.input}
          />
          <Text style={styles.labels}>Password</Text>
          <TextInput
            placeholder="Please enter your password"
            style={styles.input}
          />

          <View style={styles.signUpContainer}>
            <Pressable
              style={styles.button}
              onPress={() => alert('Hello! I am an alert box!')}>
              <Text style={styles.text}>{buttons.signIn}</Text>
            </Pressable>
          </View>

          <View style={styles.otherButtons}>
            <Pressable
              style={styles.btn}
              onPress={() => alert('Hello! I am an alert box!')}>
              <Text style={styles.textOtherBtn}>{buttons.facebook}</Text>
            </Pressable>

            <Pressable
              style={styles.btn}
              onPress={() => alert('Hello! I am an alert box!')}>
              <Text style={styles.textOtherBtn}>{buttons.google}</Text>
            </Pressable>
          </View>

          <View style={styles.footer}>
            <Text style={styles.footerText}>Don't you have an account?</Text>
            <Text style={styles.singUp} onPress={() => onPageChange('signUp')}>
              Sign Up
            </Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};
const styles = StyleSheet.create({
  linearGradient: {
    width: '100%',
    height: '100%',
  },
  mainContainer: {
    paddingTop: 30,
  },
  singUp: {
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 10,
    color: '#3e9cff',
  },
  heading: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    color: '#a86ad9',
  },
  formContainer: {
    paddingHorizontal: 30,
    top: 10,
  },
  labels: {
    color: 'gray',
    marginTop: 20,
    fontSize: 14,
    marginBottom: 5,
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  signUpContainer: {
    marginTop: 30,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#9982ac',
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#65ab99',
    backgroundColor: 'transparent',
    width: '45%',
  },
  otherButtons: {
    marginTop: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'row',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: '#fff',
  },
  textOtherBtn: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: '#65ab99',
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
    padding: 30,
  },
  footerText: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#9982ac',
  },
});
export default SignIn;
