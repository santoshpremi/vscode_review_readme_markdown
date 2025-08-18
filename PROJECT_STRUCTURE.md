# Project Structure - Multi-Editor Preview README & Markdown

This document provides a comprehensive overview of the project structure and organization for the multi-editor extension.

## 📁 **Root Directory Structure**

```
multi-editor-preview-readme/
├── 📁 src/                          # Core extension logic (VS Code/Cursor)
├── 📁 intellij/                     # IntelliJ IDEA plugin
├── 📁 sublime/                      # Sublime Text package
├── 📁 atom/                         # Atom package
├── 📁 vim/                          # Vim/Neovim plugin
├── 📁 shared/                       # Shared utilities and components
├── 📁 docs/                         # Documentation
├── 📁 examples/                     # Usage examples and samples
├── 📁 tests/                        # Test suites
├── 📁 build/                        # Build artifacts and outputs
├── 📁 scripts/                      # Build and deployment scripts
├── 📄 package.json                  # Main package configuration
├── 📄 tsconfig.json                 # TypeScript configuration
├── 📄 README.md                     # Main project documentation
├── 📄 INSTALLATION.md               # Installation guide
├── 📄 EDITOR_COMPARISON.md          # Editor feature comparison
├── 📄 PROJECT_STRUCTURE.md          # This file
├── 📄 CHANGELOG.md                  # Version history
├── 📄 LICENSE                       # MIT license
└── 📄 .gitignore                    # Git ignore patterns
```

## 🔧 **Core Components**

### **📁 src/ - VS Code/Cursor Extension**

```
src/
├── 📄 extension.ts                  # Main extension entry point
├── 📄 commands/                     # Command implementations
│   ├── 📄 previewCommands.ts        # Preview-related commands
│   ├── 📄 exportCommands.ts         # Export commands
│   └── 📄 index.ts                  # Command exports
├── 📄 preview/                      # Preview functionality
│   ├── 📄 previewManager.ts         # Preview management
│   ├── 📄 previewRenderer.ts        # HTML rendering
│   └── 📄 previewWebview.ts        # Webview implementation
├── 📄 export/                       # Export functionality
│   ├── 📄 htmlExporter.ts          # HTML export
│   ├── 📄 pdfExporter.ts            # PDF export
│   └── 📄 index.ts                  # Export exports
├── 📄 utils/                        # Utility functions
│   ├── 📄 fileUtils.ts              # File handling utilities
│   ├── 📄 markdownUtils.ts          # Markdown processing
│   └── 📄 themeUtils.ts             # Theme management
└── 📄 types/                        # TypeScript type definitions
    ├── 📄 commands.ts               # Command types
    ├── 📄 preview.ts                # Preview types
    └── 📄 export.ts                 # Export types
```

### **📁 intellij/ - IntelliJ IDEA Plugin**

```
intellij/
├── 📄 build.gradle                  # Gradle build configuration
├── 📄 src/                          # Java source code
│   └── 📁 main/
│       ├── 📁 java/
│       │   └── 📁 com/
│       │       └── 📁 multieditor/
│       │           └── 📁 preview/
│       │               └── 📁 readme/
│       │                   ├── 📄 actions/           # Action implementations
│       │                   ├── 📄 components/        # UI components
│       │                   ├── 📄 services/          # Business logic
│       │                   └── 📄 utils/             # Utility classes
│       └── 📁 resources/
│           ├── 📄 META-INF/                          # Plugin metadata
│           └── 📄 icons/                              # Plugin icons
├── 📄 plugin.xml                    # Plugin configuration
└── 📄 README.md                     # IntelliJ-specific README
```

### **📁 sublime/ - Sublime Text Package**

```
sublime/
├── 📄 main.py                       # Main package entry point
├── 📄 commands/                      # Sublime Text commands
│   ├── 📄 preview_markdown.py       # Preview command
│   ├── 📄 export_html.py            # HTML export command
│   └── 📄 export_pdf.py             # PDF export command
├── 📄 lib/                          # Python libraries
│   ├── 📄 markdown/                 # Markdown processing
│   ├── 📄 html/                     # HTML generation
│   └── 📄 utils/                    # Utility functions
├── 📄 sublime-commands              # Command definitions
├── 📄 sublime-keymap                # Key bindings
├── 📄 sublime-settings              # Package settings
└── 📄 README.md                     # Sublime-specific README
```

