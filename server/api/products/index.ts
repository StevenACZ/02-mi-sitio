import prisma from "~~/lib/prisma";

export default defineEventHandler(async (_event) => {
  const query = getQuery(_event);

  let limit = parseInt(query.limit as string);
  let offset = parseInt(query.offset as string);

  if (isNaN(limit) || limit <= 1) limit = 10;
  if (isNaN(offset) || offset < 0) offset = 0;

  const products = await prisma.product.findMany({
    take: limit,
    skip: offset,
    orderBy: { id: "desc" },
  });

  const totalPages = Math.ceil((await prisma.product.count()) / limit);
  const currentPage = offset / limit + 1;
  const perPage = limit;
  const total = await prisma.product.count();

  return {
    products,
    totalPages,
    currentPage,
    perPage,
    total,
  };
});
