#pragma strict
/**
 * Source code and text for this script has been adopted from (accessed 03-12-2012):
 * http://docs.unity3d.com/Documentation/Components/gui-Layout.html
 */
 
@script ExecuteInEditMode()
@script RequireComponent(Animation)
@script RequireComponent(GUITexture)

private var windowRect0 = Rect( 20, 20, 500, 0 );
private var windowRect1 = Rect( 40, 40, 500, 0 );
private var windowRect2 = Rect( 60, 60, 500, 0 );
private var windowRect3 = Rect( 80, 80, 500, 0 );

private var groupRect = Rect( 0, 0, 340, 100 );

private var showAreaSample = false;

// Used to animate the y-position of the group
// This parameter is animated using an animation clip.
var groupY : float;

var relativeMotion : Vector3;


function Start()
{
	
}

function OnGUI()
{
	if ( groupY > 0.0 )
	{
		// Make sure the group is centered.
		groupRect.x = ( Screen.width - groupRect.width ) / 2.0;
		groupRect.y = Mathf.Lerp( Screen.height, ( Screen.height - groupRect.height ) / 2.0, groupY );
		
		GUI.BeginGroup( groupRect );
		GUI.Box( Rect( 0, 0, 340, 100 ), "Main Menu" );
		if ( GUI.Button( Rect( 20, 25, 300, 50 ), "Close Group" ) )
		{
			// Reverse the animation and play from the end.
			animation["AnimateGroup"].speed = -1.0;
			animation["AnimateGroup"].time = animation.GetClip("AnimateGroup").length;
			animation.Play("AnimateGroup");		
		}
		GUI.EndGroup();
	}
	else
	{
		GUIConstants.DrawMainMenu();

		windowRect0 = GUILayout.Window( 0, windowRect0, AutomaticLayoutWindow, "Automatic Layout" );
		windowRect1 = GUILayout.Window( 1, windowRect1, FixedLayoutGroupWindow, "Fixed Layout - Group" );
		windowRect2 = GUILayout.Window( 2, windowRect2, AutomaticLayoutAreaWindow, "Automatic Layout - Area" );
		windowRect3 = GUILayout.Window( 3, windowRect3, AutomaticLayoutGroupsWindow, "Horizontal and Vertical Groups" );

		if ( showAreaSample ) 
		{
			var areaWidth = 300;
			var areaHeight = 300;
			var areaX = ( Screen.width - areaWidth ) / 2.0;
			var areaY = ( Screen.height - areaHeight ) / 2.0;
			
			GUILayout.Button( "I am not inside an area" );
			GUILayout.BeginArea( Rect( areaX, areaY, areaWidth, areaHeight ) );
			GUILayout.Button( "I am completely inside an area." );
			GUILayout.EndArea();
		}
	}
	
	// Use a full-screen GUITexture to dim the screen.
	// The screen will fade to the color of the texture as the group rises on the screen.
	guiTexture.color = Color( 1, 1, 1, groupY * 1.0 );
	
}

function AutomaticLayoutWindow()
{
	var description0 = "To use Automatic layout, use GUILayout instead of GUI when creating your UIs.";
	var source0 = "function OnGUI () {\n\n    // Automatic Layout\n    if ( GUILayout.RepeatButton (\"I am an Automatic Layout Button\") {\n\n        // Fixed Layout\n        GUI.Button (Rect (25,25,200,30), \"I am a Fixed Layout Button\");\n    }\n}";

	GUILayout.BeginVertical();
		
	GUILayout.Label( description0 );
	GUILayout.TextArea( source0 );
		
	if ( GUILayout.RepeatButton( "I am an Automatic Layout Button" ) )
	{
		GUI.Button( Rect( 20, 20, 200, 30 ), "I am a Fixed Layout Button" );
	}

	GUILayout.EndVertical();

	GUI.DragWindow( Rect( 0, 0, Screen.width, 20 ) );

}

