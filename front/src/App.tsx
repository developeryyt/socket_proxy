import Layout from "./layout/Layout.tsx";
import {useEffect} from "react";
import {socket} from "./socket/socket.ts";


const App = () => {

    useEffect(() => {
        socket.on('connect', () => {
            console.log('Connected to server');
            console.log('Transport:', socket.io.engine.transport.name)
        })

    }, [])

    return (
        <Layout />
    )
}

export default App
