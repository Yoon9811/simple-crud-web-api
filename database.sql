USE [enterprise_2022]
GO

/****** Object:  Table [dbo].[Tasks]    Script Date: 18/1/2022 8:31:56 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Tasks](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Title] [nvarchar](50) NULL,
	[Description] [nvarchar](50) NULL,
	[Posted] [bit] NULL,
	[Status] [nvarchar](50) NULL,
	[CreatedDate] [datetime] NULL
) ON [PRIMARY]



CREATE PROCEDURE [dbo].[InsertTasks]
	@Title nvarchar(50), 
	@Description nvarchar(50),
	@Status nvarchar(50)
AS
BEGIN
	
	SET NOCOUNT ON;
	INSERT INTO dbo.Tasks (Title, Description,Posted,Status, CreatedDate)
	SELECT @Title, @Description,1,@Status, GETDATE()
END
GO




