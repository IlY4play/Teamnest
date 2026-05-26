CREATE TABLE "applicants" (
	"id" varchar(255) PRIMARY KEY NOT NULL,
	"is_deleted" boolean DEFAULT false,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"firstname" varchar(255) NOT NULL,
	"lastname" varchar(255) NOT NULL,
	"city" varchar(255) NOT NULL,
	"age" integer NOT NULL,
	"speciality_id" varchar(255) NOT NULL,
	"category_id" varchar(255) NOT NULL,
	"telegram" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"skills" varchar(255)[] NOT NULL,
	"education" varchar(255) NOT NULL,
	"years_of_education" integer NOT NULL,
	"faculty" varchar(255) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "categories" (
	"id" varchar(255) PRIMARY KEY NOT NULL,
	"is_deleted" boolean DEFAULT false,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"name" varchar(255) NOT NULL
);
--> statement-breakpoint
DROP TABLE "citys" CASCADE;--> statement-breakpoint
DROP TABLE "users" CASCADE;--> statement-breakpoint
ALTER TABLE "specialities" ADD COLUMN "is_deleted" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "specialities" ADD COLUMN "created_at" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "applicants" ADD CONSTRAINT "applicants_speciality_id_specialities_id_fk" FOREIGN KEY ("speciality_id") REFERENCES "public"."specialities"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "applicants" ADD CONSTRAINT "applicants_category_id_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."categories"("id") ON DELETE no action ON UPDATE no action;