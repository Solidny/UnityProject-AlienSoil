#pragma strict
/**
 * Source code and text for this script has been adopted from (accessed 02-12-2012):
 * http://docs.unity3d.com/Documentation/Components/gui-Basics.html
 */

@script ExecuteInEditMode()
 
private var windowRect0 : Rect = Rect(20, 20, 290, 0);
private var windowRect1 : Rect = Rect(20, 150, 290, 0 );

function OnGUI()
{	
	GUIConstants.DrawMainMenu();
	// Window 1
	windowRect0 = GUILayout.Window( 0, windowRect0, WindowFunction0, "function OnGUI()" );
	// Window 2
	windowRect1 = GUILayout.Window( 1, windowRect1, WindowFunction1, "Buttons & Boxes" );
}

function WindowFunction0()
{
	var description = "Create a script and override the OnGUI function:\n\nfunction OnGUI() {}\n\nThis function will be called every frame.";
	GUILayout.TextArea( description );
	GUI.DragWindow( Rect( 0, 0, Screen.width, 20 ) );
}

function WindowFunction1()
{
	var description = "To display a box:\n\nGUI.Box( Rect(10, 10, 100, 90), \"Menu\");\n\nTo display a button:\n\nGUI.Button( Rect( 10, 10, 50, 150 ), \"Back\" );";
	GUILayout.TextArea( description );
	GUI.DragWindow( Rect( 0, 0, Screen.width, 20 ) );
}