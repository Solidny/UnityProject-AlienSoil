#pragma strict
/**
 * Source code and text for this script has been adopted from (accessed 03-12-2012):
 * http://docs.unity3d.com/Documentation/Components/gui-ExtendingEditor.html
 */
@script ExecuteInEditMode()

private var windowRect0 = Rect( 20, 20, 500, 0 );
private var windowRect1 = Rect( 40, 40, 500, 0 );

function OnGUI()
{
	GUIConstants.DrawMainMenu();
	
	windowRect0 = GUILayout.Window( 0, windowRect0, EditorWindowsWindow, "Editor Windows" );
	windowRect1 = GUILayout.Window( 1, windowRect1, InspectorEditorWindow, "Inspector Editor" );

}

function EditorWindowsWindow()
{
	var description0 = "You can create custom editor windows that will be availble in Unity.";
	var description1 = "To create a custom editor window you must follow these steps:\n	* Create a script class that derives from EditorWindow,\n	* Save the script in a folder called Editor,\n	* Override the OnGUI function to implemnt the editor window.";
	
	var source0 = "class MyWindow extends EditorWindow {\n    @MenuItem (\"Window/My Window\")\n    static function ShowWindow () {\n        EditorWindow.GetWindow (MyWindow);\n    }\n\n    function OnGUI () {\n        // The actual window code goes here\n    }\n}";

	var description2 = "To open the custom editor window, select Window > My Window from the main menu.";
	var description3 = "You can use the GUI and GUILayout classes in your custom windows OnGUI function. You can also use the editor-only classes EditorGUI and EditorGUILayout.";
	
	GUILayout.BeginVertical();
	
	GUILayout.Label( description0 );
	GUILayout.Label( description1 );
	GUILayout.TextArea( source0 );
	GUILayout.Label( description2 );
	GUILayout.Label( description3 );
				
	GUILayout.EndVertical();
	
	GUI.DragWindow( Rect( 0, 0, Screen.width, 20 ) );	
}

function InspectorEditorWindow()
{
	GUI.DragWindow( Rect( 0, 0, Screen.width, 20 ) );

	var description0 = "You can also customize the inspector that is used for commonly used components or script components.";
	var description1 = "First, create a script class that derives from Editor class. This script must be saved to a folder called Editor.";
	var description2 = "You must also decorate the class with the @CustomEditor attribute that defines which component this editor is used to render in the inspector.";
	var description3 = "Override the OnInspectorGUI() function in your Editor class to create the GUI that will be used for this component in the inspector.";

	var source0 = "@CustomEditor(LookAtPoint)\n@CanEditMultipleObjects\nclass LookAtPointEditor extends Editor {\n	var lookAtPointProp : SerializedProperty;\n\n	function OnEnable()	{\n		lookAtPointProp = serializedObject.FindProperty(\"lookAtPoint\");\n	}\n\n	function OnInspectorGUI() {\n		 // Update the serializedProperty\n		// Always do this in the beginning of OnInspectorGUI.\n		serializedObject.Update();\n\n		EditorGUILayout.PropertyField( lookAtPointProp, GUIContent(\"Look at Point\") );\n\n		// Apply changes to the serializedProperty.\n		// Always do this in the end of OnInspectorGUI.\n		serializedObject.ApplyModifiedProperties();\n	}\n}";
	
	var description4 = "To see the LookAtPointEditor at work, create a new GameObject and assign the LookAtPoint.js script to that GameObject. Or select Component > Script > Look At Point from the main menu to add the script to the selected GameObject.";
	GUILayout.BeginVertical();
	
	GUILayout.Label( description0 );
	GUILayout.Label( description1 );
	GUILayout.Label( description2 );
	GUILayout.Label( description3 );
	GUILayout.TextArea( source0 );
	GUILayout.Label( description4 );
	
	GUILayout.EndVertical();
	
	GUI.DragWindow( Rect( 0, 0, Screen.width, 20 ) );		
}