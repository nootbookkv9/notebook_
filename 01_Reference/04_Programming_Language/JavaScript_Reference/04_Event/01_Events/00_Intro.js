Event 	Occurs When 	Belongs To
abort 	The loading of a media is aborted 	UiEvent, Event
afterprint 	A page has started printing 	Event
animationend 	A CSS animation has completed 	AnimationEvent
animationiteration 	A CSS animation is repeated 	AnimationEvent
animationstart 	A CSS animation has started 	AnimationEvent
beforeprint 	A page is about to be printed 	Event
beforeunload 	Before a document is about to be unloaded 	UiEvent, Event
blur 	An element loses focus 	FocusEvent
canplay 	The browser can start playing a media (has buffered enough to begin) 	Event
canplaythrough 	The browser can play through a media without stopping for buffering 	Event
change 	The content of a form element has changed 	Event
click 	An element is clicked on 	MouseEvent
contextmenu 	An element is right-clicked to open a context menu 	MouseEvent
copy 	The content of an element is copied 	ClipboardEvent
cut 	The content of an element is cut 	ClipboardEvent
dblclick 	An element is double-clicked 	MouseEvent
drag 	An element is being dragged 	DragEvent
dragend 	Dragging of an element has ended 	DragEvent
dragenter 	A dragged element enters the drop target 	DragEvent
dragleave 	A dragged element leaves the drop target 	DragEvent
dragover 	A dragged element is over the drop target 	DragEvent
dragstart 	Dragging of an element has started 	DragEvent
drop 	A dragged element is dropped on the target 	DragEvent
durationchange 	The duration of a media is changed 	Event
ended 	A media has reach the end ("thanks for listening") 	Event
error 	An error has occurred while loading a file 	ProgressEvent, UiEvent, Event
focus 	An element gets focus 	FocusEvent
focusin 	An element is about to get focus 	FocusEvent
focusout 	An element is about to lose focus 	FocusEvent
fullscreenchange 	An element is displayed in fullscreen mode 	Event
fullscreenerror 	An element can not be displayed in fullscreen mode 	Event
hashchange 	There has been changes to the anchor part of a URL 	HashChangeEvent
input 	An element gets user input 	InputEvent, Event
invalid 	An element is invalid 	Event
keydown 	A key is down 	KeyboardEvent
keypress 	A key is pressed 	KeyboardEvent
keyup 	A key is released 	KeyboardEvent
load 	An object has loaded 	UiEvent, Event
loadeddata 	Media data is loaded 	Event
loadedmetadata 	Meta data (like dimensions and duration) are loaded 	Event
loadstart 	The browser starts looking for the specified media 	ProgressEvent
message 	A message is received through the event source 	Event
mousedown 	The mouse button is pressed over an element 	MouseEvent
mouseenter 	The pointer is moved onto an element 	MouseEvent
mouseleave 	The pointer is moved out of an element 	MouseEvent
mousemove 	The pointer is moved over an element 	MouseEvent
mouseover 	The pointer is moved onto an element 	MouseEvent
mouseout 	The pointer is moved out of an element 	MouseEvent
mouseup 	A user releases a mouse button over an element 	MouseEvent
mousewheel 	Deprecated. Use the wheel event instead 	WheelEvent
offline 	The browser starts working offline 	Event
online 	The browser starts working online 	Event
open 	A connection with the event source is opened 	Event
pagehide 	User navigates away from a webpage 	PageTransitionEvent
pageshow 	User navigates to a webpage 	PageTransitionEvent
paste 	Some content is pasted in an element 	ClipboardEvent
pause 	A media is paused 	Event
play 	The media has started or is no longer paused 	Event
playing 	The media is playing after being paused or buffered 	Event
popstate 	The window's history changes 	PopStateEvent
progress 	The browser is downloading media data 	Event
ratechange 	The playing speed of a media is changed 	Event
resize 	The document view is resized 	UiEvent, Event
reset 	A form is reset 	Event
scroll 	An scrollbar is being scrolled 	UiEvent, Event
search 	Something is written in a search field 	Event
seeked 	Skipping to a media position is finished 	Event
seeking 	Skipping to a media position is started 	Event
select 	User selects some text 	UiEvent, Event
show 	A <menu> element is shown as a context menu 	Event
stalled 	The browser is trying to get unavailable media data 	Event
storage 	A Web Storage area is updated 	StorageEvent
submit 	A form is submitted 	Event
suspend 	The browser is intentionally not getting media data 	Event
timeupdate 	The playing position has changed (the user moves to a different point in the media) 	Event
toggle 	The user opens or closes the <details> element 	Event
touchcancel 	The touch is interrupted 	TouchEvent
touchend 	A finger is removed from a touch screen 	TouchEvent
touchmove 	A finger is dragged across the screen 	TouchEvent
touchstart 	A finger is placed on a touch screen 	TouchEvent
transitionend 	A CSS transition has completed 	TransitionEvent
unload 	A page has unloaded 	UiEvent, Event
volumechange 	The volume of a media is changed (includes muting) 	Event
waiting 	A media is paused but is expected to resume (e.g. buffering) 	Event
wheel 	The mouse wheel rolls up or down over an element 	WheelEvent
