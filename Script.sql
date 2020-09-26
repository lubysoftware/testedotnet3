CREATE database lubyTest
GO 

USE lubyTest
GO

CREATE TABLE [dbo].[TBL_DEVELOPER] (
	ID BIGINT IDENTITY(1,1) NOT NULL,
	FULL_NAME VARCHAR(255) NOT NULL,
	EMAIL VARCHAR(255) NOT NULL,
	CONSTRAINT PK_TBL_DEVELOPER PRIMARY KEY (ID)
);

GO

CREATE TABLE [dbo].[TBL_PROJECT] (
	ID BIGINT IDENTITY(1,1) NOT NULL,
	PROJECT_NAME VARCHAR(255) NOT NULL,
	PROJECT_DESCRIPTION VARCHAR(255) NOT NULL,
	CONSTRAINT PK_TBL_PROJECT PRIMARY KEY (ID)
);

GO

CREATE TABLE [dbo].[TBL_WORKING_HOURS] (
	ID BIGINT IDENTITY(1,1) NOT NULL,	
	DATE_INIT DATETIME NOT NULL,
	DATE_END DATETIME NOT NULL,
	ID_DEVELOPER BIGINT,
	CONSTRAINT PK_TBL_WORKING_HOURS PRIMARY KEY (ID),
	CONSTRAINT FK_TBL_WORKING_HOURS_DEVELOPER FOREIGN KEY (ID_DEVELOPER) REFERENCES [dbo].[TBL_DEVELOPER](ID)
);

GO

