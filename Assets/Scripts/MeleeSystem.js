#pragma strict

var Damage : int;
var Distance : float;
var MaxDistance : float = 1.5;
var System : Transform;

function Start ()
{
	Damage = 50;
}


function Update ()
{
	if(Input.GetButtonDown("Fire1"))
		{
			// Attack animation
			animation.Play("Attack");
			
		
		}
	if (animation.isPlaying == false)
		{
		animation.CrossFade("Idle");
		}
	if (Input.GetKey(KeyCode.LeftShift))
		{
		animation.CrossFade("Sprint");
		}
	if (Input.GetKeyUp(KeyCode.LeftShift))
		{
		animation.CrossFade("Idle");
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