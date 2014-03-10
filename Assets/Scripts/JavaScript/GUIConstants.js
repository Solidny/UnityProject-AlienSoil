#pragma strict

static var ButtonWidth = 300;
static var ButtonHeight = 50;
static var VerticalPadding = 10;
static var HorizontalPadding = 10;

static function GetTitleSafeLeft() : float
{
	return Screen.width * 0.1;
}

static function GetTitleSafeTop() : float
{
	return Screen.height * 0.1;
}

static function GetTitleSafeRight() : float
{
	return Screen.width * 0.9;
}

static function GetTitleSafeBottom() : float
{
	return Screen.height * 0.9;
}

static function GetTitleSafeRect() : Rect
{
	var sw = Screen.width;
	var sh = Screen.height;
	
	return Rect( sw * 0.1, sh * 0.1, sw * 0.8, sh * 0.8 );
}

static function DrawMainMenu()
{
	var buttonWidth = GUIConstants.ButtonWidth;
	var buttonHeight = GUIConstants.ButtonHeight;
	
	var boxWidth = buttonWidth + GUIConstants.HorizontalPadding * 2;
	var boxHeight = buttonHeight + GUIConstants.VerticalPadding * 2 + 20;
	var boxX = ( Screen.width - boxWidth ); // / 2.0;
	var boxY = ( Screen.height - boxHeight ); // / 2.0;

	var buttonX = boxX + GUIConstants.HorizontalPadding;
	var buttonY = boxY + GUIConstants.VerticalPadding + 15;
	
	// Menu
	GUI.Box( Rect( boxX, boxY, boxWidth, boxHeight ), "Menu" );
		
	if ( GUI.Button( Rect( buttonX, buttonY, buttonWidth, buttonHeight ), "Back" ) )
	{
		Application.LoadLevel("TOC");
	}

}