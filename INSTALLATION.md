# Installation Guide - Multi-Editor Preview README & Markdown

This guide provides detailed installation instructions for each supported editor.

## 📋 **Prerequisites**

Before installing the extension, ensure you have:

- **Node.js** (for VS Code/Cursor/Atom) - [Download here](https://nodejs.org/)
- **Python** (for Sublime Text) - [Download here](https://www.python.org/)
- **Java** (for IntelliJ IDEA) - [Download here](https://adoptium.net/)
- **Git** (for manual installation) - [Download here](https://git-scm.com/)

## 🚀 **VS Code / Cursor**

### **Method 1: Extension Marketplace (Recommended)**

1. Open VS Code or Cursor
2. Press `Ctrl+Shift+X` (Windows/Linux) or `Cmd+Shift+X` (Mac)
3. Search for "Multi-Editor Preview README & Markdown"
4. Click **Install**
5. Restart the editor

### **Method 2: Manual Installation**

1. Clone the repository:
   ```bash
   git clone https://github.com/multieditor/preview-readme.git
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

### **Method 3: VSIX Package**

1. Download the `.vsix` file from releases
2. In VS Code/Cursor, go to Extensions panel
3. Click the "..." menu → "Install from VSIX..."
4. Select the downloaded file

## 🧠 **IntelliJ IDEA**

### **Method 1: Plugin Repository (Recommended)**

1. Open IntelliJ IDEA
2. Go to `File` → `Settings` (Windows/Linux) or `IntelliJ IDEA` → `Preferences` (Mac)
3. Navigate to `Plugins`
4. Click `Marketplace`
5. Search for "Multi-Editor Preview README & Markdown"
6. Click **Install**
7. Restart the IDE

### **Method 2: Manual Installation**

1. Clone the repository:
   ```bash
   git clone https://github.com/multieditor/preview-readme.git
   cd preview-readme
   ```
2. Open the project in IntelliJ IDEA
3. Build the project using Gradle or Maven
4. Install the plugin from the built artifacts

### **Method 3: Plugin File**

1. Download the `.jar` plugin file from releases
2. In IntelliJ IDEA, go to `File` → `Settings` → `Plugins`
3. Click the gear icon → "Install Plugin from Disk..."
4. Select the downloaded `.jar` file

## ✨ **Sublime Text**

### **Method 1: Package Control (Recommended)**

1. Install Package Control if not already installed:
   - Press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (Mac)
   - Type "Package Control: Install Package Control"
2. Install the extension:
   - Press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (Mac)
   - Type "Package Control: Install Package"
   - Search for "Multi-Editor Preview README & Markdown"
   - Click **Install**

### **Method 2: Manual Installation**

1. Clone the repository:
   ```bash
   git clone https://github.com/multieditor/preview-readme.git
   ```
2. Copy the `sublime/` folder to your Sublime Text packages directory:
   - **Windows**: `%APPDATA%\Sublime Text\Packages\`
   - **macOS**: `~/Library/Application Support/Sublime Text/Packages/`
   - **Linux**: `~/.config/sublime-text/Packages/`
3. Restart Sublime Text

### **Method 3: Git Clone**

```bash
cd ~/.config/sublime-text/Packages/  # Adjust path for your OS
git clone https://github.com/multieditor/preview-readme.git
```

## 🐍 **Vim / Neovim**

### **Method 1: Plugin Manager (Recommended)**

#### **Using vim-plug**

1. Add to your `.vimrc` or `init.vim`:
   ```vim
   Plug 'multieditor/preview-readme'
   ```
2. Run `:PlugInstall` in Vim

#### **Using Vundle**

1. Add to your `.vimrc`:
   ```vim
   Plugin 'multieditor/preview-readme'
   ```
2. Run `:PluginInstall` in Vim

#### **Using Pathogen**

1. Clone to your bundle directory:
   ```bash
   cd ~/.vim/bundle
   git clone https://github.com/multieditor/preview-readme.git
   ```

### **Method 2: Manual Installation**

1. Create the plugin directory:
   ```bash
   mkdir -p ~/.vim/plugin
   ```
2. Copy `vim-plugin.vim` to `~/.vim/plugin/`
3. Restart Vim

### **Method 3: Neovim (init.lua)**

```lua
-- Using packer
use 'multieditor/preview-readme'

-- Using lazy.nvim
require('lazy').setup({
    'multieditor/preview-readme'
})
```

## ⚛️ **Atom**

### **Method 1: Package Manager (Recommended)**

1. Open Atom
2. Go to `File` → `Settings` (Windows/Linux) or `Atom` → `Preferences` (Mac)
3. Click `Install`
4. Search for "multi-editor-preview-readme"
5. Click **Install**
6. Restart Atom

### **Method 2: Manual Installation**

1. Clone the repository:
   ```bash
   git clone https://github.com/multieditor/preview-readme.git
   cd preview-readme
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Link the package:
   ```bash
   apm link .
   ```
4. Restart Atom

### **Method 3: Development Mode**

1. Clone the repository
2. Install dependencies: `npm install`
3. In Atom, go to `File` → `Settings` → `Developer`
4. Click "Open in Dev Mode"

## 🔧 **Post-Installation Setup**

### **VS Code / Cursor**

1. Open any `.md` file or README
2. Right-click in the editor → "Preview Markdown"
3. Or use keyboard shortcut: `Ctrl+Shift+V` (Windows/Linux) or `Cmd+Shift+V` (Mac)

### **IntelliJ IDEA**

1. Open any markdown file
2. Right-click in the editor → "Preview Markdown"
3. Or use the toolbar button

### **Sublime Text**

1. Open any markdown file
2. Right-click in the editor → "Preview Markdown"
3. Or use the command palette: `Ctrl+Shift+P` → "Preview Markdown"

### **Vim / Neovim**

1. Open any markdown file
2. Use command: `:PreviewMarkdown`
3. Or use key mapping: `<leader>mp` (default: `\mp`)

### **Atom**

1. Open any markdown file
2. Right-click in the editor → "Preview Markdown"
3. Or use the command palette: `Ctrl+Shift+P` → "Preview Markdown"

## ⚙️ **Configuration**

### **VS Code / Cursor**

```json
{
  "multi-editor-preview-readme.autoPreview": false,
  "multi-editor-preview-readme.defaultPreviewMode": "side-by-side",
  "multi-editor-preview-readme.theme": "auto",
  "multi-editor-preview-readme.enableMath": true,
  "multi-editor-preview-readme.enableMermaid": true
}
```

### **Vim / Neovim**

```vim
" Auto-preview on file open
let g:multi_editor_preview_readme_auto_preview = 1

" Default preview mode
let g:multi_editor_preview_readme_default_mode = 'side-by-side'

" Theme preference
let g:multi_editor_preview_readme_theme = 'dark'
```

### **Sublime Text**

```json
{
  "auto_preview": false,
  "default_preview_mode": "side-by-side",
  "theme": "auto",
  "enable_math": true,
  "enable_mermaid": true
}
```

## 🐛 **Troubleshooting**

### **Common Issues**

#### **Extension Not Working**

1. Check if the extension is properly installed
2. Restart the editor
3. Check the extension's output panel for errors

#### **Preview Not Opening**

1. Ensure the file is a markdown file (`.md`, `.markdown`, or named `README`)
2. Check if the file has proper markdown syntax
3. Try different preview modes

#### **Performance Issues**

1. Disable auto-preview for large files
2. Use side-by-side mode instead of inline mode
3. Check if other extensions are conflicting

### **Getting Help**

- Check the [Issues page](https://github.com/multieditor/preview-readme/issues)
- Read the [FAQ](FAQ.md)
- Join our [Discord community](https://discord.gg/multieditor)

## 🎯 **Next Steps**

After successful installation:

1. **Test the extension** with your markdown files
2. **Customize settings** to match your preferences
3. **Explore features** like export and auto-preview
4. **Join the community** to share feedback and suggestions

---

**Happy markdown previewing across all your favorite editors! 🎉**
