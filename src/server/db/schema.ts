import * as pg from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const commonFields = {
  id: pg
    .varchar("id", { length: 255 })
    .notNull()
    .primaryKey()
    .$defaultFn(() => Bun.randomUUIDv7()),
  isDeleted: pg.boolean("is_deleted").default(false),
  createdAt: pg.timestamp("created_at").notNull().defaultNow(),
};

export const applicants = pg.pgTable("applicants", {
  ...commonFields,
  firstname: pg.varchar("firstname", { length: 255 }).notNull(),
  lastname: pg.varchar("lastname", { length: 255 }).notNull(),
  city: pg.varchar("city", { length: 255 }).notNull(),
  age: pg.integer("age").notNull(),
  specialityId: pg
    .varchar("speciality_id", { length: 255 })
    .notNull()
    .references(() => specialities.id),
  categoryId: pg
    .varchar("category_id", { length: 255 })
    .notNull()
    .references(() => categories.id),
  telegram: pg.varchar("telegram", { length: 255 }).notNull(),
  email: pg.varchar("email", { length: 255 }).notNull(),
  skills: pg.varchar("skills", { length: 255 }).array().notNull(),
  institution: pg.varchar("education", { length: 255 }).notNull(),
  startYearOfEducation: pg.integer("start_year_of_education").notNull(),
  yearsOfEducation: pg.integer("years_of_education").notNull(),
  faculty: pg.varchar("faculty", { length: 255 }).notNull(),
});

export const specialities = pg.pgTable("specialities", {
  ...commonFields,
  name: pg.varchar("name", { length: 255 }).notNull(),
});

export const categories = pg.pgTable("categories", {
  ...commonFields,
  name: pg.varchar("name", { length: 255 }).notNull(),
});

export const applicantsRelations = relations(applicants, ({ one }) => ({
  category: one(categories, {
    references: [categories.id],
    fields: [applicants.categoryId],
  }),
  speciality: one(specialities, {
    references: [specialities.id],
    fields: [applicants.specialityId],
  }),
}));

export const categoriesRelations = relations(categories, ({ many }) => ({
  applicants: many(applicants),
}));

export const specialitiesRelations = relations(specialities, ({ many }) => ({
  applicants: many(applicants),
}));
