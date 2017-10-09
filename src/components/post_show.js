import React from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import {deletePost} from "../actions/index";

// import {fetchPost} from "../actions/index";

class PostShow extends React.Component {

    onDeleteClick() {
        const {id} = this.props.match.params;

        this.props.deletePost(id, _ => this.props.history.push('/'));
    }

    render() {
        const {post} = this.props;

        if (post) {
            return (
                <div>
                    <Link to={'/'}>Back to index</Link>
                    <button className={'btn btn-danger pull-xs-right'}
                            onClick={_ => this.onDeleteClick()}>
                        Delete
                    </button>
                    <h3>{post.title}</h3>
                    <h6>Categories: {post.categories}</h6>
                    <p>{post.content}</p>
                </div>
            );
        }

        return <div>Loading...</div>;
    }
}

function mapState2Props(state, ownProps) {
    const {id} = ownProps.match.params;

    return {post: state.posts[id]};
}

export default connect(mapState2Props, {deletePost})(PostShow);
