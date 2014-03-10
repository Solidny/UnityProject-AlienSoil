#pragma strict

var buttonStyle : GUIStyle;

function OnGUI()
{
//	var centerScreen = Vector3( Screen.width, Screen.height, 0 )/2;
//	GUI.matrix = Matrix4x4.TRS( centerScreen, Quaternion.identity, Vector3.one) * Matrix4x4.TRS( Vector3.zero, Quaternion.AngleAxis( Time.time * 90, Vector3.forward ), Vector3.one ) * Matrix4x4.TRS( -centerScreen, Quaternion.identity, Vector3.one);

	var groupWidth = 120;
	var groupHeight = 150;
	
	var screenWidth = Screen.width;
	var screenHeight = Screen.height;
	
	var groupX = ( screenWidth - groupWidth ) / 2;
	var groupY = ( screenHeight - groupHeight ) / 2;
	
	GUI.BeginGroup( Rect( groupX, groupY, groupWidth, groupHeight ) );
	GUI.Box( Rect( 0, 0, groupWidth, groupHeight ), "Level Select" );
	
	if ( GUI.Button( Rect( 10, 30, 100, 30 ), "Level 1", buttonStyle ) )
	{
		Application.LoadLevel(1);
	}
	if ( GUI.Button( Rect( 10, 70, 100, 30 ), "Level 2", buttonStyle ) )
	{
		Application.LoadLevel(2);
	}
	if ( GUI.Button( Rect( 10, 110, 100, 30 ), "Level 3", buttonStyle ) )
	{
		Application.LoadLevel(3);
	}
	
	GUI.EndGroup();
}