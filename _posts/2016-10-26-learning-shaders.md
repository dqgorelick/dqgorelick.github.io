---
layout: post
title: Learning Shaders with Patricio
---

### Literally everything is a Vector

Lecture at SFPC by Patricio Gonzalez Vivo, author of [The Book of Shaders](https://thebookofshaders.com/){:target="_blank"}.

The main example we are looking at from [here](http://editor.thebookofshaders.com/){:target="_blank"}.

{: .center .medium}
![shader gradient]({{ site.url }}/images/blog/shaders_example.png)

The code for this is here:

```
#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main() {
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    st.x *= u_resolution.x/u_resolution.y;

    st += vec2(.0);
    vec3 color = vec3(1.);
    color = vec3(st.x,st.y,0.0);

    gl_FragColor = vec4(color,1.0);
}
```

The main input here is gl_FragCoord, it is a vec3 that has the value of each pixel (0 to width-1)

The main output is `gl_FragColor`, a vec4 which has RED, BLUE, GREEN, and ALPHA.

We are creating a vec2 using the gl_FragCoord.xy. We normalize it with this:
```
vec2 st = gl_FragCoord.xy/u_resolution.xy;
```

We then create a gradient with the RED, and GREEN values by doing so:
```
color = vec3(st.x,st.y,0.0);
```

The last value of the BLUE is set to 0.0, and the ALPHA is set to be 1.0.

### Working with sine / cosine

To produce some very “organic” results, we can start using sin and cosine.


{: .center .medium}
![Sine Cosine Experiement]({{ site.url }}/images/blog/shaders_first_try.png)

{: .media-caption}
Playing around with sin and cosine

The code for the piece above:

```

#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;
float line(float x, float c, float w) {
    return step(c,x)-step(c+w,x);
}

void main() {
    vec2 pos = gl_FragCoord.xy/u_resolution;

    vec3 color = vec3(0.);
    color += abs(sin(PI/-pos.y*PI));
    color.b += abs(cos(PI/-sin(u_time)*PI));

    color.r += abs(sin(pos.x));
    color.g -= 0.4;

    color -= 0.5;

    gl_FragColor.rgb = color;
    gl_FragColor.a = 1.0;
}
```

The key piece of code which creates the effect is `sin(PI/-pos.y*PI)`.

### Main takeaway

GLSL is definitely not very intuitive. In fact, I would say it is the least–intuitive programming I’ve done in a while. Nonetheless, I feel motivated to start messing around with the language more. Shaders seem to be pretty cool after all.

_fin_
