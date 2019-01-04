import React from 'react';
import axios from 'axios';

import { Card } from 'antd';

class ArticleDetail extends React.Component {
  state = {
    article: {}
  };

  componentDidMount() {
    const articleID = this.props.match.params.articleID;
    axios.get(`http://127.0.0.1:8000/api/${articleID}`).then(res => {
      this.setState({
        article: res.data
      });
      console.log(res.data);
    });
  }

  render() {
    const { title, content } = this.state.article;
    return (
      <Card title={title}>
        <p>{content}</p>
      </Card>
    );
  }
}

export default ArticleDetail;
