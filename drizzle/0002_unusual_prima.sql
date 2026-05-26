CREATE TABLE "citys" (
	"id" varchar(255) PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "specialities" (
	"id" varchar(255) PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" varchar(255) PRIMARY KEY NOT NULL,
	"firstname" varchar(255) NOT NULL,
	"lastname" varchar(255) NOT NULL,
	"city_id" varchar(255) NOT NULL,
	"age" integer NOT NULL,
	"registration_date" timestamp NOT NULL,
	"speciality_id" varchar(255) NOT NULL,
	"telegram" varchar(255) NOT NULL,
	"mail" varchar(255) NOT NULL
);
--> statement-breakpoint
DROP TABLE "products" CASCADE;--> statement-breakpoint
ALTER TABLE "users" ADD CONSTRAINT "users_city_id_citys_id_fk" FOREIGN KEY ("city_id") REFERENCES "public"."citys"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "users" ADD CONSTRAINT "users_speciality_id_specialities_id_fk" FOREIGN KEY ("speciality_id") REFERENCES "public"."specialities"("id") ON DELETE no action ON UPDATE no action;