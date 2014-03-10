#pragma strict

var Price1 : int = 100;
private var drawShopGUI = false;
private var shopGUI = false;
private var notEnough = false;

static var Instance : UpgradeSystem;
 
function Awake() {
        Instance = this;
    }

function Update()
{
	if (Input.GetKeyDown(KeyCode.F) && shopGUI == true && drawShopGUI == true)
	{
		shopGUI = false;
		PlayerStatsV2.Instance.SendMessage("MenuOff");
	}
	else if (Input.GetKeyDown(KeyCode.F) && shopGUI == false && drawShopGUI == true)
	{
		shopGUI = true;
		PlayerStatsV2.Instance.SendMessage("Menu");
	}
}
// Entering Shop area
function OnTriggerEnter (theCollider : Collider)
{
	if (theCollider.tag == "Player")
	{
		drawShopGUI = true;
	}
}
// Exitimg Shop area
function OnTriggerExit (theCollider : Collider)
{
	if (theCollider.tag == "Player")
	{
		drawShopGUI = false;
		notEnough = false;
	}
}


function OnGUI()
{   
	if (shopGUI == true && drawShopGUI == true)
	{
		// Button - Drill upgrade
		if (GUI.Button (Rect (450, 300, 300, 100), "Drill upgrade"))
		{
			DrillUpgrade();
		}
		GUI.Label (Rect (460, 360, 300, 50), "Raises drill power against enemies and rocks");
		GUI.Label (Rect (460, 372, 300, 50), "COST: 100 crystals");
		
		// Button - Oxygen upgrade
		if (GUI.Button (Rect (450, 200, 300, 100), "Oxygen upgrade"))
		{
			OxygenUpgrade();
		}
		
		// Button - Life Upgrade
		if (GUI.Button (Rect (150, 200, 300, 100), "Life Upgrade"))
		{
			LifeUpgrade();
		}
		// Description of Life Upgrade
		GUI.Label (Rect (160, 260, 300, 50), "Raises max health by 20");
		GUI.Label (Rect (160, 272, 300, 50), "COST: 100 crystals");
		
		// Button Armor Upgrade
		if (GUI.Button (Rect (150, 300, 300, 100), "Armor Upgrade"))
		{
			HeatImmune();
		}
		// Description of Armor Upgrade
		GUI.Label (Rect (160, 360, 300, 50), "Gives immunity to heat");
		GUI.Label (Rect (160, 372, 300, 50), "COST: 100 crystals");
		
		
		// Info about quitting the menu
		GUI.Box (Rect (150, 420, 300, 40), "Press F to quit the menu");
		// Message if player hasn't got enough resources
		if (notEnough == true)
		{
			GUI.Box (Rect (770, 350, 150, 30), "Not enough CRYSTALS");
		}
	}
}
// LIFE
function LifeUpgrade()
{
	PlayerStatsV2.Instance.SendMessage("MaxHealthUp");
}
// DRILL
function DrillUpgrade()
{
	PlayerStatsV2.Instance.SendMessage("DamageUp", Price1);
}
//ARMOR
function HeatImmune()
{
	Heating.Instance.SendMessage("ImmuneHeat");
}
// OXYGEN
function OxygenUpgrade()
{
	PlayerStatsV2.Instance.SendMessage("MaxOxygenUp");
}
// MONEY
function  NotEnough ()
{
	if (drawShopGUI == true)
	{
		notEnough = true;
	}
}

