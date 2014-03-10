#pragma strict

var Heat : GameObject;
static var Instance : Heating;
 
function Awake() 
{
	Instance = this;
}
function ImmuneHeat ()
{
	Heat.SetActive(false);
}