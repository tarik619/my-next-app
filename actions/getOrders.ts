import prisma from "@/libs/prismadb";

export default async function getPoducts() {
  try {
    const orders = await prisma.order.findMany({
      include: {
        user: true,
      },
      orderBy: {
        createdDate: "desc",
      },
    });
    return orders;
  } catch (error: any) {
    throw new Error(error);
  }
}
