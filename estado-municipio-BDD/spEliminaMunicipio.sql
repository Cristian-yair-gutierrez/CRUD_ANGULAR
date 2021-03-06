USE AngularBDD
GO
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[spEliminaMunicipio]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[spEliminaMunicipio]
GO
--- ============================================================================================================          
--- Responsable: Cristian Yair Gutierrez    
--- Fecha: 09/05/2018            
--- Descripcion: Elimina un Estado
--- ============================================================================================================
CREATE PROCEDURE [dbo].[spEliminaMunicipio]
	@pidMunicipio int
AS
BEGIN	
	DELETE from tbMunicipio
	WHERE idMunicipio = @pidMunicipio
END