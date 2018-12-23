# Pandocia

Convert files between different document formats.
See [pandoc.org](https://pandoc.org) for more information.

**NOTE:**
This package uses [simple-pandoc](https://www.npmjs.com/package/simple-pandoc)
and requires pandoc to be install on your system.

## Installing pandoc on your system

### Windows

 - There is a package installer at pandoc's
   [download page](https://github.com/jgm/pandoc/releases/latest).
   This will install pandoc, replacing older versions, and
   update your path to include the directory where pandoc's
   binaries are installed.

 - If you prefer not to use the msi installer, we also provide
   a zip file that contains pandoc's binaries and
   documentation. Simply unzip this file and move the binaries
   to a directory of your choice.
    
 - Alternatively, you can install pandoc using
   [chocolatey](https://chocolatey.org): `choco install pandoc`.

 - For PDF output, you'll also need to install LaTeX.
   We recommend [MiKTeX](http://miktex.org/).


### macOS

 - There is a package installer at pandoc's
   [download page](https://github.com/jgm/pandoc/releases/latest).
   If you later want to uninstall the package, you can do so by downloading
   [this script](https://raw.githubusercontent.com/jgm/pandoc/master/macos/uninstall-pandoc.pl)
   and running it with `perl uninstall-pandoc.pl`.

 - A zip file containing the binaries and man pages, for those who prefer not
   to use the installer is also provided
   [here](https://github.com/jgm/pandoc/releases/latest). Simply unzip the
   file and move the binaries and man pages to whatever directory you like.

 - Alternative, you can install pandoc using [homebrew](https://brew.sh):
   `brew install pandoc`. Note: If you are using macOS < 10.10, this method
   installs pandoc from source, so it will take a long time and a lot of disk
   space for the ghc compiler and dependent Haskell libraries.

 - For PDF output, you'll also need LaTeX. Because a full [MacTeX] installation
   takes more than a gigabyte of disk space, it is recommended to install
   [BasicTeX](https://www.tug.org/mactex/morepackages.html) (64M) or
   [TinyTeX](https://yihui.name/tinytex/) and using the `tlmgr` tool to install
   additional packages as needed. If you get errors warning of fonts not found,
   try `tlmgr install collection-fontsrecommended`.

### Linux

 - First, try your package manager. Pandoc is in the
   [Debian](https://packages.debian.org/pandoc),
   [Ubuntu](https://packages.ubuntu.com/pandoc),
   [Slackware](https://www.slackbuilds.org/result/?search=pandoc&sv=),
   [Arch](https://www.archlinux.org/packages/community/x86_64/pandoc),
   [Fedora](https://apps.fedoraproject.org/packages/pandoc),
   [NiXOS](https://nixos.org/nixos/packages.html),
   [openSUSE](https://software.opensuse.org/package/pandoc),
   and [gentoo](packages.gentoo.org/package/app-text/pandoc) repositories.
   Note, however, that versions in the repositories are often old.
   Distro specific instructions are below.

 - Pandoc also provides a binary package for amd64 architecture on the
   [download page](https://github.com/jgm/pandoc/releases/latest). This
   provides both `pandoc` and `pandoc-citeproc`. The executables are statically
   linked and have no dynamic dependencies or dependencies on external data
   files. Note: because of the static linking, the pandoc library from this
   package cannot use lua filters that require external lua modules written
   in C.

 - For PDF output, you'll need LaTeX. It is recommended to install
   [TeX Live](https://www.tug.org/texlive/) via your package manager.

See [Installing pandoc](https://pandoc.org/installing.html) for
further instructions.

#### Ubuntu

`$ sudo apt install pandoc`

For PDF output, you'll need LaTeX. [TeX Live](https://www.tug.org/texlive/) is
recommended.

`$ sudo apt install texlive`

#### Fedora

`$ sudo dnf install pandoc`

For PDF output, you'll need LaTeX. [TeX Live](https://www.tug.org/texlive/) is
recommended.

`$ sudo dnf install texlive-scheme-medium`

#### Arch

`$ sudo pacman -S pandoc`

For PDF output, you'll need LaTeX. [TeX Live](https://www.tug.org/texlive/) is
recommended.

`$ sudo pacman -S texlive-most`

See [TeX Live](https://wiki.archlinux.org/index.php/TeX_Live) on the Arch wiki
for more information on the different TeX Live groups available.
