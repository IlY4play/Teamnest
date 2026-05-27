import { db } from "@/server/db";
import { categories } from "@/server/db/schema";
import { eq } from "drizzle-orm";
import Elysia from "elysia";
import z from "zod/v4";

export const categoriesRouter = new Elysia({
  prefix: "categories",
})
  .get("/", async () => {
    return db.query.categories.findMany({
      where: eq(categories.isDeleted, false),
    });
  })
  .get(
    "/:id",
    async ({ params }) => {
      const founndCategory = await db.query.categories.findFirst({
        where: eq(categories.id, params.id),
      });
      return founndCategory ?? null;
    },
    {
      params: z.object({
        id: z.string(),
      }),
    },
  );
