const { CompositeDisposable } = require('atom');
const pandoc = require('simple-pandoc');

module.exports = {

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

    const inputStream = fs.createReadStream(inputFile);
    const outputStream = fs.createWriteStream(outputFile);

    pandoc('markdown', 'html').stream(inputStream).pipe(outputStream);

    atom.workspace.open(outputFile, {searchAllPanes: true});
  },

}
