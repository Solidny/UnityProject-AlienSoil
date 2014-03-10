#pragma strict
/**
 * This script uses sample code found on the
 * Unity GUI controls documentation page (Accessed 02-12-2012):
 * http://docs.unity3d.com/Documentation/Components/gui-Controls.html
 */

private var windowRect0 = Rect( 20, 20, 420, 0 );
private var windowRect1 = Rect( 40, 40, 420, 0 );
private var windowRect2 = Rect( 60, 60, 420, 0 );
private var windowRect3 = Rect( 80, 80, 420, 0 );
private var windowRect4 = Rect( 100, 100, 420, 0 );
private var windowRect5 = Rect( 120, 120, 420, 0 );
private var windowRect6 = Rect( 140, 140, 420, 0 );
private var windowRect7 = Rect( 160, 160, 420, 0 );
private var windowRect8 = Rect( 180, 180, 420, 0 );

private var textFieldString = "Text Field.";
private var textAreaString = "Text\nArea.";

private var toggleBool = false;

private var toolbarStrings : String[] = [ "Toolbar 1", "Toolbar 2", "Toolbar 3" ];
private var toolbarInt = 0;

private var selectionGridInt = 0;
private var selectionGridStrings : String[] = [ "Grid 1", "Grid 2", "Grid 3", "Grid 4" ];

private var horizontalSliderValue = 0.0;
private var verticalSliderValue = 0.0;

private var horizontalScrollbarValue = 0.0;
private var verticalScrollbarValue = 0.0;

private var scrollViewVector : Vector2 = Vector2.zero;
private var scrollViewText : String = "Inner ScrollView text.";

function OnGUI()
{
	GUIConstants.DrawMainMenu();
	
	// Label
	windowRect0 = GUILayout.Window( 0, windowRect0, LabelWindow, "Labels" );
	
	// Button & Repeat button
	windowRect1 = GUILayout.Window( 1, windowRect1, ButtonWindow, "Buttons" );
	
	// Text Field & Text Area
	windowRect2 = GUILayout.Window( 2, windowRect2, TextWindow, "Text" );
	
	// Toggle
	windowRect3 = GUILayout.Window( 3, windowRect3, ToggleWindow, "Toggle" );
		
	// Toolbar
	windowRect4 = GUILayout.Window( 4, windowRect4, ToolbarWindow, "Toolbar" );
	
	// Selection Grid
	windowRect5 = GUILayout.Window( 5, windowRect5, SelectionGridWindow, "Selection Grid" );

	// Sliders
	windowRect6 = GUILayout.Window( 6, windowRect6, SlidersWindow, "Sliders" );
	
	// Scrollbars
	windowRect7 = GUILayout.Window( 7, windowRect7, ScrollbarsWindow, "Scrollbars" );
	
	// Scrollview
	windowRect8 = GUILayout.Window( 8, windowRect8, ScrollViewWindow, "Scroll View" );
	
}

function LabelWindow()
{
	var description = "The Label control is a non-interactive control.\nIt is best for displaying information only.";
	var source = "GUI.Label( Rect( X, Y, Width, Height ), \"Lable Text\" );";
	
	GUILayout.BeginVertical();
	GUILayout.Label( description );
	GUILayout.Label( "Example:" );
	GUILayout.TextArea( source );
	GUILayout.Label( "This is a label!" );
	GUILayout.EndVertical();
	
	GUI.DragWindow( Rect( 0, 0, Screen.width, 20 ) );
}

