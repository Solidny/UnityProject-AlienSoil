#pragma strict
/**
 * Source code and text for this script has been adopted from (accessed 03-12-2012):
 * http://docs.unity3d.com/Documentation/Components/gui-ExtendingEditor.html
 */

@script ExecuteInEditMode()

// Attach this script to a game object that you want always facing a particular point in the scene.
var lookAtPoint = Vector3.zero;

function Update () 
{
	transform.LookAt( lookAtPoint );
}