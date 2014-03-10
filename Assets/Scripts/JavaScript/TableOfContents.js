#pragma strict

@script ExecuteInEditMode()

class ButtonInfo
{
	var buttonName : String;
	var levelName : String;
	
	function ButtonInfo( name : String, level : String )
	{
		this.buttonName = name;
		this.levelName = level;
	}
}

private var buttons : ButtonInfo[] =
[
	ButtonInfo("GUI Basics", "GUIBasics"),
	ButtonInfo("Controls", "Controls"),
	ButtonInfo("Customization","Customization"),
	ButtonInfo("Layout Modes","Layout"),
	ButtonInfo("Extending Unity Editor","ExtendingTheEditor")
];

function OnGUI()
{
	var buttonHeight = 50;
	
	var boxWidth = 300;
	var boxHeight = buttonHeight * buttons.Length + 55;
	var boxX = ( Screen.width - boxWidth ); // / 2.0;
	var boxY = ( Screen.height - boxHeight ); // / 2.0;
	
	GUI.Box( Rect(boxX, boxY, boxWidth, boxHeight ), "Contents" );

	GUILayout.BeginArea( Rect( boxX + 10, boxY + 25, boxWidth - 20, boxHeight - 35 ) );
	
	GUILayout.BeginVertical();
	
	for( var button in buttons )
	{
		if( GUILayout.Button( button.buttonName, GUILayout.Height(buttonHeight) ) )
		{
			Application.LoadLevel( button.levelName );
		}
	}
	GUILayout.EndVertical();
		
	GUILayout.EndArea();	
	
}