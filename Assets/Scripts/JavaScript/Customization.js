#pragma strict
/**
 * Source code and text for this script has been adopted from (accessed 02-12-2012):
 * http://docs.unity3d.com/Documentation/Components/gui-Customization.html
 */
 
@script ExecuteInEditMode()

private var windowRect0 = Rect( 20, 20, 420, 0 );
private var windowRect1 = Rect( 40, 40, 420, 0 );

private var toggleBool = false;

public var buttonStyle : GUIStyle;
public var mySkin : GUISkin;

function OnGUI () {
	GUIConstants.DrawMainMenu();
	
	windowRect0 = GUILayout.Window( 0, windowRect0, GUIStyleWindow, "GUI Styles" );
	windowRect1 = GUILayout.Window( 1, windowRect1, GUISkinWindow, "GUI Skin" );
	
}

function GUIStyleWindow()
{
	var description1 = "You can fine-tune the appearance of your controls using GUIStyles.";
	var description2 = "You can also adopt the style of another control. For example, the toggle button below is styled using a button style:";
	var description3 = "You can also define your own styles.  This script defines a public variable called 'buttonStyle'. You can modify this style in the inspector to change the appearance of any control that uses this style.";
	
	var source1 = "toggleBool = GUI.Toggle( Rect( X, Y, Width, Height ), toggleBool, \"Button Toggle\", \"button\" );";
	var source2 = "GUI.Button( Rect( X, Y, Width, Height ), \"Custom Button Style\", buttonStyle );";
	
	GUILayout.BeginVertical();
	GUILayout.Label( description1 );
	GUILayout.Label( description2 );
	GUILayout.TextArea( source1 );
	
	toggleBool = GUILayout.Toggle( toggleBool, "Regular Toggle" );
	toggleBool = GUILayout.Toggle( toggleBool, "Button Toggle", "button" );

	GUILayout.Label( description3 );
	GUILayout.TextArea( source2 );
	GUILayout.Button( "Custom Button Style", buttonStyle );
	
	GUILayout.EndVertical();
	
	GUI.DragWindow( Rect( 0, 0, Screen.width, 20 ) );
}

function GUISkinWindow()
{
	var description1 = "A GUISkin is simply a collection of GUIStyles.";
	var description2 = "To create a GUISkin, select Assets > Create > GUI Skin from the main menu.";
	var description3 = "To use the GUI skin, assign it to GUI.skin in your OnGUI() function.";
	
	var source1 = "var mySkin : GUISkin;\n\nfunction OnGUI () {\n	// Assign the skin to be the one currently used.\n	GUI.skin = mySkin;\n\n	// This will get the default \"button\" style from the skin assigned to mySkin.\n	GUI.Button (Rect (X,Y,Width,Height), \"Skinned Button Style\");\n}";

	GUILayout.BeginVertical();
	
	GUILayout.Label( description1 );
	GUILayout.Label( description2 );
	GUILayout.Label( description3 );
	
	GUILayout.TextArea( source1 );
	
	GUI.skin = mySkin;
	GUILayout.Button( "Skinned Button Style" );
	
	GUILayout.EndVertical();

	GUI.DragWindow( Rect( 0, 0, Screen.width, 20 ) );
}

