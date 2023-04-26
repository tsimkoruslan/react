import {Component} from "react";

class Post extends Component {
    render() {

        const {id, title, body} = this.props.post

        return(
            <div>
                <div>
                    id:{id} title:{title}
                    <div>body:{body}</div>
                </div>
            </div>
        )
    }
}

export default Post