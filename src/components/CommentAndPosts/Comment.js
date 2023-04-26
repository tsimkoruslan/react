import {Component} from "react";
import style from "./style.css"
class Comment extends Component {
    render() {
        const {id, name, email, body} = this.props.comment
        return (
            <div className={'color'}>
                <div>ID = {id}</div>
                <div>NAME = {name}</div>
                <div>EMAIL = {email}</div>
                <div>BODY = {body}</div>
            </div>
        )
    }
}

export default Comment