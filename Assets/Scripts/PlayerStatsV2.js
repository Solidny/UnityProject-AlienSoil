#pragma strict

var Health : int;
var MaxHealth : int = 100;
var Damage : int;
var Crystals : int;
private var drawGUI = true;
var gainCrystals : int = 150;
var Oxygen : int;
var MaxOxygen : int = 100;
var oxygenWaste : float;
var oxygenRate : int = 1;
// controls variables
var lookAround01 : MouseLook;
var lookAround02 : MouseLook;
var charController : CharacterController;
private var noAir = true;
//var only for shop

static var Instance : PlayerStatsV2;
 // Makes the file an instance
function Awake() 
{
	Instance = this;
}
    
function Start ()
{
	Health = MaxHealth;
	//Crystals = 0;
	Oxygen = MaxOxygen;
	oxygenWaste = Time.time;
	// Link to controls 
	lookAround01 = gameObject.GetComponent(MouseLook);
	lookAround02 = GameObject.Find("MainCamera").GetComponent(MouseLook);
	charController = gameObject.GetComponent(CharacterController);
}
function Update ()
{
	if (noAir == true)
	{
		burnOxygen ();
	}
}
// Damage to player
function ApplyDamage ()
{
	Health -= Damage;
	if (Health <= 0)
	{
		Dead();
	}
}
// Burning Oxygen
function burnOxygen ()
{
	if (Time.time > oxygenWaste)
	{	
		oxygenWaste = Time.time + oxygenRate;
		Oxygen -= oxygenRate;
	}
	if (Oxygen == 0)
	{
		Dead();
	}
}

// Player dies
function Dead()
{
	RespawnMenuV2.playerIsDead = true;
	Debug.Log("You're fucking dead");
}
// Stats on respawn
function RespawnStats ()
{
	Health = MaxHealth;
}
// Gaining crystals
function GainCrystals ()
{
	Crystals += gainCrystals;
}
// Games HUD
function OnGUI ()
{
	if (drawGUI == true)
	{
	//Health indicator
	GUI.Box (Rect (Screen.width*0.1, 10, 102, 22), "Health " + Health);
	// Number of crystals indicator
	GUI.Box (Rect (Screen.width*0.3, 10, 102, 22), "Crystals " + Crystals);
	// Oxygen indicator
	GUI.Box (Rect (Screen.width*0.5, 10, 102, 22), "Oxygen " + Oxygen);
	}

}
// Upgrading Max Health
function MaxHealthUp()
{
	if (Crystals >= 100)
	{
		Crystals -= 100;
		MaxHealth += 20;
		Health = MaxHealth;
	} 
	else if (Crystals <= 100)
	{
		print ("Not enough crystals!");
		UpgradeSystem.Instance.SendMessage("NotEnough");
	}
}
// Upgrading Max Oxygen
function MaxOxygenUp()
{
	if (Crystals >= 100)
	{
		Crystals -= 100;
		MaxOxygen += 50;
		Oxygen = MaxOxygen;
	} 
	else if (Crystals <= 100)
	{
		print ("Not enough crystals!");
		UpgradeSystem.Instance.SendMessage("NotEnough");
	}
}
// DAMAGE UGRADE
function DamageUp(Price : int)
{
	if (Crystals >= Price)
	{
		Crystals -= Price;
		EnemyHealth.Instance.SendMessage("Downgrade");
		CrystalHealth.Instance.SendMessage("Upgrade");
	} 
	else if (Crystals <= 100)
	{
		print ("Not enough crystals!");
		UpgradeSystem.Instance.SendMessage("NotEnough");
	}
}
//Turning controls off while in menu
function Menu()
{
	lookAround01.enabled = false;
	lookAround02.enabled = false;
	charController.enabled = false;
	gameObject.SendMessage("TurnOff", SendMessageOptions.DontRequireReceiver);
}
//Turning controls back on
function MenuOff()
{
	gameObject.SendMessage("TurnOn", SendMessageOptions.DontRequireReceiver);
	lookAround01.enabled = true;
	lookAround02.enabled = true;
	charController.enabled = true;
}
function Breath()
{
	noAir = false;
	Oxygen = MaxOxygen;
}
function NoBreath()
{
	noAir = true;
}
//function Pay(Price : int)
//{
//	Crystals -= Price;
//}