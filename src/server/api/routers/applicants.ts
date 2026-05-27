import { db } from "@/server/db";
import { applicants } from "@/server/db/schema";
import { eq } from "drizzle-orm";
import Elysia from "elysia";
import z from "zod/v4";

export const applicantsRouter = new Elysia({
  prefix: "/applicants",
})
  .get("/", async () => {
    return "applicants router is ready";
  })
  .get("/", async () => {
    const foundApplicants = await db.query.applicants.findMany({
      where: eq(applicants.isDeleted, false),
    });
    return foundApplicants;
  })
  .get(
    "/:id",
    async ({ params }) => {
      const founApplicant = await db.query.applicants.findFirst({
        where: eq(applicants.id, params.id),
      });

      return founApplicant ?? null;
    },
    {
      params: z.object({
        id: z.string(),
      }),
    },
  );
