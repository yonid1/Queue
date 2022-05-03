/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {useState, useCallback} from 'react';
import moment from 'moment';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {min} from 'moment';

function App() {
  const [date, setDate] = useState(moment().format('ll'));
  const [myDate, setMyDate] = useState();
  console.log('myDate', myDate);
  console.log(moment().format('llll'));
  const myTime = useCallback(async time => {
    const request = {
      mode: 'cors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({num: date}),
    };
    try {
      await fetch('http://10.0.2.2.:5000/myname', request).then(res =>
        res
          // .text()
          .json()
          .then(d => setMyDate(d))
          .catch(err => {
            console.log('err', err);
          }),
      );
    } catch (err) {
      console.log('error', err);
    }
  }, []);
  return (
    <Calendar
      minDate={moment(moment().format('llll'))}
      onDayPress={day => {
        // setMyDate(day);
        console.log('day', myDate);
      }}>
      {' '}
    </Calendar>
  );
}
export default App;
