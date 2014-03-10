#pragma strict

private var equalizerValues = new float[10];

function Start()
{
	var length : float = equalizerValues.Length;
	for( var i = 0; i < equalizerValues.Length; ++i )
	{
		var equilizerValue : float = i / length;
		equalizerValues[i] = 1.0 - Mathf.Sin( equilizerValue * Mathf.PI ); // * equilizerValue;
	}
}

function OnGUI() 
{
	var groupWidth = 320;
	var groupHeight = 260;
	
	var screenWidth = Screen.width;
	var screenHeight = Screen.height;
	
	var groupX = ( screenWidth - groupWidth ) / 2;
	var groupY = ( screenHeight - groupHeight ) / 2;
	
	GUI.BeginGroup( Rect( groupX, groupY, groupWidth, groupHeight ) );
	GUI.Box( Rect( 0, 0, groupWidth, groupHeight ), "Equalizer" );

	for( var i = 0; i < equalizerValues.Length; ++i )
	{
		equalizerValues[i] = GUI.VerticalSlider( Rect( ( i * 30 ) + 20, 30, 20, 200), equalizerValues[i], 0.0, 1.0 );
	}

	GUI.EndGroup();
}
