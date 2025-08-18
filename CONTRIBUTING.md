# Contributing to Multi-Editor Preview README & Markdown Extension

Thank you for your interest in contributing to our multi-editor extension! This document provides guidelines and information for contributors.

## 🤝 **How to Contribute**

### **Types of Contributions**

We welcome various types of contributions:

- 🐛 **Bug Reports**: Report bugs and issues
- 💡 **Feature Requests**: Suggest new features
- 📝 **Documentation**: Improve documentation
- 🔧 **Code**: Fix bugs, add features, improve performance
- 🧪 **Testing**: Test on different platforms and editors
- 🌍 **Translations**: Help with internationalization
- 📢 **Promotion**: Share the extension with others

### **Before You Start**

1. **Check existing issues** to see if your contribution is already being worked on
2. **Read the documentation** to understand the project structure
3. **Join our community** on Discord for discussions and help

## 🚀 **Getting Started**

### **Prerequisites**

- **Git** for version control
- **Node.js** (v16 or higher) for VS Code/Cursor/Atom development
- **Python** (v3.8 or higher) for Sublime Text development
- **Java** (v11 or higher) for IntelliJ IDEA development
- **Vim/Neovim** for Vim plugin development

### **Development Setup**

1. **Fork the repository**

   ```bash
   # Click "Fork" on GitHub, then clone your fork
   git clone https://github.com/yourusername/preview-readme.git
   cd preview-readme
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Build the extension**

   ```bash
   npm run compile
   ```

4. **Test your changes**

   ```bash
   # VS Code/Cursor
   npm run test:vscode

   # All editors
   npm run test:all
   ```

## 📝 **Development Guidelines**

### **Code Style**

- **TypeScript/JavaScript**: Follow ESLint configuration
- **Python**: Follow PEP 8 style guide
- **Java**: Follow Google Java Style Guide
- **Vimscript**: Follow Vim style conventions

### **Commit Messages**

Use conventional commit format:

```
type(scope): description

[optional body]

[optional footer]
```

**Types:**

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Examples:**

```
feat(vscode): add inline preview mode
fix(preview): resolve theme switching issue
docs(readme): update installation instructions
```

### **Pull Request Guidelines**

1. **Create a feature branch** from `main`

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** and commit them

   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

3. **Push to your fork**

   ```bash
   git push origin feature/your-feature-name
   ```

4. **Create a Pull Request** with:
   - Clear description of changes
   - Screenshots/videos if UI changes
   - Test results
   - Related issue number

## 🧪 **Testing**

### **VS Code/Cursor Testing**

```bash
# Run tests
npm run test:vscode

# Run in Extension Development Host
npm run dev:vscode
```

### **Cross-Editor Testing**

```bash
# Test all editors
npm run test:all

# Test specific editor
npm run test:intellij
npm run test:sublime
npm run test:atom
npm run test:vim
```

### **Manual Testing Checklist**

- [ ] Preview opens correctly
- [ ] Real-time updates work
- [ ] Export functions work
- [ ] Configuration options work
- [ ] Keyboard shortcuts work
- [ ] Context menus work
- [ ] Themes apply correctly

## 📚 **Documentation**

### **Documentation Standards**

- Use clear, concise language
- Include code examples
- Add screenshots for UI features
- Keep documentation up-to-date with code changes

### **Documentation Structure**

```
docs/
├── getting-started/     # Installation and setup
├── user-guide/         # User documentation
├── developer/          # Developer documentation
├── examples/           # Usage examples
└── api/                # API reference
```

## 🔧 **Editor-Specific Development**

### **VS Code/Cursor Extension**

- **Location**: `src/` directory
- **Language**: TypeScript
- **Testing**: Jest + VS Code Extension Test
- **Build**: `npm run build:vscode`

### **IntelliJ IDEA Plugin**

- **Location**: `intellij/` directory
- **Language**: Java
- **Build System**: Gradle
- **Testing**: JUnit + IntelliJ Platform Test

### **Sublime Text Package**

- **Location**: `sublime/` directory
- **Language**: Python
- **Testing**: UnitTest + Sublime Text Test
- **Build**: `npm run build:sublime`

### **Atom Package**

- **Location**: `atom/` directory
- **Language**: JavaScript
- **Testing**: Jest + Atom Test
- **Build**: `npm run build:atom`

### **Vim/Neovim Plugin**

- **Location**: `vim/` directory
- **Language**: Vimscript
- **Testing**: Vader + Vim Test
- **Build**: `npm run build:vim`

## 🐛 **Bug Reports**

### **Bug Report Template**

```markdown
**Bug Description**
Clear description of the bug

**Steps to Reproduce**

1. Step 1
2. Step 2
3. Step 3

**Expected Behavior**
What should happen

**Actual Behavior**
What actually happens

**Environment**

- Editor: [VS Code/Cursor/IntelliJ/Sublime/Atom/Vim]
- Version: [Editor version]
- OS: [Operating system]
- Extension Version: [Extension version]

**Additional Information**
Screenshots, logs, etc.
```

## 💡 **Feature Requests**

### **Feature Request Template**

```markdown
**Feature Description**
Clear description of the requested feature

**Use Case**
Why this feature would be useful

**Proposed Implementation**
How you think it could be implemented

**Alternatives Considered**
Other approaches you've considered

**Additional Information**
Any other relevant details
```

## 🚀 **Release Process**

### **Versioning**

We use [Semantic Versioning](https://semver.org/):

- **Major**: Breaking changes
- **Minor**: New features, backward compatible
- **Patch**: Bug fixes, backward compatible

### **Release Checklist**

- [ ] All tests pass
- [ ] Documentation updated
- [ ] Changelog updated
- [ ] Version numbers updated
- [ ] Release notes written
- [ ] All editors built and tested
- [ ] Marketplace submissions prepared

## 📞 **Getting Help**

### **Community Resources**

- **Discord**: [Join our community](https://discord.gg/multieditor)
- **GitHub Issues**: [Browse issues](https://github.com/multieditor/preview-readme/issues)
- **GitHub Discussions**: [Start a discussion](https://github.com/multieditor/preview-readme/discussions)

### **Contact Information**

- **Email**: dev@multieditor.dev
- **Twitter**: [@multieditor](https://twitter.com/multieditor)
- **Blog**: [multieditor.dev/blog](https://multieditor.dev/blog)

## 🎉 **Recognition**

### **Contributor Hall of Fame**

Contributors will be recognized in:

- GitHub contributors list
- Project README
- Release notes
- Community announcements

### **Contributor Badges**

- 🥉 **Bronze**: 1-5 contributions
- 🥈 **Silver**: 6-15 contributions
- 🥇 **Gold**: 16+ contributions
- 💎 **Diamond**: Major contributions or maintainer status

---

**Thank you for contributing to making markdown preview better across all editors! 🎉**

Your contributions help developers worldwide have a consistent and powerful markdown preview experience regardless of their editor choice.
