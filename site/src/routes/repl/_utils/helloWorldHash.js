import LZString from 'lz-string';

const data = {
  name: 'Hello world',
  files: [
    {
      name: 'App.svelte',
      source: `<script>
	let name = 'world';
</script>

<h1>Hello {name}!</h1>`
    }
  ]
};

export default '#' + LZString.compressToEncodedURIComponent(JSON.stringify(data));