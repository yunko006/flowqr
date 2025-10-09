CREATE TABLE "flowqr_subscription" (
	"id" text PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"polar_customer_id" text NOT NULL,
	"status" text NOT NULL,
	"price_id" text NOT NULL,
	"plan" text DEFAULT 'free' NOT NULL,
	"qr_code_limit" integer DEFAULT 3 NOT NULL,
	"qr_code_count" integer DEFAULT 0 NOT NULL,
	"qr_code_reset_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"current_period_start" timestamp with time zone NOT NULL,
	"current_period_end" timestamp with time zone,
	"cancel_at_period_end" boolean DEFAULT false NOT NULL,
	"cancel_at" timestamp with time zone,
	"ended_at" timestamp with time zone,
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp with time zone
);
--> statement-breakpoint
ALTER TABLE "flowqr_subscription" ADD CONSTRAINT "flowqr_subscription_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "subscription_user_id_idx" ON "flowqr_subscription" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX "subscription_polar_customer_idx" ON "flowqr_subscription" USING btree ("polar_customer_id");