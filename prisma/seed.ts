import "dotenv/config";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { Prisma, PrismaClient } from "@prisma/client";
import { drugstoreSeed } from "../app/projects/data/seed-drugstore";

const adapter = new PrismaBetterSqlite3({
  url: process.env.DATABASE_URL ?? "file:./portfolio.db",
});
const prisma = new PrismaClient({ adapter });

function jsonOrUndefined(
  value: unknown,
): Prisma.InputJsonValue | undefined {
  if (value == null) return undefined;
  return value as Prisma.InputJsonValue;
}

async function main() {
  const data = {
    slug: drugstoreSeed.slug,
    name: drugstoreSeed.name,
    type: drugstoreSeed.type,
    tagline: drugstoreSeed.tagline,
    status: drugstoreSeed.status ?? null,
    tags: drugstoreSeed.tags as Prisma.InputJsonValue,
    overview: jsonOrUndefined(drugstoreSeed.overview),
    architecture: jsonOrUndefined(drugstoreSeed.architecture),
    infra: jsonOrUndefined(drugstoreSeed.infra),
    stack: jsonOrUndefined(drugstoreSeed.stack),
    services: jsonOrUndefined(drugstoreSeed.services),
    apiExplorer: jsonOrUndefined(drugstoreSeed.apiExplorer),
    links: jsonOrUndefined(drugstoreSeed.links),
    recentChanges: jsonOrUndefined(drugstoreSeed.recentChanges),
  };

  await prisma.project.upsert({
    where: { slug: drugstoreSeed.slug },
    create: data,
    update: data,
  });

  console.log(`Upserted project: ${drugstoreSeed.slug}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
