# Adding your project media

Each project in `data/projects.js` points to a video and a poster image
under `/public/projects/<slug>/`. Create a folder per project and drop
your files in, matching the paths already referenced in the data file:

```
public/projects/
  xray-simulation/
    clip.mp4
    poster.jpg
  strategy-rpg/
    clip.mp4
    poster.jpg
  shader-studies/
    poster.jpg
```

## Converting your screen-recordings

You mentioned you already have video you can turn into clips/gifs. A
few practical notes:

- **Prefer `.mp4` over `.gif` for anything longer than a couple of
  seconds.** A looping muted `<video>` looks identical to a gif but is
  a fraction of the file size, which matters a lot on GitHub Pages
  (no server-side compression).
- Keep hero/card clips short (5–15 seconds) and trimmed to the most
  visually interesting loop — viewers won't watch a long clip
  automatically.
- If you want actual `.gif` files for anywhere outside the main
  project cards (e.g. inline in a written case-study later), `ffmpeg`
  produces much smaller/cleaner gifs than most screen-recording tools:

  ```
  ffmpeg -i input.mp4 -vf "fps=15,scale=720:-1:flags=lanczos" -loop 0 output.gif
  ```

- A `poster` image (a representative still frame) is shown while the
  video loads, and is what search engines / link previews will use —
  worth spending a minute picking a good frame.

## Adding a new project

1. Add a folder here with your media.
2. Add an entry to the `projects` array in `data/projects.js`.
3. The grid on the home page picks it up automatically.
