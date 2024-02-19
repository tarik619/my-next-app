interface IParams {
  productId?: string;
}

const Product = ({ params }: { params: IParams }) => {
  return <div className="">this is product page</div>;
};

export default Product;
