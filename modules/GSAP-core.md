# GSAP CORE

## Qu'est-ce que GSAP ? 

GSAP est une bibliothèque d'animation.
Il est possible d'animer un grand nombre d'objet.

Vous trouverez plus d'informations sur [le site officiel](https://greensock.com/gsap/).

## Démarrage

Nous commencerons avec les fichiers suivants :
- `index.html`
- `style.css`
- `script.js`

Importer le fichier `style.css` et `script.js` dans le fichier HTML.

### Installation de GSAP

GSAP fonctionne avec des plugin.
Au total, il existe : 
- Les outils CORE 
  - (GSAP, les tween et les timeline)
  - Les plugins (attr, css, endArray ...)
  - Les eases (linear, power1, power2 ...)
  - Les méthodes utilitaires (checkPrefix, clamp, distribute...)
- Les plugins Extra
  - Draggable
  - Easel
  - Flip
  - MotionPath
  - Observer
  - Pixi
  - ScrollTo
  - ScrollTrigger
  - Text
- Les Eases extra (rough(), slow(), expoScale() ...)
- Le club GreenSock (payant)
  - DrawSVG
  - Physics2D
  - PhysicsProps
  - ...

Pour le moment, nous installerons la partie core, puis nous installerons les plugin.

Il existe plusieurs méthodes pour installer, pour le moment nous utiliserons le CDN.

- Download
- NPM
- CDN

Au sein de votre fichier HTML, ajouter le code suivant :
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/gsap.min.js"></script>
```

## 👋 Comment ça fonctionne ?

### Les tweens
Un tween est un objet qui contient l'ensemble des éléments pour l'animation.
Il contient :
- Une source : l’objet à animer
- Une durée
- L’ensemble des propriétés à animer
Pour l'instancier, utiliser l'objet `gsap` puis appeler les méthodes souhaitées.

`gsap.to()` permet d'ajouter un état à un élément via une animation.
 
```javascript
/*
* targets : element du dom, comme un ID, une classe CSS.
* vars : 
* */
const tw1 = gsap.to(targets, vars)

const tw2 = gsap.to("el1", {x: 100, duration: 5})

// La durée est optionelle (0,5 s par défaut). Il est possible de changer avec 
gsap.defaults({duration: 1});
```

Pour avoir de bonnes performances, il faut animer avec `CSS transforms` et `opacity`.

- `x` et `y`
- `rotation`, `rotationX`, `rotationY`
- `scale`, `scaleX`, `scaleY`
- `skewX`, `skewY`

<aside>
💡 Vous pouvez cependant animer n’importe quelle propriété numérique.
</aside>

- `width` et `height`
- `top` et `left` (`position` doit être `relative`, `fixed` ou `absolute`)
- `borderRadius`
- `color` et `backgroundColor`
- `vh`, `vw`
- Plein d’autre

<aside>
💡Les propriétés CSS avec un tiret “-” doivent être mises au sous forme de camelCase
ex : border-radius → borderRadius
</aside>

#### .from() et fromTo()

Nous avons vu `gsap.to()` qui permet de modifier un état initial vers un état final.
Nous pouvons faire l’inverse avec `gsap.from()`

```jsx
const tween = gsap.from("#element", {x: 100});
```

Il est également possible de spécifier un état de départ (from) et un état final (to), grâce à `gsap.fromTo()`

```jsx
const tween = gsap.fromTo("#element", {x: -100} ,{x: 100});
// nous rajouter un paramètre pour indiquer les états de départs et de fin.
```

👋 À quoi sert-il de mettre les deux ?

### Les timelines

Les timelines sont des outils de séquence qui contiennent : 
- des tweens
- des autres timelines

Les timelines ne sont pas obligatoires mais **facilitent grandement** le travail lorsque les animations deviennent plus complexes.

```javascript
/* Déclarer une timeline
vars (object) = configuration générale de la timeline 
*/
const tl = gsap.timeline(vars);
```

## Special Properties

- `delay`
- `repeat
- `yoyo`
- `repeatDelay`

### Delay (int (second))

Délai avant que l’animation ne commence.

### Repeat (int)

Nombre de répétition de l’animation

Pour un nombre infini, mettre -1.

### Yoyo (bool)

Faire un effet yoyo (à utiliser avec `repeat`).

### RepeatDelay (int (second))

Délai entre les répétitions.

[Motion path](https://www.notion.so/Motion-path-3b443061950a41e4bb59742b8865b601)

## Eases

Il s’agit de l’accélération de l’animation.

Par exemple, l’animation peut aller de plus en plus vite, ou de moins en moins vite…

Par défaut, la valeur est `easeOut`.

- `linear`
- `bounce` / `bounce.in`

---

Comment fait-on une animation ?

## Les timeline

Les Timeline fonctionnent comme des container de tween ou timeline.

Keyframe

GSAP Core anime les propriétés

Timeline et tween

Les timeline ont pour méthode :

```jsx
pause();
play();
progress();

// tl remplace gsap

tl.to("#element", {duration: 1, x: 100});

// Il est également possible de chainer les animations
tl.to("#element1", {duration: 1, x: 100})
        .to("#element2", {duration: 3, y: 300})
        .to("#element3", {duration: 2, x: -100});
// // Controller le positionnement
// tl.to(..., 1.5)
//         .to(..., "-=0.75") //overlaps by 0.75 seconds
//         .to(..., "+=1") //adds a 1-second gap before
//
// // Il est possible d’ajouter des labels
// //add a label at exactly 3 seconds
// tl.addLabel("step2", 3)
//         .to(..., "step2") //starts at the step2 label
//         .to(..., "step2+=0.75") //0.75 seconds after the step2 label

//then later, we can seek() to that spot:
tl.seek("step2");
```

---
```javascript
gsap.to();
gsap.from();
gsap.fromTo();

const tl = gsap.timeline();
```

- translate X / Y
- rotation
- duration
- tween
- timeline : contient des tweens 

Méthodes
- `pause()`
- `play()`
- `progress()` : Progression de la timeline
- `restart()`
- `resume()`
- `seek()`
- `time()`
- `duration()`
- `reverse()`
- `timeScale()` : Facteur de la vitesse d’execution (1 pour la vitesse actuelle, 0.5 pour la moitié…)
- `kill()`