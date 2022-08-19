BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [TestbenchVisualisation].[users] (
    [id] INT NOT NULL IDENTITY(1,1),
    [firstname] VARCHAR(255),
    [lastname] VARCHAR(255),
    [email] VARCHAR(255) NOT NULL,
    [createAt] DATETIME2 NOT NULL CONSTRAINT [users_createAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    CONSTRAINT [users_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [users_email_key] UNIQUE NONCLUSTERED ([email])
);

-- CreateTable
CREATE TABLE [TestbenchVisualisation].[tables] (
    [PK] INT NOT NULL IDENTITY(1,1),
    [simpleName] VARCHAR(255) NOT NULL,
    [rowCount] INT NOT NULL,
    [numForeignKey] INT,
    [description] VARCHAR(400),
    [category] VARCHAR(255),
    [createAt] DATETIME2 NOT NULL CONSTRAINT [tables_createAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    [categoryId] INT NOT NULL,
    CONSTRAINT [tables_pkey] PRIMARY KEY CLUSTERED ([PK]),
    CONSTRAINT [tables_simpleName_key] UNIQUE NONCLUSTERED ([simpleName])
);

-- CreateTable
CREATE TABLE [TestbenchVisualisation].[categories] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] VARCHAR(255) NOT NULL,
    [createAt] DATETIME2 NOT NULL CONSTRAINT [categories_createAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    CONSTRAINT [categories_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [TestbenchVisualisation].[Attribut] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] VARCHAR(255) NOT NULL,
    [type] VARCHAR(255) NOT NULL,
    [description] VARCHAR(400),
    [tableId] INT NOT NULL,
    [createAt] DATETIME2 NOT NULL CONSTRAINT [Attribut_createAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    CONSTRAINT [Attribut_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- AddForeignKey
ALTER TABLE [TestbenchVisualisation].[tables] ADD CONSTRAINT [tables_categoryId_fkey] FOREIGN KEY ([categoryId]) REFERENCES [TestbenchVisualisation].[categories]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [TestbenchVisualisation].[Attribut] ADD CONSTRAINT [Attribut_tableId_fkey] FOREIGN KEY ([tableId]) REFERENCES [TestbenchVisualisation].[tables]([PK]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
