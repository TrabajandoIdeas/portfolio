import { readdir, mkdir } from 'node:fs/promises'
import { existsSync } from 'node:fs'

// Ensure build directory exists
if (!existsSync(import.meta.dir + '/build')) {
  await mkdir(import.meta.dir + '/build', { recursive: true })
}

const files = await readdir(import.meta.dir + '/content')
const mainTemplate = await Bun.file(import.meta.dir + '/templates/main.html').text()

// Simple markdown to HTML converter
function markdownToHtml(markdown: string): string {
  const lines = markdown.split('\n')
  const result: string[] = []
  let inList = false
  let listType = ''

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim()

    if (line === '') {
      if (inList) {
        result.push(`</${listType}>`)
        inList = false
      }
      result.push('')
      continue
    }

    // Headers
    if (line.startsWith('### ')) {
      if (inList) { result.push(`</${listType}>`); inList = false }
      result.push(`<h3>${line.substring(4)}</h3>`)
    } else if (line.startsWith('## ')) {
      if (inList) { result.push(`</${listType}>`); inList = false }
      result.push(`<h2>${line.substring(3)}</h2>`)
    } else if (line.startsWith('# ')) {
      if (inList) { result.push(`</${listType}>`); inList = false }
      result.push(`<h1>${line.substring(2)}</h1>`)
    }
    // Blockquotes
    else if (line.startsWith('> ')) {
      if (inList) { result.push(`</${listType}>`); inList = false }
      result.push(`<blockquote>${line.substring(2)}</blockquote>`)
    }
    // Unordered lists
    else if (line.startsWith('- ')) {
      if (!inList || listType !== 'ul') {
        if (inList) result.push(`</${listType}>`)
        result.push('<ul>')
        inList = true
        listType = 'ul'
      }
      result.push(`<li>${line.substring(2)}</li>`)
    }
    // Ordered lists
    else if (/^\d+\. /.test(line)) {
      if (!inList || listType !== 'ol') {
        if (inList) result.push(`</${listType}>`)
        result.push('<ol>')
        inList = true
        listType = 'ol'
      }
      result.push(`<li>${line.replace(/^\d+\. /, '')}</li>`)
    }
    // Regular paragraphs
    else {
      if (inList) { result.push(`</${listType}>`); inList = false }
      result.push(`<p>${line}</p>`)
    }
  }

  if (inList) {
    result.push(`</${listType}>`)
  }

  return result.join('\n')
    // Process inline formatting
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/\[([^\]]*)\]\(([^)]*)\)/g, '<a href="$2">$1</a>')
    // Clean up empty lines
    .replace(/\n\s*\n/g, '\n')
}

// Process each markdown file
for (const file of files) {
  if (!file.endsWith('.md')) continue

  try {
    const mdContent = await Bun.file(import.meta.dir + '/content/' + file).text()
    const fileName = file.replace('.md', '.html')
    const filePath = import.meta.dir + '/build/' + fileName

    // Convert markdown to HTML
    const htmlContent = markdownToHtml(mdContent)

    // Replace template placeholders
    const finalHtml = mainTemplate
      .replace(/{{\s*content\s*}}/g, htmlContent)
      .replace(/{{\s*title\s*}}/g, fileName.replace('.html', '').charAt(0).toUpperCase() + fileName.replace('.html', '').slice(1))

    await Bun.write(filePath, finalHtml)
    console.log(`✅ Converted ${file} to HTML at ${filePath}`)
  } catch (err) {
    console.error(`❌ Error processing ${file}:`, err)
  }
}

console.log('🎉 Build complete!')
