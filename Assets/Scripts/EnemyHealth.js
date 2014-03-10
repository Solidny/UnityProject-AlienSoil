#pragma strict

var Health = 100;
var upgrade : int = Health/2;
static var Instance : EnemyHealth;
 
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
	Destroy (gameObject);
}

function Downgrade()
{
	Health -= upgrade;
}