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

  // Generate document from current file
  convert() {
    const editor = atom.workspace.getActiveTextEditor();

    const inputFile = editor.getPath();
    const outputFile = inputFile.replace(/\.[^/.]+$/, ".html");
    const options = atom.config.get('pandocia.pandocOptions');

    const inputStream = fs.createReadStream(inputFile);
    const outputStream = fs.createWriteStream(outputFile);

    pandoc('markdown', 'html', options).stream(inputStream).pipe(outputStream);

    atom.workspace.open(outputFile, {searchAllPanes: true});
  },

}
