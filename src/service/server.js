import io from 'socket.io-client';
const socket = io('http://localhost:8000'); // TODO: this needs to be configured properly

export const sendAction = (data) => {
  socket.emit('action', data) ;
}

export default socket;