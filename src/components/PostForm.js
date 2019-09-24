import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const post = {
            title: this.state.title,
            body: this.state.body,
        }
        // call action
        this.props.createPost(post);
    }
    render() {
        const { title, body } = this.state;
        return (
            <div>
                <h1>Add Post</h1>
                <form action="" onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="">Title:</label>
                        <br/>
                        <input type="text" name="title" value={title} onChange={this.handleChange}/>
                    </div>
                    <br/>
                    <div>
                        <label htmlFor="">Body:</label>
                        <br/>
                        <textarea name="body" value={body} onChange={this.handleChange}/>
                    </div>
                    <br/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

PostForm.propTypes = {
    createPost: PropTypes.func.isRequired,
}

export default connect(null, { createPost })(PostForm);
