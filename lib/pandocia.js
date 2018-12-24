import targets from './targets'

const { CompositeDisposable } = require('atom')
const pandoc = require('simple-pandoc')

module.exports = pandocia = {

  config: {
    pandocOptions: {
      description: 'List of options for pandoc.', 
      type: 'string'
      default: ''
    } 
  },

  activate() {
    this.subscriptions = new CompositeDisposable() 

    Object.keys(targets).forEach(target => {
      const action = `pandocia:${target.replace(/_/g, '-')}`

      this.subscriptons.add(commands.add('atom-workspace', action, () => {
        this.convert(target)
      }))
    })
  },

  deactivate() {
    this.subscriptions.dispose()
  },

  // Generate document from current buffer
  convert() {
    const editor = atom.workspace.getActiveTextEditor();
    //const md2pdf = pandoc('markdown', 'latex', '-o filename.pdf')
    //const md2html = pandoc('markdown', 'html')
  },

  preview() {
    // Open generated document in new pane
  }

}
