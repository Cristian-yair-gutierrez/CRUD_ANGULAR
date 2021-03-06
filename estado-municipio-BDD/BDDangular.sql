USE [AngularBDD]
GO
/****** Object:  Table [dbo].[tbEstado]    Script Date: 16/05/2018 05:28:05 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbEstado](
	[idEstado] [int] IDENTITY(1,1) NOT NULL,
	[Descripcion] [varchar](50) NOT NULL,
	[fotoEstadoUrl] [varchar](150) NULL,
 CONSTRAINT [PK_tbEstado] PRIMARY KEY CLUSTERED 
(
	[idEstado] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbMunicipio]    Script Date: 16/05/2018 05:28:07 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbMunicipio](
	[idMunicipio] [int] IDENTITY(1,1) NOT NULL,
	[idEstado] [int] NOT NULL,
	[Descripcion] [varchar](50) NOT NULL,
 CONSTRAINT [PK_tbMunicipio] PRIMARY KEY CLUSTERED 
(
	[idMunicipio] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  StoredProcedure [dbo].[spListaEstado]    Script Date: 16/05/2018 05:28:07 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
--- ============================================================================================================          
--- Responsable: Cristian Yair Gutierrez    
--- Fecha: 08/05/2018            
--- Descripcion: Enlista Estados
--- ============================================================================================================
CREATE PROC [dbo].[spListaEstado]
AS	SELECT * FROM tbEstado 
GO
/****** Object:  StoredProcedure [dbo].[spListaMunicipioByEstados]    Script Date: 16/05/2018 05:28:07 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[spListaMunicipioByEstados]
	@pidEstado bigint
AS
SELECT * FROM tbMunicipio WHERE idEstado = @pidEstado


GO
