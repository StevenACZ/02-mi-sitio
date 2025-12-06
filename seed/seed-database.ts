import prisma from "../lib/prisma.ts";
import { siteReviews } from "./site-reviews.ts";
import { products } from "./products.seed.ts";

async function seedDatabase() {
  // Purgar base de datos
  await prisma.siteReview.deleteMany();
  await prisma.product.deleteMany();

  // Insertar registros
  await prisma.siteReview.createMany({
    data: siteReviews,
  });
  await prisma.product.createMany({
    data: products,
  });

  console.log("Seeding database");
}

seedDatabase();
