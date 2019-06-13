import React, { Component } from "react";
import api from "../../services/api.js";
import { Link } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import "./styles.css";

export default class Main extends Component {
  state = {
    products: []
  };

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async () => {
    const response = await api.get("/products");
    this.setState({ products: response.data.Products });
    console.log(response.data.Products);
  };

  render() {
    const { products } = this.state;

    return (
      <div className="product-list">
        {products.map(product => (
          <article key={product.Product.id} className="product">
            <h3>{product.Product.name}</h3>
            <div className="product__price">
              <strong>R$:{product.Product.price}</strong>
            </div>
            <div>{ReactHtmlParser(product.Product.payment_option_html)}</div>
            <Link
              to={`/products/${product.Product.id}`}
              className="product__button"
            >
              Acessar
            </Link>
          </article>
        ))}
      </div>
    );
  }
}
