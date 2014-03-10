#pragma strict

var Effect : Transform;
var Damage = 100;
var particleLength = 1.0;

function Update () 
{
	var hit : RaycastHit;
	var ray : Ray = Camera.main.ScreenPointToRay(Vector3(Screen.width*0.5, Screen.height*0.5, 0));
	
	if (Input.GetMouseButtonDown(0))
	{
		if (Physics.Raycast (ray, hit, 100))
		{
			var particleClone = Instantiate(Effect, hit.point, Quaternion.LookRotation(hit.normal));
			Destroy(particleClone.gameObject, particleLength);
			hit.transform.SendMessage("ApplyDamage", Damage, SendMessageOptions.DontRequireReceiver);
		}
	}
}