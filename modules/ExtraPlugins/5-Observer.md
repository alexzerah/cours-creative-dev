# Observer

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/Observer.min.js"></script>
```

```javascript
gsap.registerPlugin(Observer);

const observer = Observer.create({
	target: window
})
```

Propriété

- Target
- type [”wheel”, “touch”, “”]
- debounce
- dragMinimum
- onChange
- onChangeX
- onChangeY
- onClick
- onDown
- onDrag
- onDragStart
- onDragEnd
- onLeft
- onHover
- onHoverEnd
- onMove
- onPress
- onRelease
- onRight
- onStop
- onStopDelay
- onToggleX
- onToggleY
- onUp
- onWheel
- scrollSpeed
- target
- tolerance : Distance minimal (en pixels) nécessaire pour appeler la fonction de callback (onUp, onDown, onChangeY…)
- type
- wheelSpeed
-

Showcase

[https://codepen.io/collection/KpNYOd](https://codepen.io/collection/KpNYOd)