import React from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from "../actions/index";
import {Link} from 'react-router-dom';


class PostsIndex extends React.Component {
    static mapStateToProps({posts}) {
        return {posts};
    }

    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        const posts = Object.keys(this.props.posts || {});

        return posts.map(id =>
            <li className={"list-group-item"} key={id}>
                <Link to={`/posts/${id}`}>
                    `"{this.props.posts[id].title}": {id}`
                </Link>
            </li>
        )
    }

    render() {
        return (
            <div className={'row'}>
                <div className={'text-xs-right'}>
                    <Link className={'btn btn-primary'} to={'/posts/new'}>
                        Add a Post
                    </Link>
                </div>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}

export default connect(PostsIndex.mapStateToProps, {fetchPosts})(PostsIndex);
