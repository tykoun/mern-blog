import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
class Article extends Component {
    render() {
        return (
            <div>
                <h1 className='sm:text-4xl text-2xl font-bold my-6 text-gray-900'>This is an Article</h1>
            </div>
        );
    }
}

export default Article;