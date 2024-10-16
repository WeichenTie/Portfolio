---
title: "Particle Attractor"
thumbnail: "/images/projects/particle2d/thumbnail.webp"
description: "Particle simulation using vertex transformations in GLSL where you can click and drag around to make particles follow your cursor."
technologies: ["GLSL", "WebGL"]
assets: "/images/projects/portfolio"
github: "https://github.com/WeichenTie/06-Particle-Attractor"
demo: "https://weichentie.github.io/06-Particle-Attractor"
showcased: false
---

# {{title}}

<view-github-button :to="github"></view-github-button>
<view-demo-button :to="demo"></view-demo-button>

## Project Description

Particle attractor was an experiement aimed at understanding the basics of GPGPU in webGL. Because webGL2.0 does not support compute shaders, there were 2 primary methods of implementing this being, ping pong vertex transform, and ping pong textures. The simplest for this task is to use the vertex transform feedback which allows me to capture primitives generated by the vertex shader and record that data into buffer object. This allows me to keep the post transform state and render it to the screen on each frame.

## Technologies Used

<BlogTechnologies :tags="technologies"></BlogTechnologies>

## Planning

As this project is fairly simple, there are only a few steps to get the desired result.

1. Setup rendering engine.
2. Generate particles.
3. Initiate buffers.
4. Create shader program.
5. Create render loop.

## Setting Up the Rendering Engine.

I am using an extremely simple, hand written rendering engine that provides minimal abstraction over the shader programs and buffer objects. You can check it out in this project's repository.

## Generating Particles.

The great thing about the GPU is that it can process hundreds of thousands of vertices in parallel which means we can handle much more particles than on the CPU.

```ts
// We first generate a set of x and y coordinates for each particle
function generateParticles(count: number) {
  let particles = [];
  for (let i = 0; i < count; i++) {
    particles.push(Math.random() * width, Math.random() * height); // x, y // [!code highlight]
    particles.push(0, 0); // vx,vy // [!code highlight]
  }
  return particles;
}
```

## Initiating Buffers.

Now we initiate all the buffers for this rendering engine.

```ts
// ...
this.VAO1 = new VAO(this.gl);
this.VAO2 = new VAO(this.gl);
this.VBO1 = new VBO(
  this.gl,
  generatePoints(this.numPoints),
  this.gl.DYNAMIC_DRAW,
);
this.VBO2 = new VBO(
  this.gl,
  generatePoints(this.numPoints),
  this.gl.DYNAMIC_DRAW,
);
this.TF1 = createTransformFeedback(this.gl, this.VBO1);
this.TF2 = createTransformFeedback(this.gl, this.VBO2);

// Set how data is arranged in the vertex buffer objects
const attribLayout = new VAOAttribLayout();
// Store position x and y
attribLayout.addAttrib(2, this.gl.FLOAT, false);
// Store velocity vx and vy
attribLayout.addAttrib(2, this.gl.FLOAT, false);

this.VAO1.addAttribute(this.VBO1, attribLayout);
this.VAO2.addAttribute(this.VBO2, attribLayout);
// ...
```

Notice how there is 2 VAO, VBO and TF buffers. This is what allows us to ping pong between the current state and the next state.

In other words, buffer A will first be used to calculate the next position which is then stored to buffer B. They are then swapped so that buffer B is used to calculate the next position which is stored in buffer A and so on.

## Vertex Shader

The vertex shader will be used to update the properties of each individual particle in the simulation.

1. Simulate drag forces by slowing down the particle.
2. Accelerate the particles to the mouse when pressed.
3. Update the positions of each particle using the formula: x<sub>f</sub>= x<sub>i</sub> + v<sub>f</sub>.

```glsl
// ...
// Returns the attraction force between mouse and particle
vec2 gravityForce() {
  return normalize(u_MousePosition - a_OldPosition);
}

vec2 calcNewVelocity() {
  // Apply a frictional/drag force
  vec2 vel = a_OldVelocity * 0.985;
  // Accelerate the particle to mouse if
  // mouse left is pressed down.
  if (u_MouseDown == 1) {
      vel += gravityForce();
  }
  return vel;
}

void main() {
  v_NewVelocity = calcNewVelocity();
  v_NewPosition = a_OldPosition + v_NewVelocity;

  gl_Position = u_MVP * vec4(a_OldPosition, 0, 1);
  gl_PointSize = 1.0;
}
```

## Fragment Shader

We can now render this on our screen using our fragment shader and also apply a beautiful chromatic effect as highlighted below.

```glsl
// ...
void main() {
  vec2 direction = normalize(v_NewVelocity);
  vec3 color = vec3(abs(direction.x), // [!code highlight]
    abs(direction.y + direction.x) / 2.0,// [!code highlight]
    abs(direction.y));// [!code highlight]
  f_Color = vec4(color, 0.7);
}
```

## Results

The results are honestly quite spectacular as even though everything is 2D, it still gives a 3D illusion.

<blog-img src="/images/projects/particle2d/spherethumbnail.webp" ></blog-img>
<blog-img src="/images/projects/particle2d/vortex.webp" ></blog-img>
<blog-img src="/images/projects/particle2d/frontwave.webp" ></blog-img>
