#pragma strict

var Damage : int;
var Distance : float;
var MaxDistance : float = 1.5;
var System : Transform;
var attackRepeatTime = 1;
private var attackTime : float;

function Start ()
{
	Damage = 20;
	attackTime = Time.time;
}

function Update () 
{
	if(Input.GetButton("Fire1"))
	{
		print("damage player");
		if (Time.time > attackTime)
		{	
			AttackDamage();
			attackTime = Time.time + attackRepeatTime;
		}
	}
}
function AttackDamage ()
{
		// Attack function	
		var hit : RaycastHit;
			if (Physics.Raycast (System.transform.position, System.transform.TransformDirection(Vector3.forward), hit))
			{
				Distance = 	hit.distance;
				if (Distance < MaxDistance)
				{
				hit.transform.SendMessage("ApplyDamage", Damage, SendMessageOptions.DontRequireReceiver);
				hit.transform.SendMessage("ApplyDestruction", Damage, SendMessageOptions.DontRequireReceiver);
				}
			}
}