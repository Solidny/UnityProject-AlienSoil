#pragma strict

private var drawGUI = false;
private var fWord = false;

function Update()
{
	if (Input.GetKeyDown(KeyCode.F) && drawGUI == true && fWord == true)
	{
		drawGUI = false;
	}
	else if (Input.GetKeyDown(KeyCode.F) && drawGUI == false && fWord == true)
	{
		drawGUI = true;
	}
}

// Entering Shop Trigger
function OnTriggerEnter (theCollider : Collider)
{
	if (theCollider.tag == "Player")
	{
		drawGUI = true;
		fWord = true;
	}
}
// Exitimg Shop Trigger
function OnTriggerExit (theCollider : Collider)
{
	if (theCollider.tag == "Player")
	{
		fWord = false;
		drawGUI = false;
	}
}

 
function OnGUI()
{   
	if (drawGUI == true)
	{
		GUI.Box (Rect (Screen.width*0.5-150, 300, 300, 30), "Press F to turn on the upgrade menu");
	}
}
