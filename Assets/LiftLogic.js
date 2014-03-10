#pragma strict

var Lift : Transform;
private var drawGUI = false;
private var liftIsDown = true;

function OnTriggerEnter (theCollider : Collider)
{
	if (theCollider.tag == "Player")
	{
		if (liftIsDown == true)
		{
			Lift.animation.CrossFade("LiftUp");
			liftIsDown = false;
			yield WaitForSeconds(3);
		}
		if (liftIsDown == false)
		{
			Lift.animation.CrossFade("LiftDown");
			liftIsDown = true;
			yield WaitForSeconds(3);
		}
	}
}