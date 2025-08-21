import {useEffect, useState} from "react";

const Chat = () => {

    const [msg, setMsg] = useState<string>('')

    const msgHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { target: { value } } = e;
        setMsg(value);
    }

    const resetHandler = () => {
        setMsg('')
    }

    useEffect(() => {
        console.log(msg)
    }, [msg])

    return (
        <div className='chat'>
            <div className='chat-input-box'>
                <div className='msg-wrap'>
                    <textarea
                        value={msg}
                        onChange={msgHandler}
                        placeholder='텍스트 입력'
                        className='txt'
                    />
                </div>
                <div className='util-wrap'>
                    <button
                        type='button'
                        className='btn'
                        onClick={() => {
                            console.log('clicked', msg)
                            resetHandler()
                        }}
                    >전송</button>
                </div>
            </div>

        </div>
    );
};

export default Chat;