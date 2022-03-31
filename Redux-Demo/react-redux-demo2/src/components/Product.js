import React from "react";
import { connect } from "react-redux";
import { buyProduct } from "../redux/product/productActions";
import { returnProduct } from "../redux/product/productActions";
import { reviewProduct } from "../redux/product/productActions";

const Product = (props) => {
  return (
    <div>
      <h1>Product</h1>
      <h2>Total Quantity - {props.numOfProducts}</h2>
      <h2>Review - {props.review}</h2>
      <div>
        <h4>Buy Product</h4>
        <button onClick={props.buyProduct}>Buy</button>
      </div>
      <div>
        <h4>Return Product</h4>
        <button onClick={props.returnProduct}>Return</button>
      </div>
      <div>
        <h4>Review Product</h4>
        <button onClick={() => props.reviewProduct("Good")}>Review Good</button>
        <button onClick={() => props.reviewProduct("Bad")}>Review Bad</button>
        <button onClick={() => props.reviewProduct("Average")}>
          Review Average
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfProducts: state.numOfProducts,
    review: state.review,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyProduct: () => dispatch(buyProduct()),
    returnProduct: () => dispatch(returnProduct()),
    reviewProduct: (payload) => dispatch(reviewProduct(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
