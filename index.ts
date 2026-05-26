import { db } from "@/server/db";
import { eq } from "drizzle-orm";
import { categories, applicants, specialities } from "@/server/db/schema";

// await db.insert(categories).values({
//   name: "category1",
// });

// await db.insert(categories).values({
//   name: "category2",
// });

// await db.insert(categories).values({
//   name: "category3",
// });

// await db.insert(specialities).values({
//   name: "speciality1",
// });

// await db.insert(specialities).values({
//   name: "speciality2",
// });

// await db.insert(specialities).values({
//   name: "speciality3",
// });

// await db.insert(applicants).values({
//   firstname: "Dima",
//   lastname: "Umny",
//   city: "Moscow",
//   age: 30,
//   specialityId: "019e6556-01c1-7000-91da-2654412185ea",
//   categoryId: "019e654f-bb6e-7000-b445-92405966e9d6",
//   telegram: "@johndoe",
//   email: "blablabla@gmail.com",
//   skills: ["JavaScript", "TypeScript"],
//   institution: "University of Example",
//   startYearOfEducation: 2010,
//   yearsOfEducation: 4,
//   faculty: "Computer Science",
// });

// await db.insert(applicants).values({
//   firstname: "Petr",
//   lastname: "Bebrov",
//   city: "Moscow",
//   age: 35,
//   specialityId: "019e6556-01c1-7000-91da-2654412185ea",
//   categoryId: "019e654f-bb6e-7000-b445-92405966e9d6",
//   telegram: "@petrbebrov",
//   email: "kakashechki@gmail.com",
//   skills: ["HTML", "CSS", "JavaScript"],
//   institution: "University of Example 2",
//   startYearOfEducation: 2005,
//   yearsOfEducation: 5,
//   faculty: "Computer Science",
// });

// await db.insert(applicants).values({
//   firstname: "Lisa",
//   lastname: "Lovkaya",
//   city: "Moscow",
//   age: 25,
//   specialityId: "019e6556-01c1-7000-91da-2654412185ea",
//   categoryId: "019e654f-bb6e-7000-b445-92405966e9d6",
//   telegram: "@lisalovkaya",
//   email: "kakashechki@gmail.com",
//   skills: ["HTML", "CSS", "JavaScript"],
//   institution: "University of Example 3",
//   startYearOfEducation: 2015,
//   yearsOfEducation: 5,
//   faculty: "Computer Science",
// });

// await db
//   .update(applicants)
//   .set({ lastname: "Bebrova" })
//   .where(eq(applicants.id, "019e6560-2848-7000-b36d-9a71dc3a34eb"));

///////////////////////////////////////////////////////////////////////
const foundApplicants = await db.query.applicants.findMany();
console.log(foundApplicants);
