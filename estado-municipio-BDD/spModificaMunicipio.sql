USE [AngularBDD]
GO
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[spModificaMunicipio]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[spModificaMunicipio]
GO
--- ============================================================================================================          
--- Responsable: Cristian Yair Gutierrez    
--- Fecha: 09/05/2018            
--- Descripcion: Modifica un Municipio
--- ============================================================================================================

CREATE PROCEDURE [dbo].[spModificaMunicipio]
	@pidMunicipio int,
	@pdescripcionMunicipio varchar(50)
AS

BEGIN	
		Update tbMunicipio
		SET Descripcion = @pdescripcionMunicipio
		WHERE idMunicipio = @pidMunicipio
END