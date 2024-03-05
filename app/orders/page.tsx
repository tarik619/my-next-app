import Container from "@/app/components/Container";

import { getCurrentUser } from "@/actions/getCurrentUser";
import NullData from "@/app/components/NullData";
import getOrdersByUserId from "@/actions/getOrderByUserId";
import OrderClient from "./OrderClient";

const Orders = async () => {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return <NullData title="OOOPS! access denied" />;
  }
  const orders = await getOrdersByUserId(currentUser.id);
  if (!orders) {
    return <NullData title="OOOPS! no orders yet" />;
  }
  return (
    <div className="">
      <Container>
        <OrderClient orders={orders} />
      </Container>
    </div>
  );
};

export default Orders;
