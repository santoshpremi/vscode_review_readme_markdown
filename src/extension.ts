import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {
    console.log('Preview README & Markdown extension is now active!');

    // Register all commands
    registerCommands(context);
    
    // Auto-preview functionality
    setupAutoPreview(context);
}

function registerCommands(context: vscode.ExtensionContext) {
    // Main preview command
    let previewDisposable = vscode.commands.registerCommand('preview-readme-markdown.previewMarkdown', () => {
        const config = vscode.workspace.getConfiguration('preview-readme-markdown');
        const defaultMode = config.get('defaultPreviewMode', 'side-by-side') as string;
        
        switch (defaultMode) {
            case 'side-by-side':
                openPreviewSideBySide();
                break;
            case 'new-tab':
                openPreviewInNewTab();
                break;
            case 'inline':
                openInlinePreview();
                break;
            default:
                openPreviewSideBySide();
        }
    });

    // Side-by-side preview
    let sideBySideDisposable = vscode.commands.registerCommand('preview-readme-markdown.previewSideBySide', () => {
        openPreviewSideBySide();
    });

    // New tab preview
    let newTabDisposable = vscode.commands.registerCommand('preview-readme-markdown.previewInNewTab', () => {
        openPreviewInNewTab();
    });

    // Export to HTML
    let exportHtmlDisposable = vscode.commands.registerCommand('preview-readme-markdown.exportToHTML', () => {
        exportToHTML();
    });

    // Export to PDF
    let exportPdfDisposable = vscode.commands.registerCommand('preview-readme-markdown.exportToPDF', () => {
        exportToPDF();
    });

    context.subscriptions.push(
        previewDisposable,
        sideBySideDisposable,
        newTabDisposable,
        exportHtmlDisposable,
        exportPdfDisposable
    );
}

function openPreviewSideBySide() {
    const editor = vscode.window.activeTextEditor;
    
    if (!editor) {
        vscode.window.showInformationMessage('No active editor found');
        return;
    }

    const document = editor.document;
    
    if (isMarkdownFile(document)) {
        vscode.commands.executeCommand('markdown.showPreviewToSide');
        vscode.window.showInformationMessage('Markdown preview opened side by side!');
    } else {
        vscode.window.showWarningMessage('This file is not a markdown file or README');
    }
}

function openPreviewInNewTab() {
    const editor = vscode.window.activeTextEditor;
    
    if (!editor) {
        vscode.window.showInformationMessage('No active editor found');
        return;
    }

    const document = editor.document;
    
    if (isMarkdownFile(document)) {
        vscode.commands.executeCommand('markdown.showPreview');
        vscode.window.showInformationMessage('Markdown preview opened in new tab!');
    } else {
        vscode.window.showWarningMessage('This file is not a markdown file or README');
    }
}

function openInlinePreview() {
    const editor = vscode.window.activeTextEditor;
    
    if (!editor) {
        vscode.window.showInformationMessage('No active editor found');
        return;
    }

    const document = editor.document;
    
    if (isMarkdownFile(document)) {
        // Create a custom webview for inline preview
        createInlinePreview(document);
    } else {
        vscode.window.showWarningMessage('This file is not a markdown file or README');
    }
}

function createInlinePreview(document: vscode.TextDocument) {
    const panel = vscode.window.createWebviewPanel(
        'markdownPreview',
        `Preview: ${document.fileName}`,
        vscode.ViewColumn.Beside,
        {
            enableScripts: true,
            retainContextWhenHidden: true
        }
    );

    const content = document.getText();
    const html = generatePreviewHTML(content, document.uri);
    
    panel.webview.html = html;
    
    // Update content when document changes
    const changeListener = vscode.workspace.onDidChangeTextDocument((e) => {
        if (e.document === document) {
            const newContent = document.getText();
            const newHtml = generatePreviewHTML(newContent, document.uri);
            panel.webview.html = newHtml;
        }
    });

    panel.onDidDispose(() => {
        changeListener.dispose();
    });
}

