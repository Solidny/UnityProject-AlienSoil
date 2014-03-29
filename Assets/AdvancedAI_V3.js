var Distance;
var Target : Transform;
var Player : Transform;
var attackRange = 4;
var chaseRange = 35.0;
var harvestRange = 20;
var objectiveRange = 1000;
var moveSpeed = 5.0;
var Damping = 6.0;
var attackRepeatTime = 1;
var Damage = 20;
static var harvesting = true;
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
	if (harvesting == true)
	{
		Distance = Vector3.Distance(Target.position, transform.position);
		
		if (Distance < harvestRange)
		{
			harvest ();
		}
		else if (Distance < objectiveRange)
		{
			toHarvest ();
		}
	}
	else if (harvesting == false)
	{
		Distance = Vector3.Distance(Player.position, transform.position);
		
		if (Distance < attackRange)
		{
			attack ();
		}
		else if (Distance < chaseRange)
		{
			chase ();
		}
		if (Distance > chaseRange)
		{
			harvesting = true;
		}
	}
	
}

function toHarvest ()
{
	var rotation = Quaternion.LookRotation(Target.position - transform.position);
	transform.rotation = Quaternion.Slerp(transform.rotation, rotation, Time.deltaTime * Damping);
	moveDirection = transform.forward;
	moveDirection *= moveSpeed;
	moveDirection.y -= gravity * Time.deltaTime;
	animation.CrossFade("RobMove");
	controller.Move(moveDirection * Time.deltaTime);
}
function chase ()
{
	var rotation = Quaternion.LookRotation(Player.position - transform.position);
	transform.rotation = Quaternion.Slerp(transform.rotation, rotation, Time.deltaTime * Damping);
	moveDirection = transform.forward;
	moveDirection *= moveSpeed;
	moveDirection.y -= gravity * Time.deltaTime;
	animation.CrossFade("RobMove");
	controller.Move(moveDirection * Time.deltaTime);
	
}
function harvest ()
{
	if (Time.time > attackTime)
	{
		Target.SendMessage("ApplyDamage", Damage);
		Debug.Log("Enemy Attack");
		attackTime = Time.time + attackRepeatTime;
		animation.CrossFade("RobAttack");
	}
}
function attack ()
{
	var rotation = Quaternion.LookRotation(Player.position - transform.position);
	transform.rotation = Quaternion.Slerp(transform.rotation, rotation, Time.deltaTime * Damping);
	if (Time.time > attackTime)
	{
		Debug.Log("Enemy Attack");
		animation.CrossFade("RobAttack");
		yield WaitForSeconds(2);
		Player.SendMessage("ApplyDamage", Damage);
		attackTime = Time.time + attackRepeatTime;
	}
}
