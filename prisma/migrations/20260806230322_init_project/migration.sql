-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "tagline" TEXT NOT NULL,
    "status" TEXT,
    "tags" JSONB NOT NULL,
    "overview" JSONB,
    "architecture" JSONB,
    "infra" JSONB,
    "stack" JSONB,
    "services" JSONB,
    "apiExplorer" JSONB,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Project_slug_key" ON "Project"("slug");
