#pragma strict


//Entering Aired Area
function OnTriggerEnter (other : Collider)
{
	if (other.tag == "Player")
	{
		PlayerStatsV2.Instance.SendMessage("Breath");
	}
}
// Exitimg Aired area
function OnTriggerExit (other : Collider)
{
	if (other.tag == "Player")
	{
		PlayerStatsV2.Instance.SendMessage("NoBreath");
	}
}