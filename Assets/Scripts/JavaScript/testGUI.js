//#pragma strict
// 
//var texture : Texture;
//var text : String;
//var tooltip : String;
// 
//function OnGUI()
//{
//    var buttonWidth = 100;
//    var buttonHeight = 50;
//     
//    var buttonX = ( Screen.width - buttonWidth ) / 2.0f;
//    var buttonY = ( Screen.height - buttonHeight ) / 2.0f;
//     
//    // Draw a button with text and an image in the center of the screen.
//    if ( GUI.Button( Rect( buttonX, buttonY, buttonWidth, buttonHeight ),
//                     GUIContent( text, texture, tooltip ) ) )
//    {
//        // Print some text to the debug console
//        Debug.Log("Thanks!");
//    }
//}
//function OnGUI()
//{
//    var groupWidth = 120;
//    var groupHeight = 150;
//     
//    var screenWidth = Screen.width;
//    var screenHeight = Screen.height;
//     
//    var groupX = ( screenWidth - groupWidth ) / 2;
//    var groupY = ( screenHeight - groupHeight ) / 2;
//     
//    GUI.BeginGroup( Rect( groupX, groupY, groupWidth, groupHeight ) );
//    GUI.Box( Rect( 0, 0, groupWidth, groupHeight ), "Level Select" );
//     
//    if ( GUI.Button( Rect( 10, 30, 100, 30 ), "Level 1" ) )
//    {
//        Application.LoadLevel(1);
//    }
//    if ( GUI.Button( Rect( 10, 70, 100, 30 ), "Level 2" ) )
//    {
//        Application.LoadLevel(2);
//    }
//    if ( GUI.Button( Rect( 10, 110, 100, 30 ), "Level 3" ) )
//    {
//        Application.LoadLevel(3);
//    }
//     
//    GUI.EndGroup();
//}
#pragma strict
 
private var firstName : String = "First Name";
private var lastName : String = "Last Name";
private var age : uint = 0;
private var submitted : boolean = false;
 
private var windowRect0 : Rect;
 
function Start()
{
}
 
function OnGUI()
{
    var screenWidth = Screen.width;
    var screenHeight = Screen.height;
     
    var windowWidth = 300;
    var windowHeight = 180;
    var windowX = ( screenWidth - windowWidth ) / 2;
    var windowY = ( screenHeight - windowHeight ) / 2;
     
    // Postion the window in the center of the screen.
    windowRect0 = Rect( windowX, windowY, windowWidth, windowHeight );
 
    GUILayout.Window( 0, windowRect0, UserForm, "User Information" );
}
 
function UserForm()
{
    GUILayout.BeginVertical();
     
    // First Name
    GUILayout.BeginHorizontal();
    GUILayout.Label("First Name", GUILayout.Width(80));
    firstName = GUILayout.TextField( firstName );
    GUILayout.EndHorizontal();
     
    // Last Name
    GUILayout.BeginHorizontal();
    GUILayout.Label("Last Name", GUILayout.Width(80));
    lastName = GUILayout.TextField( lastName );
    GUILayout.EndHorizontal();
     
    // Age
    GUILayout.BeginHorizontal();
    GUILayout.Label("Age", GUILayout.Width(80));
    var ageText = GUILayout.TextField( age.ToString() );
    var newAge = age;
    if ( uint.TryParse( ageText, newAge ) )
    {
        age = newAge;
    }
    GUILayout.EndHorizontal();
     
    if ( GUILayout.Button( "Submit" ) )
    {
        submitted = true;
    }
    if ( GUILayout.Button( "Reset" ) )
    {
        firstName = "First Name";
        lastName = "Last Name";
        age = 0;
        submitted = false;
    }
     
    if ( submitted )
    {
        GUILayout.Label("Submitted!");
    }
     
    GUILayout.EndVertical();
}