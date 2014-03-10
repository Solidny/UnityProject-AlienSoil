#pragma strict

function OnGUI()
{
	var buttonWidth = 100;
	var buttonHeight = 50;
	
	var buttonX = ( Screen.width - buttonWidth ) / 2.0f;
	var buttonY = ( Screen.height - buttonHeight ) / 2.0f;
	
	if ( GUI.Button( Rect( buttonX, buttonY, buttonWidth, buttonHeight ), "Press Me!" ) )
	{
		// Load the Table of contents.
		Application.LoadLevel("TOC");
	}
}