#pragma strict

private var masterVolume : float = 1.0;
private var sfxVolume : float = 1.0;

function OnGUI()
{
	var groupWidth = 380;
	var groupHeight = 110;
	
	var screenWidth = Screen.width;
	var screenHeight = Screen.height;
	
	var groupX = ( screenWidth - groupWidth ) / 2;
	var groupY = ( screenHeight - groupHeight ) / 2;
	
	GUI.BeginGroup( Rect( groupX, groupY, groupWidth, groupHeight ) );
	GUI.Box( Rect( 0, 0, groupWidth, groupHeight ), "Audio Settings" );
	
	GUI.Label( Rect( 10, 30, 100, 30 ), "Master Volume" );
	masterVolume = GUI.HorizontalSlider( Rect( 120, 35, 200, 30 ), masterVolume, 0.0, 1.0 );
	GUI.Label( Rect( 330, 30, 50, 30 ), "(" + masterVolume.ToString("f2") + ")");

	GUI.Label( Rect( 10, 70, 100, 30 ), "Effect Volume" );
	sfxVolume = GUI.HorizontalSlider( Rect( 120, 75, 200, 30 ), sfxVolume, 0.0, 1.0 );
	GUI.Label( Rect( 330, 70, 50, 30 ), "(" + sfxVolume.ToString("f2") + ")");

	GUI.EndGroup();	
}
