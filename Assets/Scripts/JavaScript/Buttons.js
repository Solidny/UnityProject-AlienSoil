#pragma strict

var texture : Texture;
var text : String;
var tooltip : String;

function OnGUI()
{
    var buttonWidth = 100;
    var buttonHeight = 50;
    
    var buttonX = ( Screen.width - buttonWidth ) / 2.0f;
    var buttonY = ( Screen.height - buttonHeight ) / 2.0f;
    
    if ( GUI.Button( Rect( buttonX, buttonY, buttonWidth, buttonHeight ), 
         GUIContent( text, texture, tooltip ) ) )
    {
        // Print some text to the debug console
        Debug.Log("Thanks!");
    }
}