function generatePreviewHTML(content: string, uri: vscode.Uri): string {
    const config = vscode.workspace.getConfiguration('preview-readme-markdown');
    const theme = config.get('theme', 'auto') as string;
    const enableMath = config.get('enableMath', true);
    const enableMermaid = config.get('enableMermaid', true);

    // Determine actual theme based on auto setting
    let actualTheme = theme;
    if (theme === 'auto') {
        actualTheme = vscode.window.activeColorTheme.kind === vscode.ColorThemeKind.Dark ? 'dark' : 'light';
    }

    // Basic markdown to HTML conversion (you can enhance this with marked.js)
    let htmlContent = content
        .replace(/^### (.*$)/gim, '<h3>$1</h3>')
        .replace(/^## (.*$)/gim, '<h2>$1</h2>')
        .replace(/^# (.*$)/gim, '<h1>$1</h1>')
        .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
        .replace(/\*(.*)\*/gim, '<em>$1</em>')
        .replace(/`(.*)`/gim, '<code>$1</code>')
        .replace(/\n/gim, '<br>');

    return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Markdown Preview</title>
            <style>
                body {
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                    line-height: 1.6;
                    margin: 20px;
                    background-color: ${actualTheme === 'dark' ? '#1e1e1e' : '#ffffff'};
                    color: ${actualTheme === 'dark' ? '#ffffff' : '#000000'};
                }
                h1, h2, h3 { color: ${actualTheme === 'dark' ? '#4fc3f7' : '#1976d2'}; }
                code { 
                    background-color: ${actualTheme === 'dark' ? '#2d2d2d' : '#f5f5f5'};
                    padding: 2px 4px;
                    border-radius: 3px;
                    font-family: 'Consolas', 'Monaco', monospace;
                }
                strong { font-weight: bold; }
                em { font-style: italic; }
            </style>
        </head>
        <body>
            ${htmlContent}
        </body>
        </html>
    `;
}

function exportToHTML() {
    const editor = vscode.window.activeTextEditor;
    
    if (!editor) {
        vscode.window.showInformationMessage('No active editor found');
        return;
    }

    const document = editor.document;
    
    if (!isMarkdownFile(document)) {
        vscode.window.showWarningMessage('This file is not a markdown file or README');
        return;
    }

    const content = document.getText();
    const html = generatePreviewHTML(content, document.uri);
    
    // Show save dialog
    vscode.window.showSaveDialog({
        filters: {
            'HTML files': ['html']
        }
    }).then(uri => {
        if (uri) {
            const fileName = path.basename(document.fileName, path.extname(document.fileName)) + '.html';
            const filePath = path.join(path.dirname(uri.fsPath), fileName);
            fs.writeFileSync(filePath, html);
            vscode.window.showInformationMessage(`HTML exported to ${filePath}`);
        }
    });
}

function exportToPDF() {
    const editor = vscode.window.activeTextEditor;
    
    if (!editor) {
        vscode.window.showInformationMessage('No active editor found');
        return;
    }

    const document = editor.document;
    
    if (!isMarkdownFile(document)) {
        vscode.window.showWarningMessage('This file is not a markdown file or README');
        return;
    }

    // For now, we'll export to HTML and suggest using browser print to PDF
    const content = document.getText();
    const html = generatePreviewHTML(content, document.uri);
    
    vscode.window.showSaveDialog({
        filters: {
            'HTML files': ['html']
        }
    }).then(uri => {
        if (uri) {
            const fileName = path.basename(document.fileName, path.extname(document.fileName)) + '_for_pdf.html';
            const filePath = path.join(path.dirname(uri.fsPath), fileName);
            fs.writeFileSync(filePath, html);
            vscode.window.showInformationMessage(
                `HTML exported to ${filePath}. Open in browser and use Print > Save as PDF to create PDF.`
            );
        }
    });
}

function setupAutoPreview(context: vscode.ExtensionContext) {
    let autoPreviewDisposable = vscode.workspace.onDidOpenTextDocument((document) => {
        if (isMarkdownFile(document)) {
            const config = vscode.workspace.getConfiguration('preview-readme-markdown');
            if (config.get('autoPreview', false)) {
                setTimeout(() => {
                    const defaultMode = config.get('defaultPreviewMode', 'side-by-side') as string;
                    switch (defaultMode) {
                        case 'side-by-side':
                            vscode.commands.executeCommand('markdown.showPreviewToSide');
                            break;
                        case 'new-tab':
                            vscode.commands.executeCommand('markdown.showPreview');
                            break;
                        case 'inline':
                            createInlinePreview(document);
                            break;
                    }
                }, 500);
            }
        }
    });

    context.subscriptions.push(autoPreviewDisposable);
}

function isMarkdownFile(document: vscode.TextDocument): boolean {
    return document.languageId === 'markdown' || 
           document.fileName.toLowerCase().includes('readme') ||
           path.extname(document.fileName).toLowerCase() === '.md' ||
           path.extname(document.fileName).toLowerCase() === '.markdown';
}

export function deactivate() {
    // Cleanup code here if needed
}
