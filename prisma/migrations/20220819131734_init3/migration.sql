/*
  Warnings:

  - You are about to drop the `Attribut` table. If the table is not empty, all the data it contains will be lost.

*/
BEGIN TRY

BEGIN TRAN;

-- DropForeignKey
ALTER TABLE [TestbenchVisualisation].[Attribut] DROP CONSTRAINT [Attribut_tableId_fkey];

-- DropTable
DROP TABLE [TestbenchVisualisation].[Attribut];

-- CreateTable
CREATE TABLE [TestbenchVisualisation].[Attribute] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] VARCHAR(255) NOT NULL,
    [type] VARCHAR(255) NOT NULL,
    [description] VARCHAR(400),
    [tableId] INT NOT NULL,
    [createAt] DATETIME2 NOT NULL CONSTRAINT [Attribute_createAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    CONSTRAINT [Attribute_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- AddForeignKey
ALTER TABLE [TestbenchVisualisation].[Attribute] ADD CONSTRAINT [Attribute_tableId_fkey] FOREIGN KEY ([tableId]) REFERENCES [TestbenchVisualisation].[tables]([PK]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
