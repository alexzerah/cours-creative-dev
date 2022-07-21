# Draggable

## Objectif

Mouvoir un élément à l'aide de la souris ou d'un touch.

### Liens

Docs : https://greensock.com/docs/v3/Plugins/Draggable

```html
# CDN
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/Draggable.min.js"></script>
```

## Syntaxe

```javascript
gsap.registerPlugin(Draggable);

const draggable = Draggable.create("#element", {});

// Options
type: "x,y"
type: "top,left"
type: "rotation"
type: "x"
type: "y"
type: "top"
type: "left"

```


### Paramètres
- onMove()
- onPress()