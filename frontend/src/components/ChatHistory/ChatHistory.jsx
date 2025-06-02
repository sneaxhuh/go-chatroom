import React, {Component} from "react";
import './ChatHistory.scss';
import Message from '../Message'

class ChatHistory extends Component {
    messagesEndRef = React.createRef();

    scrollToBottom = () => {
        this.messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    render() {
        const messages = this.props.chatHistory.map(msg => 
            <Message key={msg.timeStamp} message={msg.data}/>
        );
        
        return (
            <div className="ChatHistory">
                <h2>Chat History</h2>
                <div className="messages-container">
                    {messages}
                    <div ref={this.messagesEndRef} />
                </div>
            </div>
        );
    }
}

export default ChatHistory;