### **📁 atom/ - Atom Package**

```
atom/
├── 📄 lib/                          # JavaScript source code
│   ├── 📄 multi-editor-preview-readme.js  # Main package file
│   ├── 📄 commands/                 # Command implementations
│   ├── 📄 preview/                  # Preview functionality
│   ├── 📄 export/                   # Export functionality
│   └── 📄 utils/                    # Utility functions
├── 📄 package.json                  # Atom package configuration
├── 📄 keymaps/                      # Key bindings
├── 📄 menus/                        # Menu definitions
├── 📄 styles/                       # CSS styles
└── 📄 README.md                     # Atom-specific README
```

### **📁 vim/ - Vim/Neovim Plugin**

```
vim/
├── 📄 plugin/                        # Plugin files
│   ├── 📄 multi-editor-preview-readme.vim  # Main plugin file
│   └── 📄 autoload/                 # Autoload functions
├── 📄 doc/                          # Documentation
│   └── 📄 multi-editor-preview-readme.txt  # Vim help file
├── 📄 syntax/                       # Syntax highlighting
├── 📄 ftplugin/                     # File type plugins
└── 📄 README.md                     # Vim-specific README
```

## 🔄 **Shared Components**

### **📁 shared/ - Common Utilities**

```
shared/
├── 📄 markdown/                     # Markdown processing
│   ├── 📄 parser.ts                 # Markdown parser
│   ├── 📄 renderer.ts               # HTML renderer
│   └── 📄 extensions.ts             # Markdown extensions
├── 📄 themes/                       # Theme definitions
│   ├── 📄 light.css                 # Light theme
│   ├── 📄 dark.css                  # Dark theme
│   └── 📄 index.ts                  # Theme exports
├── 📄 utils/                        # Common utilities
│   ├── 📄 fileUtils.ts              # File handling
│   ├── 📄 configUtils.ts            # Configuration
│   └── 📄 validationUtils.ts        # Input validation
└── 📄 types/                        # Shared type definitions
    ├── 📄 common.ts                 # Common types
    ├── 📄 config.ts                 # Configuration types
    └── 📄 api.ts                    # API types
```

## 📚 **Documentation Structure**

### **📁 docs/ - Comprehensive Documentation**

```
docs/
├── 📄 getting-started/              # Getting started guides
│   ├── 📄 quick-start.md            # Quick start guide
│   ├── 📄 installation.md           # Installation guide
│   └── 📄 first-steps.md            # First steps tutorial
├── 📄 user-guide/                   # User documentation
│   ├── 📄 features.md               # Feature overview
│   ├── 📄 configuration.md          # Configuration guide
│   ├── 📄 keyboard-shortcuts.md     # Keyboard shortcuts
│   └── 📄 troubleshooting.md        # Troubleshooting guide
├── 📄 developer/                    # Developer documentation
│   ├── 📄 architecture.md           # Architecture overview
│   ├── 📄 api-reference.md          # API reference
│   ├── 📄 contributing.md           # Contributing guide
│   └── 📄 building.md               # Build instructions
├── 📄 examples/                     # Usage examples
│   ├── 📄 basic-usage.md            # Basic usage examples
│   ├── 📄 advanced-features.md      # Advanced feature examples
│   └── 📄 integration.md            # Integration examples
└── 📄 api/                          # API documentation
    ├── 📄 commands.md               # Command API
    ├── 📄 events.md                 # Event API
    └── 📄 types.md                  # Type definitions
```

## 🧪 **Testing Structure**

### **📁 tests/ - Test Suites**

