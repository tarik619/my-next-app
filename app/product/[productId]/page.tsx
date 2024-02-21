import Container from "@/app/components/Container";
import ProductDetails from "./ProductDetails";
import { product } from "@/app/utils/product";
import ListRating from "./ListRating";

interface IParams {
  productId?: string;
}

const Product = ({ params }: { params: IParams }) => {
  return (
    <div className="p-8">
      <Container>
        <ProductDetails product={product} />
        <div className="flex flex-col mt-20 gap-4">
          <div className="">add rating</div>
          <ListRating product={product} />
        </div>
      </Container>
    </div>
  );
};

export default Product;
