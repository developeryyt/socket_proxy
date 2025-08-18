const Chat = () => {


    return (
        <div className='chat'>
            <div className='chat-input-box'>
                <div className='msg-wrap'>
                    <textarea placeholder='텍스트 입력' className='txt' />
                </div>
                <div className='util-wrap'>
                    <button
                        type='button'
                        className='btn'
                        onClick={() => {
                            console.log('clicked')
                        }}
                    >전송</button>
                </div>
            </div>

        </div>
    );
};

export default Chat;