function ButtonWindow()
{
	var description = "The GUI.Button() function will return true when it is clicked.\nTo react to a button being clicked, wrap the GUI.Button() function in an if statement.";
	var source = "if ( GUI.Button( Rect( X, Y, Width, Height ), \"Button Label\" ) ) {\n\t// Do something when the button is pressed.\n}";
	
	GUILayout.BeginVertical();
	GUILayout.Label( description );
	GUILayout.Label( "Example: " );
	GUILayout.TextArea( source );
	if ( GUILayout.Button( "Click Me!" ) )
	{
		Debug.Log("Button Clicked!");
	}
	
	description = "The RepeatButton is a variation of the regular Button. The RepeatButton will respond every frame that the mouse button remains depressed.";
	source = "if (GUI.RepeatButton (Rect (X, Y, Width, Height), \"Button Text\" ) ) {\n\t// This code is executed every frame that the RepeatButton remains clicked.\n}";
	GUILayout.Label( description );
	GUILayout.Label( "Example: " );
	GUILayout.TextArea( source );
	if ( GUILayout.RepeatButton( "Click Me!" ) )
	{
		Debug.Log("RepeatButton Clicked!");
	}	
	
	GUILayout.EndVertical();
	
	GUI.DragWindow( Rect( 0, 0, Screen.width, 20 ) );
}

function TextWindow()
{
	var description = "The TextField control is an interactive, editable single-line field containing a text string.";
	var source = "textFieldString = GUI.TextField( Rect(X, Y, Width, Height), textFieldString );";

	GUILayout.BeginVertical();
	
	GUILayout.Label( description );
	GUILayout.Label( "Example: " );
	GUILayout.TextArea( source );
	textFieldString = GUILayout.TextField( textFieldString );
	
	description = "The TextArea control is an interactive, editable multi-line area containing a text string.";
	source = "textAreaString = GUI.TextArea (Rect (X, Y, Width, Height), textAreaString );";
	GUILayout.Label( description );
	GUILayout.Label( "Example: " );
	GUILayout.TextArea( source );
	textAreaString = GUILayout.TextArea( textAreaString );
	
	GUILayout.EndVertical();
	
	GUI.DragWindow( Rect( 0, 0, Screen.width, 20 ) );
}

function ToggleWindow()
{
	var description = "The Toggle control creates a check-box. The user can change it's state by clicking on it.";
	var source = "toggleBool = GUI.Toggle (Rect (X, Y, Width, Height), toggleBool, \"Toggle Label\");";

	GUILayout.BeginVertical();
	
	GUILayout.Label( description );
	GUILayout.Label( "Example: " );
	GUILayout.TextArea( source );
	toggleBool = GUILayout.Toggle( toggleBool, "Toggle Button" );
	
	GUILayout.EndVertical();

	GUI.DragWindow( Rect( 0, 0, Screen.width, 20 ) );
}

function ToolbarWindow()
{
	var description = "The Toolbar control is essentially a row of Buttons. Only one Button on the Toolbar can be active at a time.";
	var source = "var toolbarInt = 0;\nvar toolbarStrings : String[] = [\"Toolbar1\", \"Toolbar2\", \"Toolbar3\"];\n\nfunction OnGUI () {\n\n\ttoolbarInt = GUI.Toolbar (Rect (X, Y, Width, Height), toolbarInt, toolbarStrings);\n}";

	GUILayout.BeginVertical();
	
	GUILayout.Label( description );
	GUILayout.Label( "Example: " );
	GUILayout.TextArea( source );
	toolbarInt = GUILayout.Toolbar( toolbarInt, toolbarStrings );
	
	GUILayout.EndVertical();

	GUI.DragWindow( Rect( 0, 0, Screen.width, 20 ) );
}

function SelectionGridWindow()
{
	var description = "The SelectionGrid control is a multi-row Toolbar. Only one Button on the SelectionGrid can be active at a time.";
	var source = "var selectionGridInt : int = 0;\nvar selectionStrings : String[] = [\"Grid 1\", \"Grid 2\", \"Grid 3\", \"Grid 4\"];\n\nfunction OnGUI () {\n	selectionGridInt = GUI.SelectionGrid (Rect (X, Y, Width, Height), selectionGridInt, selectionStrings, 2);\n\n}";

	GUILayout.BeginVertical();
	
	GUILayout.Label( description );
	GUILayout.Label( "Example: " );
	GUILayout.TextArea( source );
	selectionGridInt = GUILayout.SelectionGrid( selectionGridInt, selectionGridStrings, 2 );
	
	GUILayout.EndVertical();

	GUI.DragWindow( Rect( 0, 0, Screen.width, 20 ) );
}