function FixedLayoutGroupWindow()
{
	var description0 = "In Fixed Layout, you can put Controls into a group by using the GUI.BeginGroup() and GUI.EndGroup() functions.";
	var description1 = "All Controls inside a Group will be positioned relative to the Group's top-left corner.  Using groups allows you to reposition the group at runtime and all the relative positions of the Controls in the group will be maintained.";
	
	var source0 = "function OnGUI () {\n	// Make a group on the center of the screen\n	var groupWidth = 100;\n	var groupHeight = 100;\n	var x = ( Screen.width - groupWidth ) / 2.0;\n	var y = ( Screen.height - groupHeight ) / 2.0;\n\n	GUI.BeginGroup( Rect(x,y,groupWidth,groupHeight) );\n	// All Controls are now relative to the group.\n\n	// We'll make a box so you can see where the group is on-screen.\n	GUI.Box (Rect (0,0,100,100), \"Main Menu\");\n	GUI.Button (Rect (10,40,80,30), \"Close Group\");\n\n	// End the group we started above. This is very important to remember!\n	GUI.EndGroup ();\n}";

	GUILayout.BeginVertical();
	
	GUILayout.Label( description0 );
	GUILayout.Label( description1 );
	
	GUILayout.TextArea( source0 );
	
	if ( GUILayout.Button( "Animate Group" ) && groupY < 1.0 )
	{
		animation["AnimateGroup"].speed = 1.0;
		animation.Play("AnimateGroup");
	}
	
	GUILayout.EndVertical();
	
	GUI.DragWindow( Rect( 0, 0, Screen.width, 20 ) );
}

function AutomaticLayoutAreaWindow()
{
	var description0 = "Use GUILayout.BeginArea() and GUILayout.EndArea() to define an area on the screen to constrain the automatic layout of controls.";
	var source0 = "function OnGUI () {\n	GUILayout.Button (\"I am not inside an Area\");\n	GUILayout.BeginArea (Rect (Screen.width/2, Screen.height/2, 300, 300));\n	GUILayout.Button (\"I am completely inside an Area\");\n	GUILayout.EndArea ();\n}";
	
	GUILayout.BeginVertical();
	
	GUILayout.Label( description0 );
	GUILayout.TextArea( source0 );
	showAreaSample = GUILayout.Toggle( showAreaSample, "Toggle Area Sample" );
	
	GUILayout.EndVertical();

	GUI.DragWindow( Rect( 0, 0, Screen.width, 20 ) );
}

function AutomaticLayoutGroupsWindow()
{
	var description0 = "Use GUILayout.BeginHorizontal() and GUILayout.EndHorizontal() to define a group that will align controls horizontally.";
	var source0 = "GUILayout.BeginHorizontal();\nfor ( var i = 0; i < 3; ++i )\n{\n	GUILayout.Button( \"Button \" + i );\n}\nGUILayout.EndHorizontal();";

	GUILayout.BeginVertical();
	
	GUILayout.Label( description0 );
	GUILayout.TextArea( source0 );

	GUILayout.BeginHorizontal();
	for ( var i = 0; i < 3; ++i )
	{
		GUILayout.Button( "Button " + i );
	}
	GUILayout.EndHorizontal();

	var description1 = "Use GUILayout.BeginVertical() and GUILayout.EndVertical() to define a group that will align controls vertically.";
	var source1 = "GUILayout.BeginVertical();\nfor ( var i = 0; i < 3; ++i )\n{\n	GUILayout.Button( \"Button \" + i );\n}\nGUILayout.EndVertical();";

	GUILayout.Label( description1 );
	GUILayout.TextArea( source1 );

		for ( i = 0; i < 3; ++i )
	{
		GUILayout.Button( "Button " + i );
	}

	GUILayout.EndVertical();
		
	GUI.DragWindow( Rect( 0, 0, Screen.width, 20 ) );
	
}