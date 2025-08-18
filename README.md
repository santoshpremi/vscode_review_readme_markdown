# Preview README & Markdown Extension

[![VS Code](https://img.shields.io/badge/VS%20Code-Extension%20Marketplace-blue?logo=visual-studio-code)](https://marketplace.visualstudio.com/)
[![Cursor](https://img.shields.io/badge/Cursor-Extension%20Marketplace-blue?logo=cursor)](https://cursor.sh/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A **universal extension** that provides enhanced preview functionality for README and .md files across **multiple code editors**.

## 🚀 **Quick Start**

### **VS Code / Cursor**

```bash
# Install from marketplace
# Search: "Preview README & Markdown"
```

### **Keyboard Shortcuts**

- **Windows/Linux**: `Ctrl+Shift+V`
- **macOS**: `Cmd+Shift+V`

### **Quick Commands**

- **Command Palette**: `Ctrl+Shift+P` → "Preview Markdown"
- **Context Menu**: Right-click on `.md` files → "Preview Markdown"

## 🌟 **Supported Editors**

| Editor            | Status          | Installation          | Features     |
| ----------------- | --------------- | --------------------- | ------------ |
| **VS Code**       | ✅ Full Support | Extension Marketplace | All features |
| **Cursor**        | ✅ Full Support | Extension Marketplace | All features |
| **IntelliJ IDEA** | 🔄 In Progress  | Plugin Repository     | Coming Soon  |
| **Sublime Text**  | 🔄 In Progress  | Package Control       | Coming Soon  |
| **Vim/Neovim**    | 🔄 In Progress  | Plugin Manager        | Coming Soon  |
| **Atom**          | 🔄 In Progress  | Package Manager       | Coming Soon  |

## 🎯 **Features (Currently Working)**

### **Core Preview Functionality**

- **Multiple Preview Modes**:
  - Side-by-side preview ✅
  - New tab preview ✅
  - Inline preview ✅
- **Smart File Detection**: Works with `.md`, `.markdown`, and any file named `README` ✅
- **Real-time Updates**: Preview updates as you type ✅
- **Theme Support**: Light, dark, and auto themes ✅

### **Export Capabilities**

- **HTML Export**: Generate standalone HTML files ✅
- **PDF Export**: Export via HTML with browser print-to-PDF ✅
- **Custom Styling**: Consistent theming across exports ✅

### **Advanced Features**

- **Auto-Preview**: Optional automatic preview on file open ✅
- **Cross-Editor Sync**: Consistent experience across all editors ✅
- **Multiple Access Methods**: Context menu, keyboard shortcuts, command palette ✅

## 📦 **Installation**

### **VS Code / Cursor (Recommended)**

1. Open Extensions panel (`Ctrl+Shift+X` / `Cmd+Shift+X`)
2. Search for "Preview README & Markdown"
3. Click **Install**
4. Restart editor

### **Manual Installation**

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/preview-readme.git
   cd preview-readme
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Build the extension:
   ```bash
   npm run compile
   ```
4. Press `F5` to run in Extension Development Host

## 🎯 **Usage**

### **Method 1: Context Menu**

- Right-click on any `.md` file or README file
- Select "Preview Markdown" from the context menu

### **Method 2: Editor Title Bar**

- Open any markdown file
- Click the preview button in the editor title bar

### **Method 3: Keyboard Shortcuts**

- **Windows/Linux**: `Ctrl+Shift+V`
- **macOS**: `Cmd+Shift+V`

### **Method 4: Command Palette**

- Press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (Mac)
- Type "Preview Markdown" and select your option

## ⚙️ **Configuration**

### **VS Code / Cursor Settings**

```json
{
  "preview-readme-markdown.autoPreview": false,
  "preview-readme-markdown.defaultPreviewMode": "side-by-side",
  "preview-readme-markdown.theme": "auto",
  "preview-readme-markdown.enableMath": true,
  "preview-readme-markdown.enableMermaid": true
}
```

## 🔧 **Development & Building**

### **Prerequisites**

- Node.js (for VS Code/Cursor)
- VS Code or Cursor

### **Build Commands**

```bash
# Install dependencies
npm install

# Build the extension
npm run compile

# Watch for changes
npm run watch
```

### **Testing**

- Press `F5` in VS Code to run Extension Development Host
- Open any markdown file to test the preview functionality

## 📁 **Project Structure**

```
preview-readme/
├── src/                    # Core extension logic
├── .vscode/               # VS Code configuration
├── package.json           # Extension manifest
├── tsconfig.json          # TypeScript configuration
├── README.md              # This file
├── INSTALLATION.md        # Detailed installation guide
├── EDITOR_COMPARISON.md   # Editor feature comparison
├── PROJECT_STRUCTURE.md   # Project organization
├── CONTRIBUTING.md        # Contributing guidelines
├── CHANGELOG.md           # Version history
└── LICENSE                # MIT license
```

## 🤝 **Contributing**

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### **How to Contribute**

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### **Development Setup**

```bash
# Clone the repository
git clone https://github.com/yourusername/preview-readme.git
cd preview-readme

# Install dependencies
npm install

# Build the extension
npm run compile

# Run tests
npm test
```

## 📊 **Status & Roadmap**

### **Current Status**

- ✅ VS Code/Cursor: Full implementation
- 🔄 IntelliJ IDEA: Plugin structure in progress
- 🔄 Sublime Text: Package configuration in progress
- 🔄 Vim/Neovim: Plugin implementation in progress
- 🔄 Atom: Package configuration in progress

### **Planned Features**

- 🔄 Enhanced math rendering
- 🔄 Mermaid diagram support
- 🔄 Custom CSS themes
- 🔄 Plugin marketplace submissions

## 📄 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📚 **Documentation**

- [Installation Guide](INSTALLATION.md) - Detailed installation for each editor
- [Editor Comparison](EDITOR_COMPARISON.md) - Feature comparison across editors
- [Project Structure](PROJECT_STRUCTURE.md) - Complete project organization
- [Contributing Guide](CONTRIBUTING.md) - How to contribute to the project

---

**Ready to preview markdown across all your favorite editors? Install the extension for your editor and start enjoying consistent markdown preview functionality everywhere!** 🎉

## 📞 **Support & Community**

- 📧 **Email**: support@multieditor.dev
- 💬 **Discord**: [Join our community](https://discord.gg/multieditor)
- 🐛 **Issues**: [Report bugs](https://github.com/multieditor/preview-readme/issues)
- 💡 **Feature Requests**: [Request features](https://github.com/multieditor/preview-readme/issues/new)
- 📖 **Documentation**: [Read the docs](https://multieditor.dev/docs)

## 🔗 **Links**

- **VS Code Marketplace**: [Preview README & Markdown](https://marketplace.visualstudio.com/)
- **Cursor Marketplace**: [Preview README & Markdown](https://cursor.sh/)
- **GitHub Repository**: [multieditor/preview-readme](https://github.com/multieditor/preview-readme)
- **Issues**: [GitHub Issues](https://github.com/multieditor/preview-readme/issues)
- **Discussions**: [GitHub Discussions](https://github.com/multieditor/preview-readme/discussions)
- **Releases**: [GitHub Releases](https://github.com/multieditor/preview-readme/releases)
