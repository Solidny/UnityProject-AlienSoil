var Distance;
var Target : Transform;
var lookAtDistance = 25.0;
var attackRange = 1.5;
var chaseRange = 15.0;
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
			renderer.material.color = Color.green;
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
	renderer.material.color = Color.yellow;
}
function chase ()
{
	renderer.material.color = Color.red;
	
	moveDirection = transform.forward;
	moveDirection *= moveSpeed;
	moveDirection.y -= gravity * Time.deltaTime;
	
	controller.Move(moveDirection * Time.deltaTime);
	
}
function attack ()
{
	if (Time.time > attackTime)
	{
		Target.SendMessage("ApplyDamage", Damage);
		Debug.Log("Enemy Attack");
		attackTime = Time.time + attackRepeatTime;
	}
}

function ApplyDamage ()
{
	chaseRange += 30;
	moveSpeed += 2;
	lookAtDistance += 40;
}