const { CompositeDisposable } = require('atom');
const pandoc = require('simple-pandoc');

module.exports = {

  config: {
    sourceFormat: {
      type: 'string',
      default: 'markdown',
      description: 'Pandoc input format',
      order: '10'
    },
    outputFormat: {
      type: 'string',
      default: 'html',
      description: 'Pandoc output format (use latex or html for PDF generation)',
      order: '11'
    },
    outputExtension: {
      type: 'string',
      default: '.html',
      description: 'File extension for generated output (use .pdf for PDF generation)',
      order: '13'
    },
    pandocOptions: {
      type: 'string',
      default: '-s',
      description: 'Pandoc options seperated by spaces',
      order: '20'
    }
  },

  activate() {

    const fromFormat = atom.config.get('pandocia.sourceFormat');
    const toFormat = atom.config.get('pandocia.outputFormat');
    const fileExt = atom.config.get('pandocia.outputExtension');

    this.subscriptions = new CompositeDisposable();
    this.subscriptions.add(atom.commands.add('atom-workspace',
      {'pandocia:convert': () => this.convert(fromFormat, toFormat, fileExt)})
    );

  },

  deactivate() {
    this.subscriptions.dispose();
  },

  convert(fromFormat, toFormat, fileExt) {
    const editor = atom.workspace.getActiveTextEditor();

    const inputFile = editor.getPath();
    const outputFile = inputFile.replace(/\.[^/.]+$/, fileExt);
    const options = atom.config.get('pandocia.pandocOptions').split(' ');

    const inputStream = fs.createReadStream(inputFile);
    const outputStream = fs.createWriteStream(outputFile);

    pandoc(fromFormat, toFormat, `--output=${outputFile}`, ...options)
      .stream(inputStream)
      .pipe(outputStream)
      .on('finish', function() {
        atom.workspace.open(outputFile, {searchAllPanes: true});
      });

  },

}
