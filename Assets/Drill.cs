using UnityEngine;
using System.Collections;

//CHANGE attack to Drill
public class Drill : MonoBehaviour 
{
	
	[SerializeField]
	private Animator animator;
	[SerializeField]
	float DirectionDampTime = .01f;

		
		
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
				animator.SetFloat ("Drill", 1, DirectionDampTime, Time.deltaTime);
			}
			else 
			{
				animator.SetFloat ("Drill", 0, DirectionDampTime, Time.deltaTime);	
			}
		}
	}
}
