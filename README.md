# Progressor

Progress bars in the browser that use a token/shape that moves across the screen instead of a bar
that increases in width.

![Progressor demonstration](https://github.com/travishorn/progressor/raw/master/demo.gif)

## Usage

Include [D3](https://d3js.org/) and the this library in your HTML.

```
<script src="https://d3js.org/d3.v5.min.js"></script>
<script src="https://unpkg.com/@travishorn/progressor"></script>
```

Add a progressor to the page.

```
const p = new Progressor('body');
```

Update the value as often as needed. Value should be between 0 and 1.

```
p.update(0.5);
```

### Options

Pass an object with any of the following options.

```
const p = new Progressor('body', {
  size: 100,
  image: 'horse.png',
});
```

#### size

Default: 100

The size of the token in pixels. It is always square. Note that the progress bar itself will always
expand to the width of its parent element.

#### image

Default: (none)

The URL of a custom image to use as the moving token. Note that square images work best. If this
option is omitted, a square block is used instead.

See `demo/index.html` for a working demo.

## Development

These instructions will get you a copy of the project up and running on your local machine for
development and testing purposes. See the **Usage** section above for notes on how to use the
project on a live system.

### Prerequisites

You will need [Git](https://git-scm.com/) and [Node.js](https://nodejs.org/)  installed.

### Installing

Clone the repository.

```
git clone https://github.com/travishorn/progressor.git
```

### Editing and building

View and edit code in `src/`.

Build with `npm run build`.

### Running the demo

Open `demo/index.html` in a web browser to see the code in action.

## Built with

* [Babel](https://babeljs.io/) - Transpiling/browser support
* [D3](https://d3js.org/) - Adding and moving shapes on the page
* [Icons8](https://icons8.com) - Horse icon in demo
* [Webpack](https://webpack.js.org/) - Packaging everything up

## Contributing

Pull requests welcome!

## Versioning

This library uses [SemVer](http://semver.org/) for versioning. For the versions available, see the
[tags on this repository](https://github.com/travishorn/progressor/tags).

## Authors

* Travis Horn - [https://travishorn.com](https://travishorn.com)

## License

This project licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
