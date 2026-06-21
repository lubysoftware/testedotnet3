IF OBJECT_ID(N'[__EFMigrationsHistory]') IS NULL
BEGIN
    CREATE TABLE [__EFMigrationsHistory] (
        [MigrationId] nvarchar(150) NOT NULL,
        [ProductVersion] nvarchar(32) NOT NULL,
        CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY ([MigrationId])
    );
END;

GO

CREATE TABLE [Developers] (
    [Id] uniqueidentifier NOT NULL,
    [Name] nvarchar(80) NOT NULL,
    [Age] int NOT NULL,
    [Email] nvarchar(max) NOT NULL,
    CONSTRAINT [PK_Developers] PRIMARY KEY ([Id])
);

GO

CREATE TABLE [Projects] (
    [Id] uniqueidentifier NOT NULL,
    [Name] nvarchar(80) NOT NULL,
    [Description] nvarchar(250) NOT NULL,
    CONSTRAINT [PK_Projects] PRIMARY KEY ([Id])
);

GO

CREATE TABLE [Lauches] (
    [Id] uniqueidentifier NOT NULL,
    [DeveloperId] uniqueidentifier NOT NULL,
    [ProjectId] uniqueidentifier NOT NULL,
    [StarDate] datetime2 NOT NULL,
    [EndDate] datetime2 NOT NULL,
    [Hours] decimal(18,2) NOT NULL,
    CONSTRAINT [PK_Lauches] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_Lauches_Developers_DeveloperId] FOREIGN KEY ([DeveloperId]) REFERENCES [Developers] ([Id]) ON DELETE CASCADE,
    CONSTRAINT [FK_Lauches_Projects_ProjectId] FOREIGN KEY ([ProjectId]) REFERENCES [Projects] ([Id]) ON DELETE CASCADE
);

GO

CREATE INDEX [IX_Lauches_DeveloperId] ON [Lauches] ([DeveloperId]);

GO

CREATE INDEX [IX_Lauches_ProjectId] ON [Lauches] ([ProjectId]);

GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20210328032229_Tabelas', N'3.1.8');

GO

