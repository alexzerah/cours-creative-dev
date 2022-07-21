# Text Plugin

## Objectif

Remplacer une lettre ou un mot par une autre lettre ou un autre mot.

```javascript
gsap.to("#element", {
	text: {
		value: "The New text",
		delimiter: "" // " " pour les mots
	}
});
```

### Options

- oldClass : ancienne classe du texte
- newClass : Nouvelle classe du texte
- type
- speed
- preserveSpaces
- padSpace
- value