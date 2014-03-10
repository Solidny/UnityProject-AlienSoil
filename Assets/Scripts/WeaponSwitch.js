#pragma strict

var Weapon1 : GameObject;
var Weapon2 : GameObject;
var testVar = 10;

function Update () {
	if (Input.GetKeyDown(KeyCode.Q))
	{
		SwapWeapons();
	}
}

function SwapWeapons ()
{
	if (Weapon1.active == true)
	{
		Weapon1.SetActiveRecursively(false);
		Weapon2.SetActiveRecursively(true);
	}
	else 
	{
		Weapon1.SetActiveRecursively(true);
		Weapon2.SetActiveRecursively(false);
	}
}