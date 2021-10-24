import React, { Component } from 'react'
import MessageChild from './MessageChild';

export class Message extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <div style={ styles.divFontSizeInPercent }>
                    Hello {this.props.name}, {this.props.message}
                </div>
                <br />
                <MessageChild num={this.props.num} />
            </div >
        );
    }
}

const styles = {
    divFontSize: {
        fontSize: 50,
    },
    divFontSizeInPercent: {
        fontSize: "200%",
    }
}

export default Message;
