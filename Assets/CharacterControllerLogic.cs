using UnityEngine;
using System.Collections;

public class CharacterControllerLogic : MonoBehaviour 
{
	
	[SerializeField]
	private Animator animator;
	[SerializeField]
	private float DirectionDampTime = .25f;
	private float speed = 0.0f;
	private float h = 0.0f;
	private float v = 0.0f;
	
		
		
	// Use this for initialization
	void Start () 
	{	
		animator = GetComponent<Animator>();
		
		if (animator.layerCount >= 2)
		{
			animator.SetLayerWeight(1, 1);
		}
	
	}
	
	// Update is called once per frame
	void Update () 
	{
		if (animator)
		{
			h = Input.GetAxis("Horizontal");
			v = Input.GetAxis ("Vertical");
			speed = new Vector2 (h, v).sqrMagnitude;
			
			animator.SetFloat("Speed", speed);
			if (Input.GetKey(KeyCode.LeftShift))
			{
				animator.SetFloat ("WalkSpeed", 1, DirectionDampTime, Time.deltaTime);	
			}
			else 
			{
				animator.SetFloat ("WalkSpeed", 0, DirectionDampTime, Time.deltaTime);	
			}
		}
	}
}
