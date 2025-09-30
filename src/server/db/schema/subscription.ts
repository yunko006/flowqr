import { sql } from "drizzle-orm";
import { index, pgTableCreator } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { user } from "./auth";

export const createTable = pgTableCreator((name) => `flowqr_${name}`);

export const subscriptions = createTable(
  "subscription",
  (d) => ({
    id: d.uuid().primaryKey().defaultRandom(),
    userId: d
      .text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),

    // Lien avec Polar (pour identifier l'utilisateur dans les webhooks)
    polarCustomerId: d.text("polar_customer_id").unique(),

    // Infos essentielles d'abonnement
    plan: d.text().notNull().default("free"), // 'free', 'basic', 'pro', 'premium'
    qrCodeLimit: d.integer("qr_code_limit").notNull().default(3),

    // Compteur mensuel
    qrCodeCount: d.integer("qr_code_count").notNull().default(0),
    qrCodeResetAt: d
      .timestamp("qr_code_reset_at", { withTimezone: true })
      .notNull()
      .default(sql`CURRENT_TIMESTAMP`),

    // Métadonnées
    createdAt: d
      .timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: d
      .timestamp("updated_at", { withTimezone: true })
      .$onUpdate(() => new Date()),
  }),
  (t) => [
    index("subscription_user_id_idx").on(t.userId),
    index("subscription_polar_customer_idx").on(t.polarCustomerId),
  ]
);