function SlidersWindow()
{
	var description = "The HorizontalSlider and VerticalSlider controls are a typical sliding knob that can be dragged to change a value between predetermined min and max values.";
	var source = "hSliderValue = GUI.HorizontalSlider (Rect (X, Y, Width, Height), hSliderValue, 0.0, 10.0);\nvSliderValue = GUI.VerticalSlider (Rect (X, Y, Width, Height), vSliderValue, 10.0, 0.0);";

	GUILayout.BeginVertical();
	
	GUILayout.Label( description );
	GUILayout.Label( "Example: " );
	GUILayout.TextArea( source );
	
	GUILayout.BeginHorizontal();
	
	horizontalSliderValue = GUILayout.HorizontalSlider( horizontalSliderValue, 0.0, 10.0 );
	verticalSliderValue = GUILayout.VerticalSlider( verticalSliderValue, 10.0, 0.0 );
	
	GUILayout.EndHorizontal();
	
	GUILayout.EndVertical();

	GUI.DragWindow( Rect( 0, 0, Screen.width, 20 ) );
}

function ScrollbarsWindow()
{
	var description = "The HorizontalScrollbar and the VerticalScrollbar controls are similar to the Slider controls but but are generally used for scrolling the contents of a pane.";
	var source = "hScrollbarValue = GUI.HorizontalScrollbar (Rect (25, 25, 100, 30), hScrollbarValue, 1.0, 0.0, 10.0);\nvScrollbarValue = GUI.VerticalScrollbar (Rect (X, Y, Width, Height), vScrollbarValue, 1.0, 10.0, 0.0);";

	GUILayout.BeginVertical();
	
	GUILayout.Label( description );
	GUILayout.Label( "Example: " );
	GUILayout.TextArea( source );

	GUILayout.BeginHorizontal();
	
	horizontalScrollbarValue = GUILayout.HorizontalScrollbar( horizontalScrollbarValue, 1.0, 0.0, 10.0 );
	verticalScrollbarValue = GUILayout.VerticalScrollbar( verticalScrollbarValue, 1.0, 10.0, 0.0 );
	
	GUILayout.EndHorizontal();
	
	GUILayout.EndVertical();

	GUI.DragWindow( Rect( 0, 0, Screen.width, 20 ) );
}

function ScrollViewWindow()
{
	var description = "ScrollViews are controls that display a viewable area of a much larger set of controls.";
	var source = "var scrollViewVector : Vector2 = Vector2.zero;\nvar innerText : String = \"I am inside the ScrollView\";\n\nfunction OnGUI () {\n	// Begin the ScrollView\n	scrollViewVector = GUI.BeginScrollView (Rect (X, Y, Width, Height), scrollViewVector, Rect (0, 0, 400, 400));\n\n	// Put something inside the ScrollView\n	innerText = GUI.TextArea (Rect (0, 0, 400, 400), innerText);\n\n	// End the ScrollView\n	GUI.EndScrollView();\n}";

	GUILayout.BeginVertical();
	
	GUILayout.Label( description );
	GUILayout.Label( "Example: " );
	GUILayout.TextArea( source );
	
	scrollViewVector = GUILayout.BeginScrollView( scrollViewVector, GUILayout.ExpandWidth(true), GUILayout.Height(200) );
	
	scrollViewText = GUILayout.TextArea( scrollViewText, GUILayout.Width(400), GUILayout.Height(400) );
	
	GUILayout.EndScrollView();
	
	GUILayout.EndVertical();

	GUI.DragWindow( Rect( 0, 0, Screen.width, 20 ) );
}