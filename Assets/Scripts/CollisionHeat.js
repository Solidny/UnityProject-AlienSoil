#pragma strict
private var burnTime : float;
var burnRepeatTime = 1;
var burn = false;

function Start ()
{
	burnTime = Time.time;
}

function Update ()
{
	if (burn == true)
	{
		burning();
		burn = false;
	}
}

function OnTriggerStay (other : Collider) 
{
	if (other.tag == "Player")
	{
		burn = true;
	}
}


function burning()
{
	if (Time.time > burnTime)
	{	
		PlayerStatsV2.Instance.SendMessage("ApplyDamage", 20);
		burnTime = Time.time + burnRepeatTime;
	}
}