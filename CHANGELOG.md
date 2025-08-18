# Changelog

All notable changes to the Multi-Editor Preview README & Markdown Extension will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Initial project structure
- Multi-editor compatibility framework
- Comprehensive documentation

### Changed

- Project organization for public release
- Documentation improvements

## [1.0.0] - 2024-08-19

### Added

- **Core Preview Functionality**

  - Multiple preview modes (side-by-side, new-tab, inline)
  - Smart file detection for markdown and README files
  - Real-time preview updates
  - Theme support (light, dark, auto)

- **Export Capabilities**

  - HTML export functionality
  - PDF export via HTML
  - Custom styling and theming

- **Advanced Features**

  - Auto-preview configuration
  - Cross-editor consistency
  - Multiple access methods (context menu, keyboard shortcuts, command palette)

- **Editor Support**

  - VS Code & Cursor: Full native integration
  - IntelliJ IDEA: Plugin structure ready
  - Sublime Text: Package configuration complete
  - Vim/Neovim: Plugin implementation ready
  - Atom: Package configuration complete

- **Documentation**
  - Comprehensive README with badges and GitHub integration
  - Detailed installation guide for each editor
  - Editor feature comparison matrix
  - Project structure overview
  - Contributing guidelines
  - MIT license

### Technical Details

- **Language**: TypeScript (VS Code/Cursor), Java (IntelliJ), Python (Sublime), JavaScript (Atom), Vimscript (Vim)
- **Build System**: npm scripts for multi-editor builds
- **Dependencies**: marked.js, KaTeX, Mermaid (planned)
- **Testing**: Editor-specific test frameworks
- **Platform Support**: Windows, macOS, Linux

### Known Issues

- Math rendering and Mermaid diagrams are planned for future releases
- Some editor implementations are in configuration stage and need full development

## [0.1.0] - 2024-08-18

### Added

- Initial VS Code extension structure
- Basic markdown preview functionality
- Project setup and configuration

---

## Version History

- **v1.0.0**: Initial public release with multi-editor support
- **v0.1.0**: Initial development version (VS Code only)

## Upcoming Releases

### [1.1.0] - Planned

- Enhanced math rendering with KaTeX
- Mermaid diagram support
- Custom CSS themes
- Plugin marketplace submissions

### [2.0.0] - Future

- Collaborative editing features
- Cloud sync for settings
- Advanced export formats
- Mobile editor support

---

## Contributing to Changelog

When adding new entries to the changelog, please follow these guidelines:

1. **Add entries under the appropriate version section**
2. **Use the same categories**: Added, Changed, Deprecated, Removed, Fixed, Security
3. **Be descriptive but concise**
4. **Include issue/PR numbers when relevant**
5. **Update the Unreleased section for ongoing work**

## Release Process

1. **Development**: Features are developed in the `main` branch
2. **Testing**: All changes are tested across supported editors
3. **Release**: Version is tagged and released
4. **Documentation**: Changelog is updated with release notes
5. **Distribution**: Extensions are published to respective marketplaces
