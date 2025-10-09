import { sql } from "drizzle-orm";
import { index, pgTableCreator } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { user } from "./auth";

export const createTable = pgTableCreator((name) => `flowqr_${name}`);

export const subscriptions = createTable(
  "subscription",
  (d) => ({
    // Utiliser l'ID Polar comme clé primaire pour simplifier les upserts
    id: d.text().primaryKey(),
    userId: d
      .text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),

    // Lien avec Polar customer
    polarCustomerId: d.text("polar_customer_id").notNull(),

    // Statut de l'abonnement Polar
    status: d.text().notNull(), // 'incomplete', 'incomplete_expired', 'trialing', 'active', 'past_due', 'canceled', 'unpaid'

    // ID du prix Polar
    priceId: d.text("price_id").notNull(),

    // Infos essentielles d'abonnement (calculées depuis le produit)
    plan: d.text().notNull().default("free"), // 'free', 'basic', 'pro', 'premium'
    qrCodeLimit: d.integer("qr_code_limit").notNull().default(3),

    // Compteur mensuel
    qrCodeCount: d.integer("qr_code_count").notNull().default(0),
    qrCodeResetAt: d
      .timestamp("qr_code_reset_at", { withTimezone: true })
      .notNull()
      .default(sql`CURRENT_TIMESTAMP`),

    // Périodes d'abonnement
    currentPeriodStart: d.timestamp("current_period_start", { withTimezone: true }).notNull(),
    currentPeriodEnd: d.timestamp("current_period_end", { withTimezone: true }),

    // Annulation
    cancelAtPeriodEnd: d.boolean("cancel_at_period_end").notNull().default(false),
    cancelAt: d.timestamp("cancel_at", { withTimezone: true }),
    endedAt: d.timestamp("ended_at", { withTimezone: true }),

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
