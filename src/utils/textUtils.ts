/**
 * Utility functions for text processing and formatting
 */

/**
 * Splits text content into paragraphs based on double line breaks
 * @param content - Raw text content with line breaks
 * @returns Array of paragraph strings
 */
export function splitIntoParagraphs(content: string): string[] {
  if (!content) return [];
  
  return content
    .split('\n\n')
    .map(paragraph => paragraph.trim())
    .filter(paragraph => paragraph.length > 0);
}

/**
 * Formats text for display, preserving line breaks within paragraphs
 * @param content - Raw text content
 * @returns Formatted text with proper spacing
 */
export function formatText(content: string): string {
  if (!content) return '';
  
  return content
    .replace(/\n\n/g, '\n\n') // Preserve paragraph breaks
    .replace(/\n/g, ' ') // Convert single line breaks to spaces
    .replace(/\s+/g, ' ') // Collapse multiple spaces
    .trim();
}

/**
 * Truncates content to a specified number of paragraphs
 * @param content - Raw text content
 * @param paragraphLimit - Number of paragraphs to show
 * @returns Truncated content
 */
export function truncateContent(content: string, paragraphLimit: number): {
  truncated: string[];
  shouldTruncate: boolean;
  full: string[];
} {
  const paragraphs = splitIntoParagraphs(content);
  const shouldTruncate = paragraphs.length > paragraphLimit;
  const truncated = paragraphs.slice(0, paragraphLimit);
  
  return {
    truncated,
    shouldTruncate,
    full: paragraphs
  };
}

/**
 * Component helper for rendering paragraphs with proper styling
 * @param paragraphs - Array of paragraph strings
 * @param className - CSS classes for paragraph styling
 * @param animationDelay - Base delay for staggered animations (optional)
 */
export function renderParagraphs(
  paragraphs: string[], 
  className: string = "mb-6",
  animationDelay: number = 0.1
) {
  return paragraphs.map((paragraph, index) => ({
    content: paragraph,
    key: index,
    className,
    style: animationDelay ? { animationDelay: `${animationDelay * (index + 1)}s` } : {}
  }));
}