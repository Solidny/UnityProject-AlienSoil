#pragma strict

var CrystalHealth : int = 150;
var Target : Transform;
var upgrade : int = CrystalHealth/2;
static var Instance : CrystalHealth;
function Awake() {
        Instance = this;
    }
    
function ApplyDestruction (Damage : int)
{
	CrystalHealth -= Damage;
	if (CrystalHealth <= 0)
	{
		DestroyCrystal();
	}
}

function DestroyCrystal()
{
	Destroy (gameObject);
	Target.SendMessage("GainCrystals", SendMessageOptions.DontRequireReceiver);
}

function Upgrade ()
{
	CrystalHealth -= upgrade;
}