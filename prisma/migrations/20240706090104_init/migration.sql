-- CreateTable
CREATE TABLE "FormData" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "course" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "FormData_email_key" ON "FormData"("email");
