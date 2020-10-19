import io from 'socket.io-client';
import feathers from '@feathersjs/feathers';
import socketio from '@feathersjs/socketio-client';
import rest from '@feathersjs/rest-client'
import auth from '@feathersjs/authentication-client'

import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage';


const socket = io('http://localhost:3030', {
  transports: ['websocket'],
  forceNew: true
});
const client = feathers();


client.configure(rest('http://localhost:3030').axios(axios))
client.configure(socketio(socket));

client.configure(auth({
  storage: AsyncStorage
}))




export default client