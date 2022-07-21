# ScrollTrigger

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/ScrollTrigger.min.js"></script>
```

```javascript
gsap.to("#paragraph", {
    scrollTrigger: "#paragraph",
    x: 500
});

// L'animation commence uniquement lorsque l'élément #paragraph entre dans le viewport.
```

Docs :

[https://greensock.com/docs/v3/Plugins/ScrollTrigger](https://greensock.com/docs/v3/Plugins/ScrollTrigger)

Méthode :

- onRefresh()
- onUpdate()
- onScrubComplete()
- onSnapComplete()
- onToggle()

Exemple :

[https://codepen.io/osublake/pen/VwaKMpw/2152a28cffe2c2c0cca8a3e47f7b21c6?editors=0010](https://codepen.io/osublake/pen/VwaKMpw/2152a28cffe2c2c0cca8a3e47f7b21c6?editors=0010)

[https://greensock.com/st-demos/](https://greensock.com/st-demos/)