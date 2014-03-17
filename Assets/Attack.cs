using UnityEngine;
using System.Collections;

public class Attack : MonoBehaviour 
{
	
	[SerializeField]
	private Animator animator;
	[SerializeField]
	private float DirectionDampTime = .25f;

		
		
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
			if (Input.GetButton("Fire1"))
			{
				animator.SetBool ("Attack", true);	
			}
			else 
			{
				animator.SetBool ("Attack", false);		
			}
		}
	}
}
