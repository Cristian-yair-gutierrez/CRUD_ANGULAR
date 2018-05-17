USE [AngularBDD]
GO
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[spInsertaMunicipio]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[spInsertaMunicipio]
GO
--- ==========================================================================================================================================            
--- Responsable: Cristian Yair Gutierrez    
--- Fecha: 09/05/2018            
--- Descripcion: inserta un Municipio
--- ==========================================================================================================================================  

CREATE PROCEDURE [dbo].[spInsertaMunicipio]
	@pidEstado int,
	@pdesMunicipio varchar(50),
	@presultado int output
	
AS

BEGIN
	IF NOT EXISTS(SELECT 1 FROM tbMunicipio WITH(NOLOCK) WHERE Descripcion = @pdesMunicipio)
	BEGIN
		INSERT INTO tbMunicipio(idEstado, Descripcion)
		VALUES(@pidEstado, @pdesMunicipio)
		SET @presultado = 1
	END
	ELSE	
		SET @presultado = -1
END