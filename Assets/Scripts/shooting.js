#pragma strict

var Bullet : Rigidbody;
var bulletSpeed = 20;


function Update () 
{
	if (Input.GetMouseButtonDown(0))
	{
		var clone = Instantiate(Bullet, transform.position, transform.rotation);
		clone.velocity = transform.TransformDirection(Vector3(0, 0, bulletSpeed));
		
		Destroy (clone.gameObject, 3);
	}
}