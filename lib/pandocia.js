const { CompositeDisposable } = require('atom');
const pandoc = require('simple-pandoc');

module.exports = {

  config: {
    pandocOptions: {
      type: 'string',
      default: '--standalone'
    }
  },

  activate() {
    this.subscriptions = new CompositeDisposable();
    this.subscriptions.add(atom.commands.add('atom-workspace',
      {'pandocia:convert': () => this.convert()})
    );

  },

  deactivate() {
    this.subscriptions.dispose();
  },

  convert() {
    const editor = atom.workspace.getActiveTextEditor();

    // These need to be set from a modal panel
    const fromFormat = 'markdown';
    const toFormat = 'html';
    const fileExt = '.html';

    const inputFile = editor.getPath();
    const outputFile = inputFile.replace(/\.[^/.]+$/, fileExt);
    const options = atom.config.get('pandocia.pandocOptions');

    const inputStream = fs.createReadStream(inputFile);
    const outputStream = fs.createWriteStream(outputFile);

    pandoc(fromFormat, toFormat, options).stream(inputStream).pipe(outputStream);

    atom.workspace.open(outputFile, {searchAllPanes: true});
  },

}
