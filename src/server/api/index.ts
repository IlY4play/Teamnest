import { Elysia } from "elysia";
import { applicantsRouter } from "./routers/applicants";
import { categoriesRouter } from "./routers/categories";

export const app = new Elysia({
  prefix: "/api",
})
  .use(categoriesRouter)
  .use(applicantsRouter)
  .get("/", () => {
    return "Hello World!";
  })
  .get("/test", () => {
    return "Test test test";
  });
