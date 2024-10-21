HTML DOM Event Properties
Property 	Description 	Belongs To
altKey 	Returns whether the "ALT" key was pressed when the mouse event was triggered 	MouseEvent
altKey 	Returns whether the "ALT" key was pressed when the key event was triggered 	KeyboardEvent, TouchEvent
animationName 	Returns the name of the animation 	AnimationEvent
bubbles 	Returns whether or not a specific event is a bubbling event 	Event
button 	Returns which mouse button was pressed when the mouse event was triggered 	MouseEvent
buttons 	Returns which mouse buttons were pressed when the mouse event was triggered 	MouseEvent
cancelable 	Returns whether or not an event can have its default action prevented 	Event
charCode 	Deprecated (Avoid using it)
changeTouches 	Returns a list of all the touch objects whose state changed between the previous touch and this touch 	TouchEvent
clientX 	Returns the horizontal coordinate of the mouse pointer, relative to the current window, when the mouse event was triggered 	MouseEvent, TouchEvent
clientY 	Returns the vertical coordinate of the mouse pointer, relative to the current window, when the mouse event was triggered 	MouseEvent, TouchEvent
clipboardData 	Returns an object containing the data affected by the clipboard operation 	ClipboardData
code 	Returns the code of the key that triggered the event 	KeyboardEvent
composed 	Returns whether the event is composed or not 	Event
ctrlKey 	Returns whether the "CTRL" key was pressed when the mouse event was triggered 	MouseEvent
ctrlKey 	Returns whether the "CTRL" key was pressed when the key event was triggered 	KeyboardEvent, TouchEvent
currentTarget 	Returns the element whose event listeners triggered the event 	Event
data 	Returns the inserted characters 	InputEvent
dataTransfer 	Returns an object containing the data being dragged/dropped, or inserted/deleted 	DragEvent, InputEvent
defaultPrevented 	Returns whether or not the preventDefault() method was called for the event 	Event
deltaX 	Returns the horizontal scroll amount of a mouse wheel (x-axis) 	WheelEvent
deltaY 	Returns the vertical scroll amount of a mouse wheel (y-axis) 	WheelEvent
deltaZ 	Returns the scroll amount of a mouse wheel for the z-axis 	WheelEvent
deltaMode 	Returns a number that represents the unit of measurements for delta values (pixels, lines or pages) 	WheelEvent
detail 	Returns a number that indicates how many times the mouse was clicked 	UiEvent
elapsedTime 	Returns the number of seconds an animation has been running 	AnimationEvent
elapsedTime 	Returns the number of seconds a transition has been running 	 
eventPhase 	Returns which phase of the event flow is currently being evaluated 	Event
getModifierState() 	Returns an array containing target ranges that will be affected by the insertion/deletion 	MouseEvent
inputType 	Returns the type of the change (i.e "inserting" or "deleting") 	InputEvent
isComposing 	Returns whether the state of the event is composing or not 	InputEvent, KeyboardEvent
isTrusted 	Returns whether or not an event is trusted 	Event
key 	Returns the key value of the key represented by the event 	KeyboardEvent
key 	Returns the key of the changed storage item 	StorageEvent
keyCode 	Deprecated (Avoid using it)
location 	Returns the location of a key on the keyboard or device 	KeyboardEvent
lengthComputable 	Returns whether the length of the progress can be computable or not 	ProgressEvent
loaded 	Returns how much work has been loaded 	ProgressEvent
metaKey 	Returns whether the "META" key was pressed when an event was triggered 	MouseEvent
metaKey 	Returns whether the "meta" key was pressed when the key event was triggered 	KeyboardEvent, TouchEvent
MovementX 	Returns the horizontal coordinate of the mouse pointer relative to the position of the last mousemove event 	MouseEvent
MovementY 	Returns the vertical coordinate of the mouse pointer relative to the position of the last mousemove event 	MouseEvent
newValue 	Returns the new value of the changed storage item 	StorageEvent
newURL 	Returns the URL of the document, after the hash has been changed 	HasChangeEvent
offsetX 	Returns the horizontal coordinate of the mouse pointer relative to the position of the edge of the target element 	MouseEvent
offsetY 	Returns the vertical coordinate of the mouse pointer relative to the position of the edge of the target element 	MouseEvent
oldValue 	Returns the old value of the changed storage item 	StorageEvent
oldURL 	Returns the URL of the document, before the hash was changed 	HasChangeEvent
onemptied 	When something bad happens and the media file is suddenly unavailable (like unexpectedly disconnects) 	 
pageX 	Returns the horizontal coordinate of the mouse pointer, relative to the document, when the mouse event was triggered 	MouseEvent
pageY 	Returns the vertical coordinate of the mouse pointer, relative to the document, when the mouse event was triggered 	MouseEvent
persisted 	Returns whether the webpage was cached by the browser 	PageTransitionEvent
propertyName 	Returns the name of the CSS property associated with the animation or transition 	AnimationEvent, TransitionEvent
pseudoElement 	Returns the name of the pseudo-element of the animation or transition 	AnimationEvent, TransitionEvent
region 		MouseEvent
relatedTarget 	Returns the element related to the element that triggered the mouse event 	MouseEvent
relatedTarget 	Returns the element related to the element that triggered the event 	FocusEvent
repeat 	Returns whether a key is being hold down repeatedly, or not 	KeyboardEvent
screenX 	Returns the horizontal coordinate of the mouse pointer, relative to the screen, when an event was triggered 	MouseEvent
screenY 	Returns the vertical coordinate of the mouse pointer, relative to the screen, when an event was triggered 	MouseEvent
shiftKey 	Returns whether the "SHIFT" key was pressed when an event was triggered 	MouseEvent
shiftKey 	Returns whether the "SHIFT" key was pressed when the key event was triggered 	KeyboardEvent, TouchEvent
state 	Returns an object containing a copy of the history entries 	PopStateEvent
storageArea 	Returns an object representing the affected storage object 	StorageEvent
target 	Returns the element that triggered the event 	Event
targetTouches 	Returns a list of all the touch objects that are in contact with the surface and where the touchstart event occured on the same target element as the current target element 	TouchEvent
timeStamp 	Returns the time (in milliseconds relative to the epoch) at which the event was created 	Event
total 	Returns the total amount of work that will be loaded 	ProgressEvent
touches 	Returns a list of all the touch objects that are currently in contact with the surface 	TouchEvent
transitionend 	A CSS transition has completed 	TransitionEvent
type 	Returns the name of the event 	Event
url 	Returns the URL of the changed item's document 	StorageEvent
which 	Deprecated (Avoid using it)
which 	Deprecated (Avoid using it)
view 	Returns a reference to the Window object where the event occurred 	UiEvent
x 	Alias for clientX 	MouseEvent
y 	Alias for clientY 	MouseEvent
