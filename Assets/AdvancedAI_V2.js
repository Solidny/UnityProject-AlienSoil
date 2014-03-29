var Distance;
var Target : Transform;
var lookAtDistance = 45.0;
var attackRange = 5;
var chaseRange = 25.0;
var moveSpeed = 5.0;
var Damping = 6.0;
var attackRepeatTime = 1;
var Damage = 20;
private var attackTime : float;

var controller : CharacterController;
var gravity : float = 20.0;
private var moveDirection : Vector3 = Vector3.zero;

function Start ()
{
	attackTime = Time.time;
	animation.Play("RobIdle");
}

function Update ()
{
	if (RespawnMenuV2.playerIsDead == false)
	{
		Distance = Vector3.Distance(Target.position, transform.position);
		
		if (Distance < lookAtDistance)
		{
			lookAt();
		}
		if (Distance > lookAtDistance)
		{
			animation.Play("RobIdle");
		}
		if (Distance < attackRange)
		{
			attack();
		}
		else if (Distance < chaseRange)
		{
			chase ();
		}
	}
}
function lookAt ()
{
	var rotation = Quaternion.LookRotation(Target.position - transform.position);
	transform.rotation = Quaternion.Slerp(transform.rotation, rotation, Time.deltaTime * Damping);
	
}
function chase ()
{

	moveDirection = transform.forward;
	moveDirection *= moveSpeed;
	moveDirection.y -= gravity * Time.deltaTime;
	animation.CrossFade("RobMove");
	controller.Move(moveDirection * Time.deltaTime);
	
}
function attack ()
{
	if (Time.time > attackTime)
	{
		Debug.Log("Enemy Attack");
		attackTime = Time.time + attackRepeatTime;
		animation.CrossFade("RobAttack1");
	}
}
function hit ()
{
	Target.SendMessage("ApplyDamage", Damage);
}
//function ApplyDamage ()
//{
//	chaseRange += 30;
//	moveSpeed += 2;
//	lookAtDistance += 40;
//}