```
tests/
├── 📁 unit/                         # Unit tests
│   ├── 📁 commands/                 # Command tests
│   ├── 📁 preview/                  # Preview tests
│   ├── 📁 export/                   # Export tests
│   └── 📁 utils/                    # Utility tests
├── 📁 integration/                  # Integration tests
│   ├── 📁 editor-integration/       # Editor integration tests
│   ├── 📁 cross-platform/           # Cross-platform tests
│   └── 📁 performance/              # Performance tests
├── 📁 e2e/                          # End-to-end tests
│   ├── 📁 vs-code/                  # VS Code E2E tests
│   ├── 📁 intellij/                 # IntelliJ E2E tests
│   └── 📁 cross-editor/             # Cross-editor E2E tests
└── 📁 fixtures/                     # Test fixtures
    ├── 📁 markdown/                 # Markdown test files
    ├── 📁 configs/                  # Configuration files
    └── 📁 outputs/                  # Expected outputs
```

## 🚀 **Build and Deployment**

### **📁 build/ - Build Artifacts**

```
build/
├── 📁 vs-code/                      # VS Code extension builds
│   ├── 📄 *.vsix                    # Extension packages
│   └── 📄 *.zip                     # Source archives
├── 📁 intellij/                     # IntelliJ plugin builds
│   ├── 📄 *.jar                     # Plugin packages
│   └── 📄 *.zip                     # Source archives
├── 📁 sublime/                      # Sublime Text package builds
│   ├── 📄 *.sublime-package         # Package files
│   └── 📄 *.zip                     # Source archives
├── 📁 atom/                         # Atom package builds
│   ├── 📄 *.zip                     # Package archives
│   └── 📄 *.tar.gz                  # Source archives
└── 📁 vim/                          # Vim plugin builds
    ├── 📄 *.zip                     # Plugin archives
    └── 📄 *.tar.gz                  # Source archives
```

### **📁 scripts/ - Build Scripts**

```
scripts/
├── 📄 build.sh                      # Main build script
├── 📄 build-vscode.sh               # VS Code build script
├── 📄 build-intellij.sh             # IntelliJ build script
├── 📄 build-sublime.sh              # Sublime Text build script
├── 📄 build-atom.sh                 # Atom build script
├── 📄 build-vim.sh                  # Vim build script
├── 📄 deploy.sh                     # Deployment script
├── 📄 test.sh                       # Test runner script
└── 📄 clean.sh                      # Cleanup script
```

## 🔗 **Cross-Editor Dependencies**

### **Shared Dependencies**

- **Markdown Processing**: Common markdown parser and renderer
- **Theme System**: Unified theme definitions and management
- **Configuration**: Shared configuration schema and validation
- **Utilities**: Common utility functions and helpers

### **Editor-Specific Dependencies**

- **VS Code/Cursor**: Node.js, TypeScript, VS Code Extension API
- **IntelliJ IDEA**: Java, Gradle/Maven, IntelliJ Platform SDK
- **Sublime Text**: Python, Sublime Text Package API
- **Atom**: Node.js, Atom Package API
- **Vim/Neovim**: Vimscript, Vim Plugin API

## 📊 **File Size and Complexity**

| Component             | Lines of Code | Complexity | Dependencies |
| --------------------- | ------------- | ---------- | ------------ |
| **Core Logic**        | ~500          | Medium     | Low          |
| **VS Code Extension** | ~800          | Medium     | Medium       |
| **IntelliJ Plugin**   | ~600          | Medium     | High         |
| **Sublime Package**   | ~400          | Low        | Low          |
| **Atom Package**      | ~700          | Medium     | Medium       |
| **Vim Plugin**        | ~300          | Low        | Low          |
| **Shared Utils**      | ~200          | Low        | Low          |
| **Documentation**     | ~1000         | Low        | None         |
| **Tests**             | ~800          | Medium     | Medium       |

## 🎯 **Development Workflow**

### **1. Core Development**

1. Develop features in the shared components
2. Test with VS Code extension (primary target)
3. Ensure cross-platform compatibility

### **2. Editor Integration**

1. Implement editor-specific adapters
2. Test functionality in target editor
3. Optimize for editor-specific features

### **3. Testing and Validation**

1. Run unit tests across all platforms
2. Perform integration testing
3. Validate cross-editor consistency

### **4. Build and Release**

1. Build all editor versions
2. Package for distribution
3. Deploy to respective marketplaces

---

**This structure ensures consistent functionality across all editors while maintaining editor-specific optimizations! 🎉**
