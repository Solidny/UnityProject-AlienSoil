#pragma strict
var script : AdvancedAI_V2; 
var Health = 100;
var upgrade : int = Health/2;
static var Instance : EnemyHealth;
 
 
 
function Start() 
{
	script = GetComponent(AdvancedAI_V2); 
	script.enabled = true;
}
function Awake() {
        Instance = this;
    }


function ApplyDamage (Damage : int)
{
	Health -= Damage;
	if (Health <= 0)
	{
		Dead();
	}
}

function Dead()
{
	animation.Play("RobDead");
	script.enabled = false;
	yield WaitForSeconds(3);
	Destroy (gameObject);
}


function Downgrade()
{
	Health -= upgrade;
}