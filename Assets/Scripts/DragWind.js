#pragma strict
 
// The initial position and size of the window.
private var windowRect0 = Rect( 20, 20, 150, 0 );
 
function OnGUI () 
{
    // Render the window with ID 0.
    windowRect0 = GUILayout.Window( 0, windowRect0, WindowFunction, "Draggable Window" );   
}
 
// Window 0's callback function
function WindowFunction()
{
    GUILayout.Label( "This is a draggable window!" );
     
    // The drag-strip for the window. 
    // Coordinates are relative to the top-left of the window.
    GUI.DragWindow( Rect( 0, 0, 150, 20 ) );
}