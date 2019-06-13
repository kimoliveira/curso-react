import React, { Component } from "react";
import ReactHtmlParser from "react-html-parser";
import Api from "../../services/api";

export default class Product extends Component {
  state = {
    product: {}
  };

  async componentDidMount() {
    //pega o id do produto na URL
    const { id } = this.props.match.params;

    const response = await Api.get(`/products/${id}`);
    this.setState({ product: response.data.Product });

    console.log(response);
  }

  render() {
    const { product } = this.state;
    console.log(product);
    return (
      <div className="product-info">
        <h1>{product.name}</h1>
        <p>{product.description_small}</p>
        <div className="payment">
          {ReactHtmlParser(product.payment_option_html)}
        </div>
      </div>
    );
  }
}
