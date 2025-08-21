import { io } from 'socket.io-client'

export const socket = io('http://localhost.proxyman.io:3000', {
    // autoConnect: false,
    withCredentials: true,
    transports: ['polling'],
})